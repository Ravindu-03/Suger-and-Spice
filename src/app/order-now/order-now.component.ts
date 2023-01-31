import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FoodService } from '../services/food.service';
import { product } from '../shared/models/fproducts';

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css']
})
export class OrderNowComponent {

  product:product[]=[];


constructor( private foodservice:FoodService , activatedRoute:ActivatedRoute )
{


  this.product = foodservice.getAllfood();



}
}