/* tslint:disable:max-line-length */
import { Injectable } from '@angular/core';
import {ICustomer} from '../model/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerListService {
  customerArray: ICustomer[] = [
    {
      firstname: 'Ted',
      lastname: 'James',
      gender: true,
      email: 'ted@yahoo.com',
      address: '346 Cedar Avenue',
      city: 'Dallas',
      country: 'USA',
      googlemaplocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.179156830813!2d-74.87987948463214!3d39.48786897948394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0d2032cf3d4f9%3A0xfa986c15ea579b30!2s346+Cedar+Ave%2C+Richland%2C+NJ+08350%2C+USA!5e0!3m2!1sen!2s!4v1565091975544!5m2!1sen!2s&output=embed',
      orders: [
        {
          name: 'Nike air max',
          price: 150
        },
        {
          name: 'Nike air max kid',
          price: 70
        }
      ]
    },
    {
      firstname: 'Michelle',
      lastname: 'Avery',
      gender: false,
      email: 'avery@yahoo.com',
      address: '346 Cedar Avenue',
      city: 'Dallas',
      country: 'USA',
      googlemaplocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.179156830813!2d-74.87987948463214!3d39.48786897948394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0d2032cf3d4f9%3A0xfa986c15ea579b30!2s346+Cedar+Ave%2C+Richland%2C+NJ+08350%2C+USA!5e0!3m2!1sen!2s!4v1565091975544!5m2!1sen!2s&output=embed',
      orders: [
        {
          name: 'Outfit',
          price: 50
        },
        {
          name: 'Parfum',
          price: 270
        }
      ]
    },
    {
      firstname: 'Ward',
      lastname: 'Bell',
      gender: true,
      email: 'ward@yahoo.com',
      address: '12 Ocean View St.',
      city: 'Dallas',
      country: 'USA',
      googlemaplocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.829018467473!2d-74.00536938524475!3d40.21286617593788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c226463161a3c7%3A0xf2869ac9cd66936a!2s12+Ocean+Ave%2C+Ocean+Grove%2C+NJ+07756%2C+USA!5e0!3m2!1sen!2s!4v1565092676523!5m2!1sen!2s&output=embed',
      orders: [
        {
          name: 'QCY earbuds',
          price: 30
        },
        {
          name: 'Assasins Creed Origin PS4',
          price: 40
        },
        {
          name: 'PS4 console',
          price: 100
        }
      ]
    },
    {
      firstname: 'Robin',
      lastname: 'Clark',
      address: 'Richmond Circle Apt',
      city: 'Los Angeles',
      country: 'USA',
      email: 'robin@gmail.com',
      gender: false,
      orders: [
        {
          name: 'Apple Macbook Pro 2019',
          price: 3000
        }
      ]
    }
  ];
  constructor() { }
}
