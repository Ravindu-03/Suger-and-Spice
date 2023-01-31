import { Injectable } from '@angular/core';
import { sample_product } from 'src/data';
import { product } from '../shared/models/fproducts';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

getAllfood():product[]{ 
  return sample_product;
}

getFoodById(foodid:string):product
{
  return this.getAllfood().find(product=> product.id == foodid) ?? new product();

} 


}
