import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { NewsModelContainer } from '../models/newsModelContainer';

@Injectable({
  providedIn: 'root'
})
export class ReadjsonService {

  constructor(private http:HttpClient) { }

  public getData():Observable<NewsModelContainer>{
    return this.http.get<NewsModelContainer>('../../assets/newsapi.json').pipe();
  }
}
