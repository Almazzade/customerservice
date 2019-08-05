import {Component, Input, OnInit} from '@angular/core';
import {ICustomer, IOrder} from '../../../model/ICustomer';
import {CustomerListService} from '../../../services/customer-list.service';

@Component({
  selector: 'app-customer-listview',
  templateUrl: './customer-listview.component.html',
  styleUrls: ['./customer-listview.component.scss']
})
export class CustomerListviewComponent implements OnInit {
  customerArr: ICustomer[] = this.customerService.customerArray;

  constructor(
    private customerService: CustomerListService
  ) {
  }

  GetOrderTotal(orders: IOrder[]) {
    let total = 0;

    for (const order of orders) {
      total += order.price;
    }

    return total + '$';
  }

  ngOnInit() {
  }

}
