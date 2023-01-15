import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { additionActionCards } from '../../store/action/cards.action';
import { additionActionParagrph } from '../../store/action/paragraphs.action';
import { paragraphSelector } from '../../store/selector';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit{
  constructor(private store:Store, private router: Router,private routeParams:ActivatedRoute){}
  $paragraph=this.store.select(paragraphSelector)
  ngOnInit(): void {
    this.initalization()
  }
  initalization(){
    this.store.dispatch(additionActionParagrph())
  }
  getCardsParagraph(paragraph:string){
    this.store.dispatch(additionActionCards({request:paragraph}))
  }
}
