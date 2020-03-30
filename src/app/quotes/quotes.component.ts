import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[]=[
    {id:1,name:'"when you dont create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create."'},
    {id:2,name:'"Programs must be written for people to read, and only incidentally for machines to execute"'},
    {id:3,name:'"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning."'},
    {id:4,name:'“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”'}
  ]

  constructor() { }

  ngOnInit(){
  }

}
