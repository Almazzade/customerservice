import {Component, OnInit} from '@angular/core';
import {CustomerListService} from '../../services/customer-list.service';
import {ICustomer} from '../../model/ICustomer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  viewType = 'cardview';

  constructor(
  ) {
  }

  changeCustomerView(type: string) {
    this.viewType = type;
  }

  ngOnInit() {
  }

}
