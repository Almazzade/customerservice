import {Component, OnInit} from '@angular/core';
import {CustomerListService} from '../../../services/customer-list.service';
import {ICustomer} from '../../../model/ICustomer';

@Component({
  selector: 'app-customer-cardview',
  templateUrl: './customer-cardview.component.html',
  styleUrls: ['./customer-cardview.component.scss']
})
export class CustomerCardviewComponent implements OnInit {
  customerArr: ICustomer[] = this.customerService.customerArray;

  constructor(
    private customerService: CustomerListService
  ) {
  }

  ngOnInit() {
  }

}
