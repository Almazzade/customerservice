import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ICustomer} from '../../model/ICustomer';
import {CustomerListService} from '../../services/customer-list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  public addCustomerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private CustomerService: CustomerListService,
    private router: Router
  ) {
    this.BuildForm();
  }

  get FORM() {
    return this.addCustomerForm.controls;
  }

  // region BUILD FORM
  BuildForm() {
    this.addCustomerForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.minLength(10), Validators.email]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      country: ['', [Validators.required, Validators.minLength(3)]],
      googlemaplocation: ['', []],
    });
  }

  // endregion

  // region FORM SUBMIT
  CustomerFormSubmit() {
    if (this.addCustomerForm.valid) {
      const customer: ICustomer = {
        firstname: this.addCustomerForm.value.firstname,
        lastname: this.addCustomerForm.value.lastname,
        gender: this.addCustomerForm.value.gender === 'true',
        email: this.addCustomerForm.value.email,
        address: this.addCustomerForm.value.address,
        city: this.addCustomerForm.value.city,
        country: this.addCustomerForm.value.country,
        googlemaplocation: this.addCustomerForm.value.googlemaplocation
      };

      this.CustomerService.customerArray.push(customer);
      this.router.navigateByUrl('/index');
    }
  }

  // endregion
  ngOnInit() {
  }

}
