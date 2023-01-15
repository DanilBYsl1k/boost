import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { initialStateFeed } from "../types/initialStateFeed.interface";



const initialStateFeeds:initialStateFeed={

}

const connectReducer=createReducer(
    initialStateFeeds
)
export function reducers(state:initialStateFeed, action:Action){
    return connectReducer(state, action)
}