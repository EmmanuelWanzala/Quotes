import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  quote:Quote[]=[
    new Quote('Sea Swim','Ben Carson','If you swim in the sea,be ready for the waves','Varshita Donavan',new Date (2002,7,20)),
    new Quote('Space','Neil Armstrong','If you want to go to space,you have to be ready for uncomfortable situations','Sajad Abdi',new Date (1990,8,8)),
    new Quote('Get more','Kahiji Kiuot','You can only get more if you have less on your side','Carl Odinga',new Date (2006,9,11)),
    new Quote('Love yourself','Rihanna','The minute you learn to love yourself you wont want to be anyone else','Kariuki Onyango',new Date(2016,2,8)),
     ];

     toggleDetails(index){
       this.quote[index].showDescription=!this.quote[index].showDescription;
     }


     addNewQuote(qt){
         let qtLength=this.quote.length;
         qt.id= qtLength+1;
         qt.completeDate=new Date(qt.completeDate)
          this.quote.push(qt)

     }



     deleteQuote(isComplete,index){
       if(isComplete){
         let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

         if (toDelete){
           this.quote.splice(index,1)
         }
       }
     }


  constructor() { }

  ngOnInit(): void {
  }

}
