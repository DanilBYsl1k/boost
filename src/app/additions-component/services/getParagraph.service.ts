import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Iparagraph } from '../types/paragraph.type';

@Injectable({
    providedIn: 'root'
})
export class getParagraphService {
    constructor(private http:HttpClient) { }
    
    getParagraphs(): Observable<Iparagraph>{
        return this.http.get<Iparagraph>('http://localhost:3000/paragraphs')
    }
}
