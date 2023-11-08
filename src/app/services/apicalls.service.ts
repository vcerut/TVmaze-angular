import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIcallsService {
  constructor(private http: HttpClient) {}

  searchShows(query: string): Observable<any> {
    return this.http.get(`https://api.tvmaze.com/search/shows?q=${query}`).pipe(
      tap((data) => {
        console.log('API Response:', data); // Aggiungi console.log per visualizzare la risposta
      })
    );
  }
}
