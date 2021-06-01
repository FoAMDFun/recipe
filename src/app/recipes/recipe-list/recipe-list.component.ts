import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Teszt recept',
      'Ez egyszerűen egy teszt!',
      'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2019/07/chicken-pitta-recipe.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2019/07/chicken-pitta-recipe.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
