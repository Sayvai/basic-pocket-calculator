import Calculator from "./calculator";

import { expect } from 'chai'

import rgbHex from 'rgb-hex';
import { Config } from "../../utilities/types";

function wrappedMount(children: React.ReactElement) {
  cy.viewport(600, 525);
  cy.mount(<div className="App">{children}</div>)
}

describe('Calculator component', () => {
  enum Selector {
    Calculator = '[data-testid="component-caculator"]',
    BrandBar = '[data-testid="component-branding"]',
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

  describe('renderings', () => {
    it(`should render the
      - brand text
      - product name
      - output screen
      - buttons
      - and correct foreground / background colours`, () => {
      // given
      const config = {
        brandName: 'Cypress component test!',
        brandingColorHex: '#62CBE7',
        backgroundColorHex: '#104373',
      };

      // when
      wrappedMount(<Calculator config={config} />);

      // then
      cy.get(Selector.BrandName).should('have.text', config.brandName);
      cy.get(Selector.ProductName).should('have.text', 'Pocket Calculator');
      cy.get(Selector.OutputScreenInput).should('be.visible').and('have.value', '');
      cy.get(Selector.CalculationButtons).should('be.visible').and('have.length', 16);

      cy.get(Selector.Calculator)
        .invoke('css', 'background-color')
        .then((bgcolor) => {
          expect(rgbHex(bgcolor as unknown as string)).to.equal(config.backgroundColorHex.replace('#', '').toLowerCase());
        })

      cy.get(Selector.BrandBar)
        .invoke('css', 'background-color')
        .then((bgcolor) => {
          expect(rgbHex(bgcolor as unknown as string)).to.equal(config.brandingColorHex.replace('#', '').toLowerCase());
        })
    })
  })

  describe('button interactions', () => {
    let config: Config;

    beforeEach(() => {
      config = {
        brandName: 'Button interaction test!',
        brandingColorHex: '#F13454',
        backgroundColorHex: '#AF0C37',
      }
    });

    it('should initially render screen with no content', () => {
      // when
      wrappedMount(<Calculator config={config} />);

      // then
      cy.get(Selector.OutputScreenInput).and('have.value', '');
    });

    it('should render button key value entry onto the screen', () => {
      // given
      wrappedMount(<Calculator config={config} />);

      // then
      cy.get(Selector.OutputScreenInput).and('have.value', '');

      // when
      cy.get(Selector.ButtonEight).click();

      // then
      cy.get(Selector.OutputScreenInput).and('have.value', 8);
    });

    it('should clear the screen after a button key value entry', () => {
      // given
      wrappedMount(<Calculator config={config} />);

      // when
      cy.get(Selector.ButtonFive).click();

      // then
      cy.get(Selector.OutputScreenInput).and('have.value', 5);

      // when
      cy.get(Selector.ButtonClear).click();

      // then
      cy.get(Selector.OutputScreenInput).and('have.value', '');
    });

    it('should render the correct calculated result for 1+1', () => {
      // given
      wrappedMount(<Calculator config={config} />);

      // when
      cy.get(Selector.ButtonOne).click();
      cy.get(Selector.ButtonAdd).click();
      cy.get(Selector.ButtonOne).click();

      // then
      cy.get(Selector.OutputScreenInput).and('have.value', '1+1');

      // when
      cy.get(Selector.ButtonEqual).click();

      // then
      cy.get(Selector.OutputScreenInput).and('have.value', 2);
    });
  });
})
