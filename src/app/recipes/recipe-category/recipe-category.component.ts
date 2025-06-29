import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-category',
  imports: [FormsModule,CommonModule],
  templateUrl: './recipe-category.component.html',
  styleUrl: './recipe-category.component.css'
})
export class RecipeCategoryComponent implements OnInit{
  dishes:any=[];
  type:string='';
  displayType:string='';
  categoryMap: any = {
    vegies: 'Veg',
    non_vegies: 'Non-Veg',
    korean: 'Korean',
    italian: 'Italian',
    chinese: 'Chinese',
    desserts: 'Desserts',
    indian: 'Indian',
    thai: 'Thai',
    snacks: 'Snacks',
    healthy_bites: 'Healthy Bites',
    breakfast: 'Breakfast',
    wraps_and_rolls: 'Wraps & Rolls',
    beverages: 'Beverages',
    street_food: 'Street Food',
    seasonal_picks: 'Seasonal Picks'
  };

getEmoji(type: string): string {
  switch (type) {
    case 'vegies': return '🌿';
    case 'non_vegies': return '🍗';
    case 'korean': return '🇰🇷';
    case 'italian': return '🍝';
    case 'chinese': return '🥡';
    case 'desserts': return '🍰';
    case 'indian': return '🇮🇳';
    case 'thai': return '🍛';
    case 'snacks': return '🍟';
    case 'healthy_bites': return '🥗';
    case 'breakfast': return '🍳';
    case 'wraps_and_rolls': return '🌯';
    case 'beverages': return '🥤';
    case 'street_food': return '🚚';
    case 'seasonal_picks': return '🍂';
    default: return '🍽️';
  }
}

constructor(
    private router : Router,
    private http:HttpClient,
    private route:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.type=params['type']
      this.displayType = this.categoryMap[this.type];
      this.http.get<any[]>(`http://localhost:3000/${this.type}`).subscribe((data)=>{
      this.dishes = data;
    })
    })

  }
  
goToDish(type:string){
   this.router.navigate(['category',type])
}

}
