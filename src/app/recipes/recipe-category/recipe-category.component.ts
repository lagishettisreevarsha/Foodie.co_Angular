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
constructor(private router : Router,private http:HttpClient,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.type=params['type']
      const url=`http://localhost:3000/${this.type}`;


       this.http.get<any[]>(url).subscribe((data)=>{
      this.dishes = data;
    })
    })

  }



goToDish(type:string){
   this.router.navigate(['this.type',type])
}

}
