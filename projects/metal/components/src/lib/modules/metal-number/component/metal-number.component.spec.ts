import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalNumberComponent } from './metal-number.component';


xdescribe('MetalNumberComponent', () =>
{
  let component: MetalNumberComponent;
  let fixture: ComponentFixture<MetalNumberComponent>;

  beforeEach(async () =>
             {
               await TestBed.configureTestingModule({
                                                      declarations: [ MetalNumberComponent ]
                                                    })
                            .compileComponents();
             });

  beforeEach(() =>
             {
               fixture = TestBed.createComponent(MetalNumberComponent);
               component = fixture.componentInstance;
               fixture.detectChanges();
             });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
