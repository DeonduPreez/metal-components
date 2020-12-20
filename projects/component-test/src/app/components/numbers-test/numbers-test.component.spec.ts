import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersTestComponent } from './numbers-test.component';


describe('NumbersTestComponent', () =>
{
  let component: NumbersTestComponent;
  let fixture: ComponentFixture<NumbersTestComponent>;

  beforeEach(async () =>
             {
               await TestBed.configureTestingModule({
                                                      declarations: [ NumbersTestComponent ]
                                                    })
                            .compileComponents();
             });

  beforeEach(() =>
             {
               fixture = TestBed.createComponent(NumbersTestComponent);
               component = fixture.componentInstance;
               fixture.detectChanges();
             });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
