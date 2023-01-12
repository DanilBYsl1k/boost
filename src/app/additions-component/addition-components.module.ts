import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { HttpClientModule } from '@angular/common/http'
import { reducers } from './store/reducer';
import { cardsEffect } from './store/effects/cards.effect';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { paragraphEffect } from './store/effects/paragraphEffect';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardsListComponent,
    ParagraphComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('Additions', reducers),
    EffectsModule.forFeature([cardsEffect,paragraphEffect]),
    RouterModule
  ],
  exports:[
    CardsListComponent,
    ParagraphComponent
  ]
})
export class AdditionComponentsModule { }
