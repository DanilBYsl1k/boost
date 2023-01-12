import { Action, createReducer, on } from "@ngrx/store";
import { AdditionInitialState } from "../types/initialState.interface";
import { additionActionCards, additionActionCardsFaulure, additionActionCardsSuccess } from "./action/cards.action";
import { additionActionParagrph, additionActionParagrphFailure, additionActionParagrphSuccess } from "./action/paragraphs.action";


const initialState:AdditionInitialState={
    cards: [],
    errors: null,
    paragraph: []
}
const connectReducer=createReducer(
    initialState,
    //////////// additionActionCards
    on(
        additionActionCards,(state):AdditionInitialState=>({
            ...state,
        })
    ),
    on(
        additionActionCardsSuccess,(state,action):AdditionInitialState=>({
            ...state,
            cards:action.answer
        })
    ),
    on(
        additionActionCardsFaulure,(state , action):AdditionInitialState=>({
            ...state,
            errors:action.error
        })
    )//////////// additionActionParagrph
    ,   
    on(
        additionActionParagrph,(state):AdditionInitialState=>({
            ...state,
        })
    ),
    on(
        additionActionParagrphSuccess,(state,action):AdditionInitialState=>({
            ...state,
            paragraph:action.answer
        })
    ),
    on(
        additionActionParagrphFailure,(state , action):AdditionInitialState=>({
            ...state,
            errors:action.error
        })
    )//////////////////////////
)
export function reducers(state:AdditionInitialState, action:Action){
    return connectReducer(state, action)
}