import { Injectable } from '@angular/core';
import { Products } from './data.products';

@Injectable()
export class DataService {

  constructor() {}

    getProducts() {
        return Promise.resolve(Products);
    }

}
