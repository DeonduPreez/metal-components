import { TestBed } from '@angular/core/testing';

import { RegexService } from './regex.service';


xdescribe('RegexService', () =>
{
  let service: RegexService;

  beforeEach(() =>
             {
               TestBed.configureTestingModule({});
               service = TestBed.inject(RegexService);
             });

  it('should be created', () =>
  {
    expect(service).toBeTruthy();
  });
});
