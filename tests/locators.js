export const LOCATORS = {
  searchInput: (page) =>
    page.getByRole("searchbox", { name: "Search for Vegetables and Fruits" }),

  carrotQtyInput: (page) =>
    page.getByText("Carrot").locator("..").locator("input.quantity"),

  mushroomIncrement: (page) =>
    page.getByText("Mushroom").locator("..").locator("a.increment"),

  addToCartCarrot: (page) =>
    page
      .getByText("Carrot")
      .locator("..")
      .locator("button", { hasText: "ADD TO CART" }),

  addToCartMushroom: (page) =>
    page
      .getByText("Mushroom")
      .locator("..")
      .locator("button", { hasText: "ADD TO CART" }),

  cartIcon: (page) => page.locator(".cart-icon"),

  cartRemoveCarrot: (page) =>
    page
      .locator("li.cart-item", { has: page.getByText("Carrot") })
      .locator("a.product-remove")
      .first(),
};
