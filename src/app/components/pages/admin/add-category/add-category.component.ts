import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import SweatAlert from 'sweetalert2';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  constructor(private categoryService: CategoryService, private snackBar: MatSnackBar) { }
  category = {
    title: "",
    description: ""
  };

  public submitForm() {
    console.log("button clicked")
    if (this.category.title == null || this.category.title.trim() == '') {
      this.snackBar.open(
        "Title Required !!", '', { duration: 3000 }
      )
      return;
      }
      this.categoryService.addCategory(this.category).subscribe(
        (data) => {
          SweatAlert.fire("Category added!", "You Have added category Sucessfully", "success");
          this.category.title = "";
          this.category.description = "";
        },
        (error) => {
          console.log(error);
          SweatAlert.fire("Error!!", "Server Error", "error");
        }
      )
      
  }

}
