import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AdditionInitialState } from "../types/initialState.interface";


export const FeatureSelector=createFeatureSelector<AdditionInitialState>('Additions')

export const cartSelector=createSelector(
    FeatureSelector,
    (state)=>state.cards
)
export const errorSelector=createSelector(
    FeatureSelector,
    (state)=>state.errors
)
export const paragraphSelector=createSelector(
    FeatureSelector,
    (state)=>state.paragraph
)