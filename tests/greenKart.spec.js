import { test, expect } from "@playwright/test";
import { LOCATORS } from "./LOCATORS";

test("Добавление и удаление продуктов, норм локаторы, быстрый вариант", async ({
  page,
}) => {
  // 1️⃣ Перейти на сайт
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

  // 2️⃣ Ввод "ro" в поиск с имитацией пользователя
  const searchInput = LOCATORS.searchInput(page);
  await searchInput.fill("");
  await searchInput.type("ro", { delay: 300 });

  // 🔹 Ждем появления Carrot
  const carrotQty = LOCATORS.carrotQtyInput(page);
  await carrotQty.waitFor({ state: "visible", timeout: 5000 });

  // 3️⃣ Carrot: установить количество
  await carrotQty.fill("5");

  // 4️⃣ Mushroom: увеличить через "+"
  const mushroomInc = LOCATORS.mushroomIncrement(page);
  await mushroomInc.waitFor({ state: "visible", timeout: 5000 });
  await mushroomInc.click();
  await mushroomInc.click();

  // 5️⃣ Добавить Carrot в корзину
  const addCarrot = LOCATORS.addToCartCarrot(page);
  await addCarrot.waitFor({ state: "visible", timeout: 5000 });
  await addCarrot.click();

  // 6️⃣ Добавить Mushroom в корзину
  const addMushroom = LOCATORS.addToCartMushroom(page);
  await addMushroom.waitFor({ state: "visible", timeout: 5000 });
  await addMushroom.click();

  // 7️⃣ Открыть корзину
  const cartIcon = LOCATORS.cartIcon(page);
  await cartIcon.waitFor({ state: "visible", timeout: 5000 });
  await cartIcon.click();

  // 🔹 Ждем, пока Carrot появится в корзине
  const removeCarrot = LOCATORS.cartRemoveCarrot(page);
  await removeCarrot.waitFor({ state: "visible", timeout: 5000 });

  // 8️⃣ Удаляем Carrot
  await removeCarrot.click();

  // 9️⃣ Проверка, что Carrot удален
  const carrotInCart = page.locator("li.cart-item", { hasText: "Carrot" });
  await expect(carrotInCart).toHaveCount(0, { timeout: 5000 });

  console.log(
    "✅ Финальный тест выполнен: Carrot удален, Mushroom добавлен, поиск 'ro' работает"
  );
});
