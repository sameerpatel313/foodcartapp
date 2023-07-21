import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 foods:Food[] = [];

 constructor(private foodService:FoodService){
  this.foods = foodService.getAll();
  
 };

  ngOnInit(): void {

  };

};
