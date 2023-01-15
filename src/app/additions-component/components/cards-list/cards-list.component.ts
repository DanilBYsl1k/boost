import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { additionActionCards } from '../../store/action/cards.action';
import { cartSelector } from '../../store/selector';
import { Icard } from '../../types/card.interface';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit{
  constructor(private store:Store,private routeParams:ActivatedRoute){}
  @Input() $quantity:number
  cards:Observable<Icard[]>=this.store.select(cartSelector)
  ngOnInit(): void {
    this.initalization()

  }
  initalization(){
    let req!:string
    this.routeParams.snapshot.children.map((data)=>{
      req=data.params['paragraph']
    })
    if(!req){
      req='all'
      console.log(req)
    }
    this.store.dispatch(additionActionCards({request:req}))
  }
}
