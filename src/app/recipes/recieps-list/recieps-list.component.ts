import { Recipe } from './../recipes.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recieps-list',
  templateUrl: './recieps-list.component.html',
  styleUrls: ['./recieps-list.component.css'],
})
export class ReciepsListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Margreeta Pizza',
      'This is Simple Test Recipe 1',
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_HCA20_376_E07_09_2b-2.jpg'
    ),
    new Recipe(
      'Onion Pizza',
      'This is Simple Test Recipe 2',
      'https://www.jubilantfoodworks.com/images/brand_pic3.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
