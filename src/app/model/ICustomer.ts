export interface ICustomer {
  firstname: string;
  lastname: string;
  gender: boolean;
  email: string;
  address: string;
  city: string;
  country: string;
  googlemaplocation?: string;
  orders?: IOrder[];
}

export interface IOrder {
  name: string;
  price: number;
}
