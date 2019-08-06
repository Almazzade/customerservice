import {Component, Input, OnInit} from '@angular/core';
import {ICustomer, IOrder} from '../../../model/ICustomer';

@Component({
  selector: 'app-customer-listview',
  templateUrl: './customer-listview.component.html',
  styleUrls: ['./customer-listview.component.scss']
})
export class CustomerListviewComponent implements OnInit {
  @Input() CustomerArrayFromParent: ICustomer[];

  constructor() {
  }

  GetOrderTotal(orders: IOrder[]) {
    if (orders) {
      let total = 0;

      for (const order of orders) {
        total += order.price;
      }

      return total + '$';
    } else {
      return '0$';
    }

  }

  ngOnInit() {
  }

}
