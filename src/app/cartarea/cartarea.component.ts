import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { cart } from '../shared/models/Cart';
import{cartitem} from '../shared/models/CartItem';

@Component({
  selector: 'app-cartarea',
  templateUrl: './cartarea.component.html',
  styleUrls: ['./cartarea.component.css']
})
export class CartareaComponent {
  Cart! : cart;
  constructor(private cartService: CartService){
this.cartService.getCartObservable().subscribe((Cart) => {
  this.Cart = Cart;
})
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
