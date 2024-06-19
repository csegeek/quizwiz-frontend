import { Component,OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent {
categories=[
  {
    id:23,
    title:"Abcd",
    description:"This is a category of that ...."
  },
  {
    id:23,
    title:"Abcd",
    description:"This is a category of that ...."
  },
  {
    id:23,
    title:"Abcd",
    description:"This is a category of that ...."
  }
];
constructor(private categoryService:CategoryService){}

 ngOnInit():void{
  this.categoryService.getAllCategories().subscribe(
    (data:any)=>{
      this.categories=data;
      console.log(this.categories);
    },
    (error)=>{
      console.log("Error in loading data");
    }
  )
 }

}
