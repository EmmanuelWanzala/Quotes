import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 quote:Quote[]=[
{name:'Sea swim',author:'Ben Carson',quote:'If you swim in the sea,be ready for the waves',submitter:'Varshita Donavan'},
{name:'Space',author:'Neil armstrong',quote:'If you want to go to space,you have to be ready for uncomfortable situations',submitter:'Sajad Abdi'},
{name:'Get more',author:'Kahiji Kiuot',quote:'You can only get more if you have less on your side',submitter:'Carl Odinga'}
 ];
}
