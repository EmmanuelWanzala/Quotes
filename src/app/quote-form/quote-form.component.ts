import { Component, OnInit,Output,EventEmitter } from '@angular/core';
 import { Quote } from '../quote';
// import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote("","","","",new Date());

  @Output() addQuote = new EventEmitter<Quote>();

 submitGoal(){
   this.addQuote.emit(this.newQuote);
 }


  constructor() { }

  ngOnInit() {
  }

}
