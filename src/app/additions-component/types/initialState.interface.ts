import { Icard } from "./card.interface";
import { Iparagraph } from "./paragraph.type";

export interface AdditionInitialState{
    cards:Icard[]
    errors:Error|null
    paragraph:Iparagraph
}