import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

import { TestComponent } from './test.component';


describe('TestComponent', () =>
{
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() =>
                          {
                            TestBed.configureTestingModule({
                                                             declarations: [ TestComponent ],
                                                             imports: [
                                                               MatButtonModule,
                                                               MatIconModule,
                                                               MatTreeModule
                                                             ]
                                                           }).compileComponents();
                          }));

  beforeEach(() =>
             {
               fixture = TestBed.createComponent(TestComponent);
               component = fixture.componentInstance;
               fixture.detectChanges();
             });

  it('should compile', () =>
  {
    expect(component).toBeTruthy();
  });
});
