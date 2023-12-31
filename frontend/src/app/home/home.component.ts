import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { FoodService } from 'src/app/service/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 foods:Food[] = [];

 constructor(private foodService:FoodService, activatedRoute:ActivatedRoute){
   activatedRoute.params.subscribe((params)=>{
    if(params.searchTerm)
    this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
    else 
     this.foods = foodService.getAll();
   })
  
 };

  ngOnInit(): void {

  };

};
