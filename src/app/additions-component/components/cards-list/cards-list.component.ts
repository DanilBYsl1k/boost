import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { additionActionCards } from '../../store/action/cards.action';
import { cartSelector } from '../../store/selector';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit{
  constructor(private store:Store){}
  
  cards=this.store.select(cartSelector)
  ngOnInit(): void {
    this.initalization()
  }
  initalization(){
    this.store.dispatch(additionActionCards())
  }
}
