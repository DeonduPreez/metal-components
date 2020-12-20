import { TestBed } from '@angular/core/testing';

import { StringService } from './string.service';


describe('StringService', () =>
{
  let service: StringService;

  beforeEach(() =>
             {
               TestBed.configureTestingModule({});
               service = TestBed.inject(StringService);
             });

  /*#region String Validation*/

  /*#region IsNullOrWhiteSpace*/

  it('IsNullOrWhiteSpace should return true if a value is null or empty space', () =>
  {
    const input1 = '';
    const result1 = service.IsNullOrWhiteSpace(input1);

    expect(result1).toEqual(true);

    const input2 = null;
    // @ts-ignore // Ignoring error because of null and string not being the same type
    const result2 = service.IsNullOrWhiteSpace(input2);

    expect(result2).toEqual(true);
  });

  it('IsNullOrWhiteSpace should return false if a value is not null or empty space', () =>
  {
    const input1 = 'this is not an empty string';
    const result1 = service.IsNullOrWhiteSpace(input1);

    expect(result1).toEqual(false);

    const input2 = 'null';
    const result2 = service.IsNullOrWhiteSpace(input2);

    expect(result2).toEqual(false);
  });

  it('IsNullOrWhiteSpace should not throw an error when the wrong type is sent through', () =>
  {
    const input = 5;

    // @ts-ignore // Ignoring incorrect type
    expect(() => service.IsNullOrWhiteSpace(input)).not.toThrowError();

    // @ts-ignore // Ignoring incorrect type
    const result = service.IsNullOrWhiteSpace(input);

    expect(result).toEqual(false);
  });

  /*#endregion IsNullOrWhiteSpace*/

  /*#endregion String Validation*/

  /*#region String Manipulation*/

  /*#region CamelCaseToSentence*/

  it('CamelCaseToSentence should convert a string with no spaces to a sentence with Title Case if titleCase is true', () =>
  {
    const inputsAndOutputs: { [input: string]: string } = {
      __ToGetYourGEDInTimeASongAboutThe26ABCsIsOfTheEssenceButAPersonalIDCardForUser_456InRoom26AContainingABC26TimesIsNotAsEasyAs123ForC3POOrR2D2Or2R2D: 'To Get Your GED In Time A Song About The 26 ABCs Is Of The Essence But A Personal ID Card For User 456 In Room 26A Containing ABC 26 Times Is Not As Easy As 123 For C3PO Or R2D2 Or 2R2D',
      helloThere: 'Hello There',
      HelloThere: 'Hello There',
      ILoveTheUSA: 'I Love The USA',
      iLoveTheUSA: 'I Love The USA',
      DBHostCountry: 'DB Host Country',
      SetSlot123ToInput456: 'Set Slot 123 To Input 456',
      ILoveTheUSANetworkInTheUSA: 'I Love The USA Network In The USA',
      Limit_IOC_Duration: 'Limit IOC Duration',
      This_is_a_Test_of_Network123_in_12_days: 'This Is A Test Of Network 123 In 12 Days',
      ASongAboutTheABCsIsFunToSing: 'A Song About The ABCs Is Fun To Sing',
      CFDs: 'CFDs',
      DBSettings: 'DB Settings',
      IWouldLove1Apple: 'I Would Love 1 Apple',
      Employee22IsCool: 'Employee 22 Is Cool',
      SubIDIn: 'Sub ID In',
      ConfigureCFDsImmediately: 'Configure CFDs Immediately',
      UseTakerLoginForOnBehalfOfSubIDInOrders: 'Use Taker Login For On Behalf Of Sub ID In Orders',
      thisIsSomeSimpleTestInput: 'This Is Some Simple Test Input'
    };

    for (const key in inputsAndOutputs)
    {
      const input = key;
      const expectedResult = inputsAndOutputs[key];
      const result = service.CamelCaseToSentence(input, true);
      expect(result).toEqual(expectedResult);
    }
  });

  it('CamelCaseToSentence should convert a string with no spaces to a sentence without Title Case if titleCase is false', () =>
  {
    const inputsAndOutputs: { [input: string]: string } = {
      __ToGetYourGEDInTimeASongAboutThe26ABCsIsOfTheEssenceButAPersonalIDCardForUser_456InRoom26AContainingABC26TimesIsNotAsEasyAs123ForC3POOrR2D2Or2R2D: 'To get your GED in time a song about the 26 ABCs is of the essence but a personal ID card for user 456 in room 26A containing ABC 26 times is not as easy as 123 for C3PO or R2D2 or 2R2D',
      helloThere: 'Hello there',
      HelloThere: 'Hello there',
      ILoveTheUSA: 'I love the USA',
      iLoveTheUSA: 'I love the USA',
      DBHostCountry: 'DB host country',
      SetSlot123ToInput456: 'Set slot 123 to input 456',
      ILoveTheUSANetworkInTheUSA: 'I love the USA network in the USA',
      Limit_IOC_Duration: 'Limit IOC duration',
      This_is_a_Test_of_Network123_in_12_days: 'This is a test of network 123 in 12 days',
      ASongAboutTheABCsIsFunToSing: 'A song about the ABCs is fun to sing',
      CFDs: 'CFDs',
      DBSettings: 'DB settings',
      IWouldLove1Apple: 'I would love 1 apple',
      Employee22IsCool: 'Employee 22 is cool',
      SubIDIn: 'Sub ID in',
      ConfigureCFDsImmediately: 'Configure CFDs immediately',
      UseTakerLoginForOnBehalfOfSubIDInOrders: 'Use taker login for on behalf of sub ID in orders',
      thisIsSomeSimpleTestInput: 'This is some simple test input'
    };

    for (const key in inputsAndOutputs)
    {
      const input = key;
      const expectedResult = inputsAndOutputs[key];
      const result = service.CamelCaseToSentence(input, false);
      expect(result).toEqual(expectedResult);
    }
  });

  /*#endregion CamelCaseToSentence*/

  /*#endregion String Manipulation*/

  /*#region Counting Functions*/

  /*#region CountCapitals*/

  it('CountCapitals should Count the amount of capital letters in a string', () =>
  {
    const inputsAndCounts: { [input: string]: number } = {
      ThisIsTest1: 3,
      ThisIsAnotherTestToSeeHowManyCapitalsThereAre: 11,
      THISISTHEGREATESTTesTOftHeMAll: 23
    };

    for (const key in inputsAndCounts)
    {
      const input = key;
      const expectedResult = inputsAndCounts[key];
      const result = service.CountCapitals(input);
      expect(result).toEqual(expectedResult);
    }
  });

  /*#endregion CountCapitals*/

  /*#region CountLowerCase*/

  it('CountLowerCase should Count the amount of lower case letters in a string', () =>
  {
    const inputsAndCounts: { [input: string]: number } = {
      ThisIsTest1: 7,
      ThisIsAnotherTestToSeeHowManyCapitalsThereAre: 34,
      THISISTHEGREATESTTesTOftHeMAll: 7
    };

    for (const key in inputsAndCounts)
    {
      const input = key;
      const expectedResult = inputsAndCounts[key];
      const result = service.CountLowerCase(input);
      expect(result).toEqual(expectedResult);
    }
  });

  /*#endregion CountLowerCase*/

  /*#region CountNumbers*/

  it('CountNumbers should Count the amount of numbers in a string', () =>
  {
    const inputsAndCounts: { [input: string]: number } = {
      ThisIsTest1: 1,
      T1hisIsAnother4Test3ToSeeHowManyCapitalsThereAre9: 4,
      T6H6ISISTH4EGREATESTTes5TO0ftHeMA1ll: 6
    };

    for (const key in inputsAndCounts)
    {
      const input = key;
      const expectedResult = inputsAndCounts[key];
      const result = service.CountNumbers(input);
      expect(result).toEqual(expectedResult);
    }
  });

  /*#endregion CountNumbers*/

  /*#endregion Counting Functions*/
});
