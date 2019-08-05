import {Injectable} from '@angular/core';
import {ICustomer} from '../model/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // customer: ICustomer;
  constructor() {
  }

  GetFullName(cus: ICustomer) {
    return `${cus.firstname} ${cus.lastname}`;
  }

  GetFullAddress(cus: ICustomer) {
    return `${cus.address} ${cus.city}, ${cus.country}`;
  }
}
