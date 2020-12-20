import { Injectable } from '@angular/core';
import { NumberFormatConfig } from './types/number-format.config';
import { RegexService } from '../regex/regex.service';


@Injectable({
              providedIn: 'root'
            })
export class NumberService
{
  constructor(private regexService: RegexService){ }

  /*#region Formatting*/

  public FormatNumber(input: number | string, formatConfig?: NumberFormatConfig): string
  {
    if (input == null)
    {
      return formatConfig?.MinValue == null ? '' : formatConfig.MinValue.toString();
    }
    input = input.toString();
    formatConfig = this.FixNumberFormatConfig(formatConfig);

    if (formatConfig.DecimalSeparator != null)
    {
      input = input.replace(new RegExp(this.regexService.EscapeSpecialChars(formatConfig.DecimalSeparator) as string, 'g'), '.');
    }

    let numberInput: number | string = this.CheckMinMax(parseFloat(input as string), formatConfig);

    if (formatConfig.DecimalSeparator != null)
    {
      numberInput = this.AddDecimalPlaces(numberInput, formatConfig);
    }

    if (formatConfig.ThousandSeparator != null)
    {
      numberInput = this.AddThousandSeparator(numberInput, formatConfig);
    }

    return numberInput.toString();
  }

  public GetNumberFromString(input: string, formatConfig?: NumberFormatConfig): number
  {
    if (input == null)
    {
      return formatConfig?.MinValue == null ? 0 : formatConfig.MinValue;
    }
    input = input.toString();
    formatConfig = this.FixNumberFormatConfig(formatConfig);

    if (formatConfig.ThousandSeparator != null)
    {
      input = input.replace(new RegExp(this.regexService.EscapeSpecialChars(formatConfig.ThousandSeparator) as string, 'g'), '');
    }

    if (formatConfig.DecimalSeparator != null)
    {
      input = input.replace(new RegExp(this.regexService.EscapeSpecialChars(formatConfig.DecimalSeparator) as string, 'g'), '.');
    }

    input = this.RemoveExcessDecimalPlaces(input, formatConfig);

    return this.CheckMinMax(parseFloat(input as string), formatConfig);
  }

  /*#endregion Formatting*/

  /*#region Private Helpers*/

  /*#region FormatConfig*/

  private FixNumberFormatConfig(formatConfig?: NumberFormatConfig): NumberFormatConfig
  {
    if (formatConfig == null)
    {
      return new NumberFormatConfig();
    }

    if (formatConfig.DecimalSeparator != null && formatConfig.DecimalCount == null)
    {
      formatConfig.DecimalCount = 2;
    }
    else if (formatConfig.DecimalSeparator === null)
    {
      formatConfig.DecimalCount = 0;
    }

    if (formatConfig.UseLocaleForUnspecifiedSymbols === true)
    {
      // Edits the object reference
      this.LocaliseConfig(formatConfig);
    }

    return formatConfig;
  }

  private LocaliseConfig(formatConfig: NumberFormatConfig): NumberFormatConfig
  {
    // TODO : Localisation
    throw new Error('Unimplemented Exception');
  }

  /*#endregion FormatConfig*/

  /*#region Validation*/

  private CheckMinMax(input: number, formatConfig: NumberFormatConfig): number
  {
    if (formatConfig.MinValue != null && input < (formatConfig.MinValue as number))
    {
      return (formatConfig.MinValue as number);
    }

    if (formatConfig.MaxValue != null && input > (formatConfig.MaxValue as number))
    {
      return (formatConfig.MaxValue as number);
    }
    return input;
  }

  /*#endregion Validation*/

  /*#region String Manipulation*/

  private RemoveExcessDecimalPlaces(input: string, formatConfig: NumberFormatConfig): string
  {
    if (!input.includes('.'))
    {
      return input;
    }

    const decimalIndex = input.indexOf('.');
    const lastDecimalIndex = decimalIndex + (formatConfig.DecimalCount as number);

    if (lastDecimalIndex === input.length)
    {
      return input;
    }

    const decimalAfterLastValue = parseFloat(input.substr(lastDecimalIndex + 1, 1));
    if (decimalAfterLastValue >= 5)
    {
      const lastDecimalValue = parseFloat(input[lastDecimalIndex]) + 1;
      input = input.substr(0, lastDecimalIndex) + lastDecimalValue;
    }
    else
    {
      input = input.substr(0, lastDecimalIndex + 1);
    }

    return input;
  }

  private AddDecimalPlaces(numberInput: number, formatConfig: NumberFormatConfig): string
  {
    return numberInput.toFixed(formatConfig.DecimalCount as number)
                      .replace(/\./g, formatConfig.DecimalSeparator as string);
  }

  private AddThousandSeparator(numberInput: number | string, formatConfig: NumberFormatConfig): string
  {
    let stringInput = numberInput.toString();

    const decimalIndex = stringInput.indexOf(formatConfig.DecimalSeparator ?? '.');

    const thousandStartingIndex = decimalIndex === -1
                                  ? stringInput.length - 1
                                  : decimalIndex - 1;

    if (stringInput.length - stringInput.substr(thousandStartingIndex + 1).length < 3)
    {
      return stringInput;
    }

    for (let i = thousandStartingIndex - 3; i >= 0; i = i - 3)
    {
      stringInput = stringInput.substr(0, i + 1) + formatConfig.ThousandSeparator + stringInput.substr(i + 1);
    }

    return stringInput;
  }

  /*#endregion String Manipulation*/

  /*#endregion Private Helpers*/
}
