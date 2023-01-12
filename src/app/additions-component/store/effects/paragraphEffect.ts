import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { getParagraphService } from "../../services/getParagraph.service";
import { Iparagraph } from "../../types/paragraph.type";
import { additionActionParagrph, additionActionParagrphFailure, additionActionParagrphSuccess } from "../action/paragraphs.action";

@Injectable({
    providedIn: 'root'
})
export class paragraphEffect{
    constructor(private actions$: Actions, private paragraphService:getParagraphService){ }
    $paragraph=createEffect(()=>this.actions$.pipe(
        ofType(additionActionParagrph),
        switchMap(()=>{
            return this.paragraphService.getParagraphs().pipe(
                map((paragraph:Iparagraph) => {
                    return additionActionParagrphSuccess({ answer:paragraph });
                })
            );
        }),
        catchError((errorRespone:HttpErrorResponse)=>{
            return of(
                additionActionParagrphFailure({error:errorRespone})
            );
        })
    ))
}