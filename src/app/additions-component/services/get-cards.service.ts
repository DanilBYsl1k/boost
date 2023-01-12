import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icard } from '../types/card.interface';

@Injectable({
  providedIn: 'root'
})
export class GetCardsService {

  constructor(private http:HttpClient) { }
  getCards(){
    return this.http.get<Icard[]>('http://localhost:3000/cards')
  }
}
