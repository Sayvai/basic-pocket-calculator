describe('Calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  enum Selector {
    BrandName = '[data-testid="component-branding"] h2',
    ProductName = '[data-testid="component-branding"] h3',
    OutputScreenInput = '[data-testid="component-screen"] input',
    CalculationButtons = '[data-testid="component-buttons"] button',
    ButtonClear = '[data-testid="Clear"]',
    ButtonDivide = '[data-testid="Divide"]',
    ButtonMultiply = '[data-testid="Multiply"]',
    ButtonSubtract = '[data-testid="Subtract"]',
    ButtonAdd = '[data-testid="Add"]',
    ButtonEqual = '[data-testid="Equal"]',
    ButtonZero = '[data-testid="Zero"]',
    ButtonOne = '[data-testid="One"]',
    ButtonTwo = '[data-testid="Two"]',
    ButtonThree = '[data-testid="Three"]',
    ButtonFour = '[data-testid="Four"]',
    ButtonFive = '[data-testid="Five"]',
    ButtonSix = '[data-testid="Six"]',
    ButtonSeven = '[data-testid="Seven"]',
    ButtonEight = '[data-testid="Eight"]',
    ButtonNine = '[data-testid="Nine"]',
  }

  // Demonstrates the testing of rendering against dynamic viewport resolutions without duplicating test code
  [
    { w: 800, h: 600 },
    'iphone-xr'
  ].forEach((size) => {
    const isSizeString = typeof size === 'string' ? true : false;

    it(`should render the main default calculator elements:
      - the main calculator UI
      - The (configurable) brand text
      - product name "Pocket Calculator"
      - output screen
      - calculation buttons
      - for viewport resolution ${isSizeString ? size : `width: ${size.w} | height: ${size.h}`}`, () => {

      if (isSizeString) {
        cy.viewport(size as any);
      } else {
        cy.viewport(size.w, size.h)
      }

      cy.get(Selector.BrandName).should('be.visible');
      cy.get(Selector.ProductName).should('be.visible');
      cy.get(Selector.OutputScreenInput).should('be.visible');
      cy.get(Selector.ButtonClear).should('be.visible');
      cy.get(Selector.ButtonMultiply).should('be.visible');
      cy.get(Selector.ButtonDivide).should('be.visible');
      cy.get(Selector.ButtonSubtract).should('be.visible');
      cy.get(Selector.ButtonAdd).should('be.visible');
      cy.get(Selector.ButtonEqual).should('be.visible');
      cy.get(Selector.ButtonOne).should('be.visible');
      cy.get(Selector.ButtonTwo).should('be.visible');
      cy.get(Selector.ButtonThree).should('be.visible');
      cy.get(Selector.ButtonFour).should('be.visible');
      cy.get(Selector.ButtonFive).should('be.visible');
      cy.get(Selector.ButtonSix).should('be.visible');
      cy.get(Selector.ButtonSeven).should('be.visible');
      cy.get(Selector.ButtonEight).should('be.visible');
      cy.get(Selector.ButtonNine).should('be.visible');
    })
  })

  it(`should be able to perform a correct calculation: 1+1=2`, () => {
    cy.get(Selector.ButtonOne).click();
    cy.get(Selector.ButtonAdd).click();
    cy.get(Selector.ButtonOne).click();
    cy.get(Selector.ButtonEqual).click();

    cy.get(Selector.OutputScreenInput).should('have.value', 2);
  })

  it(`should be able to perform a correct calculation: 10-4=6`, () => {
    cy.get(Selector.ButtonOne).click();
    cy.get(Selector.ButtonZero).click();
    cy.get(Selector.ButtonSubtract).click();
    cy.get(Selector.ButtonFour).click();
    cy.get(Selector.ButtonEqual).click();

    cy.get(Selector.OutputScreenInput).should('have.value', 6);
  })

  it(`should be able to perform a correct calculation: 8/2=4`, () => {
    cy.get(Selector.ButtonEight).click();
    cy.get(Selector.ButtonDivide).click();
    cy.get(Selector.ButtonTwo).click();
    cy.get(Selector.ButtonEqual).click();

    cy.get(Selector.OutputScreenInput).should('have.value', 4);
  })

  it(`should be able to perform a correct calculation: 6*9=54`, () => {
    cy.get(Selector.ButtonSix).click();
    cy.get(Selector.ButtonMultiply).click();
    cy.get(Selector.ButtonNine).click();
    cy.get(Selector.ButtonEqual).click();

    cy.get(Selector.OutputScreenInput).should('have.value', 54);
  })

  it(`should be able to perform a correct calculation: 6*10/2-5+1=26 (BODMAS)`, () => {
    cy.get(Selector.ButtonSix).click();
    cy.get(Selector.ButtonMultiply).click();
    cy.get(Selector.ButtonOne).click();
    cy.get(Selector.ButtonZero).click();
    cy.get(Selector.ButtonDivide).click();
    cy.get(Selector.ButtonTwo).click();
    cy.get(Selector.ButtonSubtract).click();
    cy.get(Selector.ButtonFive).click();
    cy.get(Selector.ButtonAdd).click();
    cy.get(Selector.ButtonOne).click();
    cy.get(Selector.ButtonEqual).click();

    cy.get(Selector.OutputScreenInput).should('have.value', 26);
  })

  it('should be able to clear the screen output', () => {
    cy.get(Selector.ButtonSeven).click();
    cy.get(Selector.ButtonAdd).click();
    cy.get(Selector.ButtonThree).click();

    cy.get(Selector.OutputScreenInput).should('have.value', '7+3');

    cy.get(Selector.ButtonClear).click();

    cy.get(Selector.OutputScreenInput).should('have.value', '');
  })
})

export { }
