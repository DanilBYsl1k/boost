import { createFeatureSelector } from "@ngrx/store";
import { initialStateFeed } from "../types/initialStateFeed.interface";

export const FeatureSelector=createFeatureSelector<initialStateFeed>('Feed')

// export const quantityCardsSelector=createSelector(
//     FeatureSelector,

// )