import {Component, OnInit} from '@angular/core';
import {CustomerListService} from '../../services/customer-list.service';
import {ICustomer} from '../../model/ICustomer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  viewType = 'listview';
  customerARRAY: ICustomer[] = this.customerService.customerArray;
  fromService: ICustomer[] = this.customerService.customerArray;

  constructor(
    private customerService: CustomerListService
  ) {
  }

  changeCustomerView(type: string) {
    this.viewType = type;
  }

  ChangeFilterInput(str: string) {
    // tslint:disable-next-line:max-line-length
    this.customerARRAY = this.fromService.filter(st => st.firstname.toLowerCase().includes(str.toLowerCase()) || st.lastname.toLowerCase().includes(str.toLowerCase()));
  }

  ngOnInit() {
  }

}
