/*
 * Behaviour and visual coverage.
 *
 * The visual baselines exist to catch the failure this project is most exposed
 * to: a stylesheet inherited from a sibling instrument, edited by search and
 * replace, silently losing a rule that only one workspace uses. The behaviour
 * tests cover the paths that broke during the port — the folio's four
 * registers, the workspace transitions, the search index, and the seals.
 */

import { expect, test } from "@playwright/test";

const VIEWPORTS = [
  { name: "1536x1024", width: 1536, height: 1024 },
  { name: "1440x900", width: 1440, height: 900 },
  { name: "1024x768", width: 1024, height: 768 },
  { name: "768x1024", width: 768, height: 1024 },
  { name: "390x844", width: 390, height: 844 }
];

/** Motion is off for every test: a tween mid-flight is not a baseline. */
async function settle(page) {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForFunction(() => document.fonts.status === "loaded");
}

test.describe("the instrument", () => {
  for (const viewport of VIEWPORTS) {
    test(`instrument at ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto("/#instrument");
      await settle(page);
      await expect(page).toHaveScreenshot(`instrument-${viewport.name}.png`, { fullPage: false });
    });

    test(`stemma at ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto("/#stemma");
      await settle(page);
      await expect(page).toHaveScreenshot(`stemma-${viewport.name}.png`, { fullPage: false });
    });
  }

  test("reckoning and register render at 1440x900", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/#reckoning");
    await settle(page);
    await expect(page).toHaveScreenshot("reckoning-1440x900.png");
    await page.goto("/#register");
    await settle(page);
    await expect(page).toHaveScreenshot("register-1440x900.png");
  });
});

test.describe("behaviour", () => {
  test("every book selects without a runtime error", async ({ page }) => {
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto("/#instrument");
    await settle(page);
    const opened = await page.evaluate(() => {
      let count = 0;
      for (let index = 0; index < 24; index += 1) {
        document.querySelectorAll("#hero-book-nav button, #hero-book-nav a")[index]
          ?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        document.querySelectorAll("#episode-ring g.episode-segment").forEach(segment => {
          segment.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          count += 1;
        });
      }
      return count;
    });
    expect(opened).toBe(185);
    expect(errors).toEqual([]);
  });

  test("a folio carries all four registers", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);
    await page.evaluate(() =>
      document.querySelectorAll("#episode-ring g.episode-segment")[2]
        .dispatchEvent(new MouseEvent("click", { bubbles: true })));
    await expect(page.locator("#focus-folio-beats li")).not.toHaveCount(0);
    await expect(page.locator("#focus-folio-reading")).not.toBeEmpty();
    await expect(page.locator("#focus-folio-sources")).not.toBeEmpty();
    await expect(page.locator("#focus-folio-cast li")).not.toHaveCount(0);
    // The plain register must name its turn outright; that is the whole rule.
    await expect(page.locator("#focus-folio-beats b, #focus-folio-beats strong")).not.toHaveCount(0);
  });

  test("search finds figures, terms, and episodes", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);
    await page.locator("[data-open-search]").first().click();
    for (const query of ["Eumaeus", "xenia", "Scylla"]) {
      await page.locator("#global-search").fill(query);
      await expect(page.locator(".search-result").first()).toBeVisible();
    }
    await page.locator("#global-search").fill("zzzznotathing");
    await expect(page.locator(".search-result")).toHaveCount(0);
  });

  test("figures resolve to a dossier with three registers", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);
    await page.locator("[data-console-cast]").first().click();
    await expect(page.locator("#figure-sheet")).toHaveAttribute("aria-hidden", "false");
    await expect(page.locator("#figure-greek")).not.toBeEmpty();
    await expect(page.locator("#figure-roman")).not.toBeEmpty();
    // The Homeric formula is the field this instrument exists to carry.
    await expect(page.locator("#figure-ovid")).not.toBeEmpty();
  });

  test("progress persists in the browser", async ({ page }) => {
    await page.goto("/#instrument");
    await settle(page);
    await page.locator("[data-mark-read]").click();
    await expect(page.locator("#progress-count")).toHaveText("1 / 24");
    await page.reload();
    await expect(page.locator("#progress-count")).toHaveText("1 / 24");
  });

  test("reduced motion still reaches every workspace", async ({ page }) => {
    // The primary nav collapses below the desktop breakpoint, so this test
    // needs a viewport wide enough to have one.
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    for (const name of ["reckoning", "stemma", "register", "lexicon", "method"]) {
      await page.locator(`.primary-nav [data-workspace-link="${name}"]`).click();
      await expect(page.locator(`.workspace-layer[data-workspace="${name}"]`)).toHaveAttribute("aria-hidden", "false");
    }
  });
});
