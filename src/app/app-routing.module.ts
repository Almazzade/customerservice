import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './pages/customer-list/customer-list.component';
import {CustomerDetailComponent} from './pages/customer-detail/customer-detail.component';
import {AddCustomerComponent} from './pages/add-customer/add-customer.component';
import {CustomerEditComponent} from './pages/customer-edit/customer-edit.component';

const routes: Routes = [
  { path: 'index', component: CustomerListComponent },
  { path: 'home', redirectTo: 'index', pathMatch: 'full' },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {path: 'customer/:id', component: CustomerDetailComponent},
  {path: 'edit-customer/:id', component: CustomerEditComponent},
  {path: 'add-customer', component: AddCustomerComponent},
  { path: '**', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
