/* tslint:disable:no-string-literal */
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ICustomer} from '../../model/ICustomer';
import {CustomerListService} from '../../services/customer-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  public editCustomerForm: FormGroup;
  customerId = this.AR.snapshot.params.id;
  activeCustomer: ICustomer = this.CustomerService.customerArray[this.customerId];

  constructor(
    private formBuilder: FormBuilder,
    private CustomerService: CustomerListService,
    private router: Router,
    private AR: ActivatedRoute,
    private commonService: CommonService
  ) {
    this.BuildForm();
    this.SetInputs(this.activeCustomer);
  }

  get FORM() {
    return this.editCustomerForm.controls;
  }

  // region BUILD FORM
  BuildForm() {
    this.editCustomerForm = this.formBuilder.group({
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
    if (this.editCustomerForm.valid) {
      const customer: ICustomer = {
        firstname: this.editCustomerForm.value.firstname,
        lastname: this.editCustomerForm.value.lastname,
        gender: this.editCustomerForm.value.gender === 'true',
        email: this.editCustomerForm.value.email,
        address: this.editCustomerForm.value.address,
        city: this.editCustomerForm.value.city,
        country: this.editCustomerForm.value.country,
        googlemaplocation: this.editCustomerForm.value.googlemaplocation
      };

      this.UpdateActiveCustomer(customer);
      this.router.navigateByUrl('/index');
    }
  }

  // endregion

  // region UPDATE ACTIVE CUSTOMER;
  UpdateActiveCustomer(cus: ICustomer) {
    this.activeCustomer.firstname = cus.firstname;
    this.activeCustomer.lastname = cus.lastname;
    this.activeCustomer.gender = cus.gender;
    this.activeCustomer.email = cus.email;
    this.activeCustomer.address = cus.address;
    this.activeCustomer.city = cus.city;
    this.activeCustomer.country = cus.country;
    this.activeCustomer.googlemaplocation = cus.googlemaplocation;
  }

  // endregion

  // region DELETE CUSTOMER
  DeleteCustomer(index: number) {
    this.CustomerService.customerArray.splice(index, 1);
    this.router.navigateByUrl('/index');
  }
  // endregion
  // region SET INPUTS
  SetInputs(cust: ICustomer) {
    this.editCustomerForm.controls['firstname'].setValue(cust.firstname);
    this.editCustomerForm.controls['lastname'].setValue(cust.lastname);
    this.editCustomerForm.controls['gender'].setValue(cust.gender);
    this.editCustomerForm.controls['email'].setValue(cust.email);
    this.editCustomerForm.controls['address'].setValue(cust.address);
    this.editCustomerForm.controls['city'].setValue(cust.city);
    this.editCustomerForm.controls['country'].setValue(cust.country);
    this.editCustomerForm.controls['googlemaplocation'].setValue(cust.googlemaplocation);
  }

  // endregion
  ngOnInit() {
  }

}
