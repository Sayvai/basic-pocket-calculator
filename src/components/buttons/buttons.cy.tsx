import Buttons, { ButtonsProps } from "./buttons";

function wrappedMount(children: React.ReactElement) {
  cy.viewport(600, 320);
  cy.mount(<div className="App">{children}</div>)
}

describe('Buttons component', () => {
  enum Selector {
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

  let spyOnButtonPress: ButtonsProps['onButtonPress'];

  beforeEach(() => {
    spyOnButtonPress = cy.spy().as('spyOnButtonPress');
  });

  it('should render multiple buttons', () => {
    // when
    wrappedMount(<Buttons onButtonPress={spyOnButtonPress} />);

    // then
    cy.get(Selector.CalculationButtons).should('be.visible').and('have.length', 16);

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
  });

  it('should call props.onButtonPress when a button is clicked', () => {
    // given
    wrappedMount(<Buttons onButtonPress={spyOnButtonPress} />);

    // when
    cy.get(Selector.ButtonFive).click();

    // then
    cy.get('@spyOnButtonPress').should('have.been.called')
  });
})
