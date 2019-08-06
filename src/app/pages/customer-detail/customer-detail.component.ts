import {Component, OnInit} from '@angular/core';
import {CustomerListService} from '../../services/customer-list.service';
import {ActivatedRoute} from '@angular/router';
import {ICustomer} from '../../model/ICustomer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customerId = this.AR.snapshot.params.id;
  customerTab = 'about';
  activeCustomer: ICustomer = this.CustomerService.customerArray[this.customerId];

  constructor(
    private CustomerService: CustomerListService,
    private AR: ActivatedRoute,
  ) {
  }

  ChangeCustomerDetailTab(str: string) {
    this.customerTab = str;
  }

  ngOnInit() {
  }

}
