import { Component } from '@angular/core';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {
 quiz={
  title:"",
  description:"",
  maxMarks:"",
  numberOfQuestions:""
 }

 submitForm(){

 }
 
}
