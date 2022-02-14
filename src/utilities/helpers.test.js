import { getCalculatedValues } from './helpers';
import { ButtonKey } from './types';

describe('utilities/helpers.ts', () => {
  describe('getCalculatedValues()', () => {
    let options;

    beforeEach(() => {
      options = {
        buttonValue: '',
        buttonIsOperator: false,
        currentOutput: '',
        currentResult: '',
      };
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it(`should
        - return a value which concatenates the 'value' on top of 'currentOutput' to the returned tuple variable 'newOutput'
        - and return an empty string to the 'newResult' tuple variable
        - when button value is of an operator type other than 'Equal'`, () => {

      // given
      options.buttonValue = ButtonKey.Multiply;
      options.buttonIsOperator = true;
      options.currentOutput = '7';

      // when
      const result = getCalculatedValues(options);

      // then
      expect(result).toEqual(['7*', '']);
    });

    it(`should
    - return a fully evaluated value to both 'newOutput' and 'newResult' tuple variables
    - when button value of Equal is passed.`, () => {
      // given
      options.buttonValue = ButtonKey.Equal;
      options.currentOutput = '2+2';

      // when
      const result = getCalculatedValues(options);

      // then
      expect(result).toEqual([4, 4]);
    });

    it(`should
    - return the value that is passed into the function, to the 'newOutput' tuple variable
    - and also return an empty string value to the tuple variable 'newResult'
    - when button 'value' is a number (not an operator)
    - and when there is a 'currentResult' passed in (i.e. an evaluated result)`, () => {
      // given
      options.buttonValue = ButtonKey.Three;
      options.currentResult = '11';

      // when
      const result = getCalculatedValues(options);

      // then
      expect(result).toEqual([ButtonKey.Three, '']);
    });

    it(`should
        - return a value which concatenates the 'buttonValue' after the 'currentOutput'
        - to the returned tuple variable 'newOuput'
        - and return an empty string to the returned tuple variable 'newResult'`, () => {
      // given
      options.buttonValue = ButtonKey.Six;
      options.currentOutput = '7+';

      // when
      const result = getCalculatedValues(options);

      // then
      expect(result).toEqual([`7+${ButtonKey.Six}`, '']);
    });

    it(`should
        - return the 'currentOutput' and 'currentResult' values as-is, as tuple variables 'newOutput' and 'newResult' repsectively,
        - and call console.warn
        - when the last character of 'currentOutput' is an operator
        - and when 'buttonValue' (key pressed) is an Equal operator`, () => {
      // given
      options.buttonValue = ButtonKey.Equal;
      options.currentOutput = '2*';

      jest.spyOn(console, 'warn');

      // when
      const result = getCalculatedValues(options);

      // then
      expect(result).toEqual([`2*`, '']);
      expect(console.warn).toHaveBeenCalledWith('Invalid operation (evaluation). Invalidating entry');
    });
  });
});