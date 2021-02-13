import { Recipe } from './../../recipes.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recieps-item',
  templateUrl: './recieps-item.component.html',
  styleUrls: ['./recieps-item.component.css']
})
export class ReciepsItemComponent implements OnInit {
  @Input() recipe = Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recipeSelected.emit();
  }
}
