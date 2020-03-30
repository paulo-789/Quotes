import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[]=[
    new Quotes(1,'"when you dont create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create."','author-Why The Lucky Stiff'},
    new Quotes(2,'"Programs must be written for people to read, and only incidentally for machines to execute"','author__ Harold Abelson, Structure and Interpretation of Computer Programs'},
    new Quotes(3,'"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning."','author___Rick Cook, The Wizardry Compiled'},
    new Quotes(4,'“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”','author___ Martin Fowler'}
  ];
  toggleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit(){
  }

}
