import { Injectable } from '@angular/core';


@Injectable({
              providedIn: 'root'
            })
export class StringService
{
  constructor(){ }

  /*#region String Validation*/

  /**
   * Checks if a string is null or white space
   */
  public IsNullOrWhiteSpace(input: string): boolean
  {
    if (input == null)
    {
      return true;
    }
    return input.toString().trim() === '';
  }

  /*#endregion String Validation*/

  /*#region String Manipulation*/

  /**
   * Converts a string to a sentence using Regex.
   * Supports Title case or sentence case.
   * @param input Input to convert
   * @param titleCase If true, sentence will be Title Case, else the sentence will be Sentence case
   * @returns Input converted to a sentence
   */
  public CamelCaseToSentence(input: string, titleCase: boolean = false): string
  {
    // Source: https://stackoverflow.com/a/35953318/9811258
    let result = input
        .replace(/(_)+/g, ' ')
        .replace(/([a-z])([A-Z][a-z])/g, '$1 $2')
        .replace(/([A-Z][a-z])([A-Z])/g, '$1 $2')
        .replace(/([a-z])([A-Z]+[a-z])/g, '$1 $2')
        .replace(/([A-Z]+)([A-Z][a-z][a-z])/g, '$1 $2')
        .replace(/([a-z]+)([A-Z0-9]+)/g, '$1 $2')

        .replace(/([A-Z]+)([A-Z][a-rt-z][a-z]*)/g, '$1 $2')
        .replace(/([0-9])([A-Z][a-z]+)/g, '$1 $2')

        .replace(/([A-Z]{2,})([0-9]{2,})/g, '$1 $2')
        .replace(/([0-9]{2,})([A-Z]{2,})/g, '$1 $2')
        .trim();

    const splitResult = result.split(' ');
    for (let i = 0; i < splitResult.length; i++)
    {
      const currentResult = splitResult[i];

      if (this.CountCapitals(currentResult) > 1)
      {
        continue;
      }

      if (titleCase || i === 0)
      {
        splitResult[i] = currentResult.charAt(0).toUpperCase() + currentResult.slice(1);
      }
      else
      {
        splitResult[i] = currentResult.charAt(0).toLowerCase() + currentResult.slice(1);
      }
    }

    result = splitResult.join(' ');

    return result;
  }

  /*#endregion String Manipulation*/

  /*#region Counting Functions*/

  /**
   * Counts the amount of capital letters in a string
   * @param input String to count letters in
   * @returns Amount of capital letters in the input string
   */
  public CountCapitals(input: string): number
  {
    // Source: https://www.sitepoint.com/community/t/how-to-count-the-number-of-uppercase-letters-in-a-string/3054/4
    return input.replace(/[^A-Z]/g, '').length;
  }

  /**
   * Counts the amount of lower case letters in a string
   * @param input String to count letters in
   * @returns Amount of lower case letters in the input string
   */
  public CountLowerCase(input: string): number
  {
    // Edited from CountCapitals
    return input.replace(/[^a-z]/g, '').length;
  }

  /**
   * Counts the amount of numbers in a string
   * @param input String to count numbers in
   * @returns Amount of numbers in the input string
   */
  public CountNumbers(input: string): number
  {
    // Edited from CountCapitals
    return input.replace(/[^0-9]/g, '').length;
  }

  /*#endregion Counting Functions*/
}
