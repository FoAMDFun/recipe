import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 2),
    new Ingredient('Fish', 4),
  ];

  constructor() {}

  ngOnInit(): void {}
}
