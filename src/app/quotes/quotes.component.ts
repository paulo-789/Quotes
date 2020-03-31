import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[]=[
    new Quotes(1,'Paul','author-Why The Lucky Stiff','"when you dont create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create."'),
    new Quotes(2,'Rael','author__ Harold Abelson, Structure and Interpretation of Computer Programs','"Programs must be written for people to read, and only incidentally for machines to execute"'),
    new Quotes(3,'Jane','author___Rick Cook, The Wizardry Compiled','"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning."'),
    new Quotes(4,'Kennedy','author___ Martin Fowler','“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”')
  ];
  completequotes(isComplete,index){
    if(isComplete){
      this.quotes.splice(index,1);
    }
  }
  toggleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit(){
  }

}
