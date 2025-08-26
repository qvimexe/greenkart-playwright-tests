import { test, expect } from "@playwright/test";
import { LOCATORS } from "./LOCATORS";

test("автоматизированное тестирование (Junior+)", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

  const searchInput = LOCATORS.searchInput(page);
  await searchInput.fill("");
  await searchInput.type("ro", { delay: 300 });

  const carrotQty = LOCATORS.carrotQtyInput(page);
  await carrotQty.waitFor({ state: "visible", timeout: 5000 });

  await carrotQty.fill("5");

  const mushroomInc = LOCATORS.mushroomIncrement(page);
  await mushroomInc.waitFor({ state: "visible", timeout: 5000 });
  await mushroomInc.click();
  await mushroomInc.click();

  const addCarrot = LOCATORS.addToCartCarrot(page);
  await addCarrot.waitFor({ state: "visible", timeout: 5000 });
  await addCarrot.click();

  const addMushroom = LOCATORS.addToCartMushroom(page);
  await addMushroom.waitFor({ state: "visible", timeout: 5000 });
  await addMushroom.click();

  const cartIcon = LOCATORS.cartIcon(page);
  await cartIcon.waitFor({ state: "visible", timeout: 5000 });
  await cartIcon.click();

  const removeCarrot = LOCATORS.cartRemoveCarrot(page);
  await removeCarrot.waitFor({ state: "visible", timeout: 5000 });

  await removeCarrot.click();

  const carrotInCart = page.locator("li.cart-item", { hasText: "Carrot" });
  await expect(carrotInCart).toHaveCount(0, { timeout: 5000 });
});
