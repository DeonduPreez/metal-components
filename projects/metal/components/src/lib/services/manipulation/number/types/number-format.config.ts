export class NumberFormatConfig
{
  /*#region Symbols*/

  // TODO : Localisation
  // TODO : Make default
  /**
   * Uses user's locale to get symbol entries from if the entry isn't specified (decimal and thousand separator)
   */
  public UseLocaleForUnspecifiedSymbols: boolean | null = false;

  /**
   * The decimal separator to be used for numbers.
   * Not specifying this means no decimals.
   */
  public DecimalSeparator: string | null = null;

  /**
   * Amount of decimal places after the decimal separator
   */
  public DecimalCount: number | null = null;

  // TODO : Thousand separator
  /**
   * The decimal separator to be used for numbers.
   * Not specifying this means no decimals.
   */
  public ThousandSeparator: string | null = null;

  /*#endregion Symbols*/

  /*#region Validation*/

  /**
   * The value that may not be exceeded.
   * Not specifying this means no maximum.
   */
  public MaxValue: number | null = null;

  /**
   * The value that may not be exceeded.
   * Not specifying this means no maximum.
   */
  public MinValue: number | null = null;

  /*#endregion Validation*/
}
