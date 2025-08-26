export const LOCATORS = {
  // 🔹 Поле поиска
  searchInput: (page) =>
    page.getByRole("searchbox", { name: "Search for Vegetables and Fruits" }),

  // 🔹 Carrot: поле ввода количества
  carrotQtyInput: (page) =>
    page
      .getByText("Carrot")
      .locator("..") // родитель div
      .locator("input.quantity"),

  // 🔹 Mushroom: кнопка "+"
  mushroomIncrement: (page) =>
    page
      .getByText("Mushroom")
      .locator("..") // родитель div
      .locator("a.increment"),

  // 🔹 Добавить Carrot в корзину
  addToCartCarrot: (page) =>
    page
      .getByText("Carrot")
      .locator("..")
      .locator("button", { hasText: "ADD TO CART" }),

  // 🔹 Добавить Mushroom в корзину
  addToCartMushroom: (page) =>
    page
      .getByText("Mushroom")
      .locator("..")
      .locator("button", { hasText: "ADD TO CART" }),

  // 🔹 Иконка корзины
  cartIcon: (page) => page.locator(".cart-icon"),

  // 🔹 Удалить Carrot из корзины
  cartRemoveCarrot: (page) =>
    page
      .locator("li.cart-item", { has: page.getByText("Carrot") })
      .locator("a.product-remove")
      .first(),
};
