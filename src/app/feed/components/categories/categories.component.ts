import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cardsLenghtSelector } from 'src/app/additions-component/store/selector';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  constructor(private store:Store){}
  len:number
  ngOnInit(): void {
    this.store.select(cardsLenghtSelector).subscribe(data=>{
      this.len=data
    })
  }

}
