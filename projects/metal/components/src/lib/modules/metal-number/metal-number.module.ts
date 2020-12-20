import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetalNumberComponent } from './component/metal-number.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
            declarations: [ MetalNumberComponent ],
            imports: [
              CommonModule,
              MatFormFieldModule,
              MatInputModule
            ],
            exports: [ MetalNumberComponent ]
          })
export class MetalNumberModule{}
