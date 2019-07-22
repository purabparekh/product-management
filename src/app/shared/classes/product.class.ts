export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  currency: string;
  categories: number;
}

/**
 * Class to hold the details of each product
 */
export class Product {
  id: number;
  name: string;
  image: string;
  price: number;
  currency: string;
  categories: number;

  constructor(product: IProduct) {
    this.id = product.id;
    this.name = product.name;
    this.image = product.image;
    this.price = product.price;
    this.currency = product.currency;
    this.categories = product.categories;
  }
}
