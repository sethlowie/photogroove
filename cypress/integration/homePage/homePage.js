describe("Home Page", () => {
  it("should have 3 images", () => {
    cy.visit("http://localhost:8000");

    cy.get("img").should("have.length", 3);
  });
});
