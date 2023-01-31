import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { cart } from '../shared/models/Cart';
import { cartitem } from '../shared/models/CartItem';
import { product } from '../shared/models/fproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private Cart : cart= this.getCartFromStorage();
  private cartSubject : BehaviorSubject<cart> = new BehaviorSubject(this.Cart);
  
    constructor() { }
  
  addToCart(product:product):void{
  
    let CartItem = this.Cart.items.find(item => item.Product.id === product.id);
  
  if(CartItem)
  return;
  
  this.Cart.items.push(new cartitem(product));
  this.setCartToLocalStorage();
  
  }
  
  removeFromCart(productid: string):void{
    this.Cart.items = this.Cart.items.filter(item => item.Product.id != productid);
    this.setCartToLocalStorage();
  }
  
  changeQuantity(productid: string, quantity:number) {
  
    let CartItem = this.Cart.items.find(item => item.Product.id === productid);
  
  if(!CartItem) return;
  
  CartItem.quantity = quantity;
  CartItem.price = quantity * CartItem.Product.price;
  this.setCartToLocalStorage();
  }
  
  ClearCart(){
  this.Cart = new cart();
  this.setCartToLocalStorage();
  
  }
  
  getCartObservable():Observable<cart>{
   return this.cartSubject.asObservable();
    
  
  }
  
  
  private setCartToLocalStorage():void{
   
  this.Cart.totalPrice = this.Cart.items.reduce((prevSum , currentItem) => prevSum + currentItem.price,0 );
  this.Cart.totalCount = this.Cart.items.reduce((prevSum , currentitem) => prevSum + currentitem.quantity,0);
  const cartJson = JSON.stringify(this.Cart);
  localStorage.setItem('cart', cartJson);
  
  this.cartSubject.next(this.Cart);
  }
  
  
  private getCartFromStorage():cart{
  
    const cartJson = localStorage.getItem('cart');
    return cartJson? JSON.parse(cartJson): new cart();
  }

}
