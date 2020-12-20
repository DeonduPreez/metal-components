import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
             selector: 'metal-number',
             templateUrl: './metal-number.component.html',
             styleUrls: [ './metal-number.component.scss' ],
             providers: [ { provide: NG_VALUE_ACCESSOR, useClass: forwardRef(() => MetalNumberComponent) } ]
           })
export class MetalNumberComponent implements OnInit, ControlValueAccessor
{
  constructor(){ }

  public ngOnInit(): void
  {
  }

  public registerOnChange(fn: any): void
  {
  }

  public registerOnTouched(fn: any): void
  {
  }

  public setDisabledState(isDisabled: boolean): void
  {
  }

  public writeValue(obj: any): void
  {
  }
}
