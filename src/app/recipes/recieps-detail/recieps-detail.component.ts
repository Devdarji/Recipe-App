import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recieps-detail',
  templateUrl: './recieps-detail.component.html',
  styleUrls: ['./recieps-detail.component.css']
})
export class ReciepsDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
