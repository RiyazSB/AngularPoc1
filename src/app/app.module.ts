import { UpperCasePipe } from './uppercase.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, ROUTES } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { MyDashOrdersComponent } from './my-dash-orders/my-dash-orders.component';
import { HighlightDirective } from './highlight.directive';

const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'dashboard',
    component: MyDashOrdersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    MyDashOrdersComponent,
    HighlightDirective,
    UpperCasePipe
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
