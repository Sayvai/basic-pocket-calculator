import React from "react";
import './buttons.scss';
import { decode } from 'html-entities';
import { ButtonKey } from "../../utilities/types";

export interface ButtonsProps {
  onButtonPress: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const configButtons = [
  { displayValue: 'C', value: ButtonKey.Clear, ariaLabel: 'Clear', customClassName: 'button-clear' },
  { displayValue: '&divide;', value: ButtonKey.Divide, ariaLabel: 'Divide', isOperator: true },
  { displayValue: ButtonKey.Seven, ariaLabel: 'Seven', },
  { displayValue: ButtonKey.Eight, ariaLabel: 'Eight', },
  { displayValue: ButtonKey.Nine, ariaLabel: 'Nine', },
  { displayValue: '&times;', value: ButtonKey.Multiply, ariaLabel: 'Multiply', isOperator: true },
  { displayValue: ButtonKey.Four, ariaLabel: 'Four', },
  { displayValue: ButtonKey.Five, ariaLabel: 'Five', },
  { displayValue: ButtonKey.Six, ariaLabel: 'Six', },
  { displayValue: '&minus;', value: ButtonKey.Subtract, ariaLabel: 'Subtract', isOperator: true },
  { displayValue: ButtonKey.One, ariaLabel: 'One' },
  { displayValue: ButtonKey.Two, ariaLabel: 'Two' },
  { displayValue: ButtonKey.Three, ariaLabel: 'Three', },
  { displayValue: '&#43;', value: ButtonKey.Add, ariaLabel: 'Add', isOperator: true },
  { displayValue: ButtonKey.Zero, ariaLabel: 'Zero', customClassName: 'button-zero' },
  { displayValue: '&#61;', value: ButtonKey.Equal, ariaLabel: 'Equal', isOperator: true, customClassName: 'button-equal' },
];

export default function Buttons({ onButtonPress }: ButtonsProps) {
  const renderButtons = () => {
    return configButtons.map((btn) => {
      return (
        <button
          key={btn.displayValue}
          className={btn.customClassName}
          aria-label={btn.ariaLabel}
          data-button-value={btn.value || btn.displayValue}
          data-button-operator={btn.isOperator}
          data-testid={btn.ariaLabel}
          onClick={onButtonPress}
        >
          {decode(btn.displayValue)}
        </button>
      );
    })
  };

  return (
    <div data-testid="component-buttons" className="buttons">
      { renderButtons() }
    </div>);
}