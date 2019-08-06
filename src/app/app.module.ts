import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { HeaderComponent } from './common/header/header.component';
import { CustomerListviewComponent } from './pages/customer-list/customer-listview/customer-listview.component';
import { CustomerCardviewComponent } from './pages/customer-list/customer-cardview/customer-cardview.component';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import {SafePipe} from './pipes/safe.pipe';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';
import { CustomerAboutComponent } from './pages/customer-detail/customer-about/customer-about.component';
import { CustomerOrdersComponent } from './pages/customer-detail/customer-orders/customer-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    HeaderComponent,
    CustomerListviewComponent,
    CustomerCardviewComponent,
    CustomerDetailComponent,
    SafePipe,
    AddCustomerComponent,
    CustomerEditComponent,
    CustomerAboutComponent,
    CustomerOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
