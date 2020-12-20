import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumbersTestComponent } from './components/numbers-test/numbers-test.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'NumberTest', component: NumbersTestComponent },
  { path: 'Test', component: TestComponent },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' }
];


@NgModule({
            imports: [ RouterModule.forRoot(routes) ],
            exports: [ RouterModule ]
          })
export class AppRoutingModule{}
