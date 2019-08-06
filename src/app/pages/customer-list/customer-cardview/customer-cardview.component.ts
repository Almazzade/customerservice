import {Component, Input, OnInit} from '@angular/core';
import {ICustomer} from '../../../model/ICustomer';

@Component({
  selector: 'app-customer-cardview',
  templateUrl: './customer-cardview.component.html',
  styleUrls: ['./customer-cardview.component.scss']
})
export class CustomerCardviewComponent implements OnInit {
  @Input() CustomerArrayFromParent: ICustomer[];

  constructor(
  ) {
  }

  ngOnInit() {
  }

}
