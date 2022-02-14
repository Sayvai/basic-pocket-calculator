import { ButtonKey } from "./types";

interface GetCalculatedValuesOptions {
  buttonValue: ButtonKey;
  buttonIsOperator: boolean;
  currentOutput: string;
  currentResult: string;
}

type GetCalculatedValuesResponse = [string, string];

export function getCalculatedValues({ buttonValue, buttonIsOperator, currentOutput, currentResult }: GetCalculatedValuesOptions): GetCalculatedValuesResponse {
  let newOutput;
  let newResult = '';

  if (buttonValue !== ButtonKey.Equal && buttonIsOperator) {
    newOutput = currentOutput + buttonValue;
  } else if (buttonValue === ButtonKey.Equal) {
    let result;
    try {
      // eslint-disable-next-line no-eval
      result = eval(currentOutput);
    } catch (e) {
      console.warn('Invalid operation (evaluation). Invalidating entry');
      return [currentOutput, currentResult];
    }

    newOutput = result;
    newResult = result;
  } else if (buttonValue === ButtonKey.Clear) {
    newOutput = '';
  } else if (currentResult) {
    // last operation was a final result (ie. eguals), so just set new button value on output
    newOutput = buttonValue;
  } else {
    newOutput = currentOutput + buttonValue;
  }

  return [newOutput, newResult];
}