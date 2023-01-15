import { createAction, props } from "@ngrx/store";
import { Icard } from "../../types/card.interface";
import { ActionTypes } from "../actionTypes";

export const additionActionCards=createAction(
    ActionTypes.CARDS,
    props<{request:string}>()
)
export const additionActionCardsSuccess=createAction(
    ActionTypes.CARDS_SUCCESS,
    props<{answer:Icard[]}>()
)
export const additionActionCardsFaulure=createAction(
    ActionTypes.CARDS_FAILURE,
    props<{error:Error}>()
)