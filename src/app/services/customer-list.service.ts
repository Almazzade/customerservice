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
      googlemaplocation: 'https://goo.gl/maps/TSGDnzttvjNHcq3Y6',
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
      googlemaplocation: 'https://goo.gl/maps/TSGDnzttvjNHcq3Y6',
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
      googlemaplocation: 'https://goo.gl/maps/5CVN9jBfXsLkbhRGA',
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
    }
  ];
  constructor() { }
}
