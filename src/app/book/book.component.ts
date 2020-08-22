import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  quote:Quote[]=[
    // {name:'Sea swim',author:'Ben Carson',quote:'If you swim in the sea,be ready for the waves',submitter:'Varshita Donavan'},
    // {name:'Space',author:'Neil armstrong',quote:'If you want to go to space,you have to be ready for uncomfortable situations',submitter:'Sajad Abdi'},
    // {name:'Get more',author:'Kahiji Kiuot',quote:'You can only get more if you have less on your side',submitter:'Carl Odinga'}
    new Quote('Sea Swim','Ben Carson','If you swim in the sea,be ready for the waves','Varshita Donavan',new Date (2002,7,20)),
    new Quote('Space','Neil Armstrong','If you want to go to space,you have to be ready for uncomfortable situations','Sajad Abdi',new Date (1990,8,8)),
    new Quote('Get more','Kahiji Kiuot','You can only get more if you have less on your side','Carl Odinga',new Date (20069,11)),
     ];

     toggleDetails(index){
       this.quote[index].showDescription=!this.quote[index].showDescription;
     }

     deleteQuote(isComplete,index){
       if(isComplete){
         let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].quotation}?`)

         if (toDelete){
           this.quote.splice(index,1)
         }
       }
     }


  constructor() { }

  ngOnInit(): void {
  }

}
