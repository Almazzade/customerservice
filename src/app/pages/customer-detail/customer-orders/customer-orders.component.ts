import {Component, Input, OnInit} from '@angular/core';
import {ICustomer, IOrder} from '../../../model/ICustomer';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent implements OnInit {
  @Input() activeCustomer: ICustomer;
  orders: IOrder[];
  constructor() { }

  ngOnInit() {
    this.orders = this.activeCustomer.orders;
  }

}
