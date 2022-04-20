import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";
import {CartModule} from "../cart/cart.module";

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cart = this.shoppingCartService.cart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
