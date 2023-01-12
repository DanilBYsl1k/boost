import { createAction, props } from "@ngrx/store";
import { Iparagraph } from "../../types/paragraph.type";
import { ActionTypes } from "../actionTypes";

export const additionActionParagrph=createAction(
    ActionTypes.PARAGRAPH
)
export const additionActionParagrphSuccess=createAction(
    ActionTypes.PARAGRAPH_SUCCESS,
    props<{answer:Iparagraph}>()
)
export const additionActionParagrphFailure=createAction(
    ActionTypes.PARAGRAPH_FAILURE,
    props<{error:Error}>()
)