describe("Home Page", () => {
  it("should have 3 images", () => {
    cy.visit("http://localhost:8000");

    cy.get("img").should("have.length", 3);
  });

  it("should have an active photo", () => {
    cy.visit("http://localhost:8000");

    cy.get("img")
      .first()
      .should("have.class", "active");
  });
});
