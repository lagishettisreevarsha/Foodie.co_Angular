import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
  standalone:true
})
export class RecipeListComponent implements OnInit{
  categories: any=[];
  apiUrl='http://localhost:3000/categories'
  
constructor(private router : Router,private http:HttpClient){}

  ngOnInit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((data)=>{
      this.categories = data;
    })
  }

goToCategory(type:string){
   this.router.navigate(['category',type])
}
isClicked=false
profileClicked(){
  this.isClicked=!this.isClicked
}
openFavourites(){

}
openNotifications(){
  
}
}
