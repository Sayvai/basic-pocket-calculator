import React from 'react';
import { getCalculatedValues } from '../../utilities/helpers';
import { ButtonKey, Config } from '../../utilities/types';
import Branding from '../branding/branding';
import Buttons from '../buttons/buttons';
import Screen from '../screen/screen';
import './calculator.scss';

interface CalculatorProps {
  config: Config;
}

export default function Calculator({ config }: CalculatorProps) {
  const [screenOutput, setScreenOutput] = React.useState('');
  const [finalResult, setFinalResult] = React.useState('');

  const onButtonPress = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = (event.currentTarget.dataset.buttonValue|| '') as ButtonKey;
    const isOperator = Boolean(event.currentTarget.dataset.buttonOperator);

    const [newScreenOutput, newFinalResult] = getCalculatedValues({ buttonValue: value, buttonIsOperator: isOperator, currentOutput: screenOutput, currentResult: finalResult });

    setScreenOutput(newScreenOutput);
    setFinalResult(newFinalResult);
  };

  return (
    <div data-testid="component-caculator" className="calculator" style={{backgroundColor: config.backgroundColorHex}}>
      <Branding name={config.brandName} assetUrl={config.assetUrl} backgroundColorHex={config.brandingColorHex} />
      <Screen output={screenOutput} />
      <Buttons onButtonPress={onButtonPress} />
    </div>
  );
}
