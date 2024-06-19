import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-rxjsl',
  templateUrl: './rxjsl.component.html',
  styleUrls: ['./rxjsl.component.css']
})
export class RxjslComponent implements OnInit {

  @ViewChild('validate')
  validate!: ElementRef;

  constructor(){

  }

  agents:Observable<string> | undefined;
  
  ngOnInit(): void {
  //  this.agents=new Observable<string>(
  //   (observer)=>{
  //   try{
  //    observer.next("Ram");
  //    setTimeout(()=>{
  //     observer.next("Sita");
  //    } ,3000)
  //    setTimeout(()=>{
  //     observer.next("Laxman")
  //    } ,6000)
    
  //   }
  //   catch(e){
  //     observer.error(e);
  //   }
  //   }
  //  );
  
  //  this.agents.subscribe((data)=>{
  //   console.log(data);
  // })
  }
  
  getEventObservable(){
    const buttonObservable$= fromEvent(this.validate.nativeElement,'click');
    buttonObservable$.subscribe(data=>{
      console.log(data);
    })
  }
  
  }
  
