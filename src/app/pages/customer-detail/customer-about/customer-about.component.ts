import {Component, Input, OnInit} from '@angular/core';
import {CommonService} from '../../../services/common.service';
import {ICustomer} from '../../../model/ICustomer';

@Component({
  selector: 'app-customer-about',
  templateUrl: './customer-about.component.html',
  styleUrls: ['./customer-about.component.scss']
})
export class CustomerAboutComponent implements OnInit {
  @Input() activeCustomer: ICustomer;

  constructor(
    private commonService: CommonService
  ) {
  }

  ngOnInit() {
  }

  GetFullName() {
    return this.commonService.GetFullName(this.activeCustomer);
  }

  GetFullAddress() {
    return this.commonService.GetFullAddress(this.activeCustomer);
  }
}
