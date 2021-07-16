import { Injectable } from '@nestjs/common';

@Injectable()
export class LearnService {
  getProducts(): { name: string; price: number }[] {
    return [
      { name: 'e63', price: 200 },
      { name: 'lumia', price: 800 },
    ];
  }

  postProduct(product: {
    name: string;
    price: number;
  }): { name: string; price: number } {
    return product;
  }
}
