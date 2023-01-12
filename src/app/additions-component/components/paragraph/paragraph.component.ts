import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import {  } from 'express';
import { map, Observable } from 'rxjs';
import { additionActionParagrph } from '../../store/action/paragraphs.action';
import { paragraphSelector } from '../../store/selector';
import { Iparagraph } from '../../types/paragraph.type';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit{
  constructor(private store:Store, private router: Router, private routeParams:ActivatedRoute){}
  $paragraph:Observable<Iparagraph>=this.store.select(paragraphSelector)
  ngOnInit(): void {
    this.initalization()
    this.checkLink()
  }
  initalization(){
    this.store.dispatch(additionActionParagrph())
  }
  checkLink(){
    this.$paragraph.subscribe(pagraph=>{
      pagraph.map((elem)=>{
        this.while(elem)
      })
    })
  }
  while(ebj:string){
    let activeLink=this.routeParams.snapshot.firstChild?.params  
     for (const key in activeLink) {
      let link:string=activeLink[key]
      if(link==ebj){
        this.router.navigate([''])
      }
    }
  }
}
