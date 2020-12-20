import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetalNumberModule } from '../../../metal/components/src/lib/modules/metal-number/metal-number.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TestComponent } from './test/test.component';
import { MatTreeModule } from '@angular/material/tree';
import { NumbersTestComponent } from './components/numbers-test/numbers-test.component';
import { HomeComponent } from './components/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MetalComponentsModule } from '../../../metal/components/src/lib/metal-components.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
            declarations: [
              AppComponent,
              NavComponent,
              TestComponent,
              NumbersTestComponent,
              HomeComponent
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              BrowserAnimationsModule,
              HttpClientModule,
              MetalComponentsModule.forRootWithConfig(),
              MetalNumberModule,
              MatSlideToggleModule,
              FormsModule,
              LayoutModule,
              MatToolbarModule,
              MatButtonModule,
              MatSidenavModule,
              MatIconModule,
              MatListModule,
              MatTreeModule,
              MatGridListModule,
              MatCardModule,
              MatMenuModule
            ],
            providers: [],
            bootstrap: [ AppComponent ]
          })
export class AppModule{}
