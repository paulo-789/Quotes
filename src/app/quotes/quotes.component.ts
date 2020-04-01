import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[]=[
    new Quotes(1,'Paul','Lucky Stiff','"when you dont create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create."',new Date(2020,1,1),0,0),
    new Quotes(2,'Rael',' Harold Abelson','"Programs must be written for people to read, and only incidentally for machines to execute"',new Date(2020,3,1),0,0),
    new Quotes(3,'Jane','Rick Cook,','"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning."',new Date(2020,3,1),0,0),
    new Quotes(4,'Kennedy','Martin Fowler','“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”',new Date(2020,2,1),0,0)
  ];
  deletequotes(isComplete,index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  toggleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuotes(quotes){
    let quotesLength = this.quotes.length;
    quotes.id=quotesLength+1;
    quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
  }
  addVote(index){
    this.quotes[index].upvote ++;
  }
  minusVote(index){
    this.quotes[index].downvote ++;
  }
  constructor() { }

  ngOnInit(){
  }

}
