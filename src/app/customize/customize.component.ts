import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';
import { product } from '../shared/models/fproducts';

import { cart } from '../shared/models/Cart';
import{cartitem} from '../shared/models/CartItem';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent {

foodproduct! : product;
Cart! : cart;
constructor(activatedRoute:ActivatedRoute, foodservice:FoodService, private router:Router,private cartService:CartService, private cartservice:CartService){
activatedRoute.params.subscribe((params)=>
{
  if(params.id)
  this.foodproduct = foodservice.getFoodById(params.id);
})
{
  this.cartService.getCartObservable().subscribe((Cart) => {
    this.Cart = Cart;
  })
  }
}



addToCart(){
  this.cartService.addToCart(this.foodproduct);
  
}

removeFromCart(cartitem:cartitem)
  {
    this.cartService.removeFromCart(cartitem.Product.id);
  }

changeQuantity(cartitem:cartitem,quantityInString:string)
{
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartitem.Product.id, quantity);
}



}
