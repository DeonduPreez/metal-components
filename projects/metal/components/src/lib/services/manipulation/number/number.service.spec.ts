import { TestBed } from '@angular/core/testing';

import { NumberService } from './number.service';
import { NumberFormatConfig } from './types/number-format.config';


describe('NumberService', () =>
{
  let service: NumberService;

  beforeEach(() =>
             {
               TestBed.configureTestingModule({});
               service = TestBed.inject(NumberService);
             });

  /*#region Formatting*/

  /*#region FormatNumber*/

  it('FormatNumber should return a string formatted as a number', () =>
  {
    const input = '542.21';
    const expectedResult = '542.21';

    const result = service.FormatNumber(input);

    expect(result).toEqual(expectedResult);
  });

  it('FormatNumber should remove any extra zeroes at the start of the input', () =>
  {
    const input = '00000542.21';
    const expectedResult = '542.21';

    const result = service.FormatNumber(input);

    expect(result).toEqual(expectedResult);
  });

  it('FormatNumber should return MinValue if input is less than MinValue', () =>
  {
    const numberConfig = new NumberFormatConfig();
    numberConfig.MinValue = 600;

    const input = '542.21';
    const expectedResult = numberConfig.MinValue.toString();

    const result = service.FormatNumber(input, numberConfig);

    expect(result).toEqual(expectedResult);
  });

  it('FormatNumber should return MaxValue if input is greater than MaxValue', () =>
  {
    const numberConfig = new NumberFormatConfig();
    numberConfig.MaxValue = 500;

    const input = '542.21';
    const expectedResult = numberConfig.MaxValue.toString();

    const result = service.FormatNumber(input, numberConfig);

    expect(result).toEqual(expectedResult);
  });

  it('FormatNumber should be able to support any decimal character', () =>
  {
    const numberConfig = new NumberFormatConfig();
    numberConfig.DecimalCount = 2;
    numberConfig.DecimalSeparator = '.';

    const input = '542.21';
    const expectedResult1 = '542.21';

    const result1 = service.FormatNumber(input, numberConfig);
    expect(result1).toEqual(expectedResult1);

    numberConfig.DecimalSeparator = '|';
    const expectedResult2 = '542|21';

    const result2 = service.FormatNumber(input, numberConfig);
    expect(result2).toEqual(expectedResult2);

    numberConfig.DecimalSeparator = ',';
    const expectedResult3 = '542,21';

    const result3 = service.FormatNumber(input, numberConfig);
    expect(result3).toEqual(expectedResult3);
  });

  /*#region Decimal Handling*/

  it('FormatNumber should force a specific decimal count if DecimalSeparator and DecimalCount is specified', () =>
  {
    const numberConfig = new NumberFormatConfig();
    numberConfig.DecimalCount = 2;
    numberConfig.DecimalSeparator = '.';

    const input1 = '542.214564';
    const expectedResult1 = '542.21';

    const result1 = service.FormatNumber(input1, numberConfig);
    expect(result1).toEqual(expectedResult1);

    const input2 = '542';
    const expectedResult2 = '542.00';

    const result2 = service.FormatNumber(input2, numberConfig);
    expect(result2).toEqual(expectedResult2);
  });

  it('FormatNumber should round up on decimals greater or equal to 5', () =>
  {
    const numberConfig = new NumberFormatConfig();
    numberConfig.DecimalCount = 2;
    numberConfig.DecimalSeparator = '.';

    const input = '542.215564';
    const expectedResult = '542.22';

    const result = service.FormatNumber(input, numberConfig);
    expect(result).toEqual(expectedResult);
  });

  it('FormatNumber should round down on decimals less than 5', () =>
  {
    const numberConfig = new NumberFormatConfig();
    numberConfig.DecimalCount = 2;
    numberConfig.DecimalSeparator = '.';

    const input = '542.214564';
    const expectedResult = '542.21';

    const result = service.FormatNumber(input, numberConfig);
    expect(result).toEqual(expectedResult);
  });

  it('FormatNumber should add zeroes after all decimals', () =>
  {
    const numberConfig = new NumberFormatConfig();
    numberConfig.DecimalCount = 4;
    numberConfig.DecimalSeparator = '.';

    const input = '542.21';
    const expectedResult = '542.2100';

    const result = service.FormatNumber(input, numberConfig);
    expect(result).toEqual(expectedResult);
  });

  /*#endregion Decimal Handling*/

  /*#region Thousand Separator*/

  it('FormatNumber should only add a thousand separator if ThousandSeparator is specified and the value is more than 1000', () =>
  {
    const config = new NumberFormatConfig();
    config.ThousandSeparator = ',';

    const input1 = '1234';
    const expectedOutput1 = '1,234';

    const result1 = service.FormatNumber(input1, config);
    expect(result1).toEqual(expectedOutput1);

    const input2 = '12345678';
    const expectedOutput2 = '12,345,678';

    const result2 = service.FormatNumber(input2, config);
    expect(result2).toEqual(expectedOutput2);

    const input3 = '123456789';
    const expectedOutput3 = '123,456,789';

    const result3 = service.FormatNumber(input3, config);
    expect(result3).toEqual(expectedOutput3);

    const input4 = '123';
    const expectedOutput4 = '123';

    const result4 = service.FormatNumber(input4, config);
    expect(result4).toEqual(expectedOutput4);
  });

  it('FormatNumber should not add a thousand separator after decimals', () =>
  {
    const config = new NumberFormatConfig();
    config.DecimalSeparator = '.';
    config.DecimalCount = 4;
    config.ThousandSeparator = ',';

    const input = '1234.4567';
    const expectedOutput = '1,234.4567';

    const result = service.FormatNumber(input, config);
    expect(result).toEqual(expectedOutput);
  });

  /*#endregion Thousand Separator*/

  /*#endregion FormatNumber*/

  /*#region GetNumberFromString*/

  it('GetNumberFromString should return a null or config.MinValue if the input is null', () =>
  {
    // @ts-ignore // Ignoring null value being passed in
    const result1 = service.GetNumberFromString(null);
    expect(result1).toEqual(0);

    const config = new NumberFormatConfig();
    config.MinValue = 2;
    const expectedValue = config.MinValue;
    // @ts-ignore // Ignoring null value being passed in
    const result2 = service.GetNumberFromString(null, config);
    expect(result2).toEqual(expectedValue);
  });

  it('GetNumberFromString should return a valid number from a simple number string', () =>
  {
    const input = '123';
    const expectedValue = parseFloat(input);

    const result = service.GetNumberFromString(input);
    expect(result).toEqual(expectedValue);
  });

  /*#region Decimal Handling*/

  it('GetNumberFromString should return a valid number with no decimals if decimal is not specified', () =>
  {
    const config = new NumberFormatConfig();
    config.DecimalSeparator = null;

    const input = '123.24';
    const expectedValue = parseFloat(input.substr(0, 3));

    const result = service.GetNumberFromString(input, config);
    expect(result).toEqual(expectedValue);
  });

  it('GetNumberFromString should return a valid number with decimals if decimal is specified', () =>
  {
    const formatConfig = new NumberFormatConfig();
    formatConfig.DecimalSeparator = ',';
    formatConfig.DecimalCount = 2;

    const input = '123,24';
    const expectedValue = parseFloat(input.replace(/,/g, '.'));

    const result = service.GetNumberFromString(input, formatConfig);
    expect(result).toEqual(expectedValue);
  });

  it('GetNumberFromString should not round if decimal is specified and less than 5', () =>
  {
    const formatConfig = new NumberFormatConfig();
    formatConfig.DecimalSeparator = ',';
    formatConfig.DecimalCount = 1;

    const input = '123,24';
    const expectedValue = 123.2;

    const result = service.GetNumberFromString(input, formatConfig);
    expect(result).toEqual(expectedValue);
  });

  it('GetNumberFromString should round up if decimal is specified and greater than 5', () =>
  {
    const formatConfig = new NumberFormatConfig();
    formatConfig.DecimalSeparator = ',';
    formatConfig.DecimalCount = 1;

    const input = '123,25';
    const expectedValue = 123.3;

    const result = service.GetNumberFromString(input, formatConfig);
    expect(result).toEqual(expectedValue);
  });

  /*#endregion Decimal Handling*/

  it('GetNumberFromString should remove thousand separators if thousand separator is specified', () =>
  {
    const formatConfig = new NumberFormatConfig();
    formatConfig.ThousandSeparator = ',';

    const input = '12,567,123';
    const expectedValue = 12567123;

    const result = service.GetNumberFromString(input, formatConfig);
    expect(result).toEqual(expectedValue);
  });

  // TODO : Check if GetNumberFromString has proper tests

  /*#endregion GetNumberFromString*/

  /*#endregion Formatting*/
});
