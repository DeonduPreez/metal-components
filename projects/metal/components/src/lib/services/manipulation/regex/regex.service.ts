import { Injectable } from '@angular/core';


@Injectable({
              providedIn: 'root'
            })
export class RegexService
{
  private SpecialChars = [ '|', '.', '*', '\\', '+', '?', '{', '}', '(', ')', '[', ']', '$', '&' ];

  constructor(){ }

  public EscapeSpecialChars(input: string): string | null
  {
    if (input == null)
    {
      return null;
    }

    let output = '';

    for (let i = 0; i < input.length; i++)
    {
      const char = input[i];
      output += this.SpecialChars.includes(char) ? `\\${ char }` : char;
    }

    return output;
  }
}
