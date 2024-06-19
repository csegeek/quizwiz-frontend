import { Component,OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent {
  constructor(private quizService:QuizService){}
 quizzes=[
  {
    id:"23",
    title:"Java Quizzes",
    noOfQuestions:15,
    maxMarks:20,
    description:"Abra Ka Dabra Anjali Ka Ghaghra lodu Lalit chura le gya",
    category:{
      title:"Programming"
    }
  },
  {
    id:"23",
    title:"Java Quizzes",
    noOfQuestions:15,
    maxMarks:20,
    description:"Abra Ka Dabra Anjali Ka Ghaghra lodu Lalit chura le gya",
    category:{
      title:"Programming"
    }

  }
 ]

 ngOnInit():void{
  this.quizService.getAllquizzes().subscribe(
    (data:any)=>{
      this.quizzes=data;
      console.log(this.quizzes);
    },
    (error)=>{
      console.log("Error in loading data");
    }
  )
 }
  
}
