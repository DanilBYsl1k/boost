import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { GetCardsService } from "../../services/get-cards.service";
import { Icard } from "../../types/card.interface";
import { additionActionCards, additionActionCardsFaulure, additionActionCardsSuccess } from "../action/cards.action";

@Injectable({
    providedIn: 'root'
})
export class cardsEffect{
    constructor(private actions$: Actions, private cardsService:GetCardsService){ }
    $cards=createEffect(()=>this.actions$.pipe(
        ofType(additionActionCards),
        switchMap(()=>{
            return this.cardsService.getCards().pipe(
                map((card:Icard[]) => {
                    return additionActionCardsSuccess({ answer: card });
                })
            );
        }),
        catchError((errorRespone:HttpErrorResponse)=>{
            return of(
                additionActionCardsFaulure({error:errorRespone})
            );
        })
    ))
}