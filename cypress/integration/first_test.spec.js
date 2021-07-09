const { createVerify } = require("crypto");
const { hasUncaughtExceptionCaptureCallback } = require("process");

describe("first test", () => {
  it("testing visit", () => {
    const createAccountButtonValue = "Create New Account";
    const usernameTextPlaceholder = "Email address or phone number";
    cy.visit("https://www.facebook.com/");
    cy.get(":nth-child(8) > ._sv4").trigger("click");

    cy.get("[data-testid=open-registration-form-button]").then(($btn) => {
      const txt = $btn.text();
      cy.log("txt", txt);
      expect(txt).equal(createAccountButtonValue);
    });

    cy.get("[data-testid=royal_email]")
      .invoke("attr", "placeholder")
      .then((placeholder) => {
        const placeholdervalue = placeholder;
        cy.log(placeholdervalue);
        expect(placeholder).equal(usernameTextPlaceholder);
      });

    cy.get("[data-testid=royal_email]").type("rinssebastian@gmail.com");
    cy.get("[data-testid=royal_pass]").type("asdfsdghjsgdkaldf");
    cy.get("[data-testid=royal_login_button]").click();
  });
});
