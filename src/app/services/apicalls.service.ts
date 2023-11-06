import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class APIcallsService {
  private apiUrl = 'https://api.tvmaze.com/search/shows';

  constructor(private http: HttpClient) { }
  searchShows(query: string) {
    return this.http.get('${this.apiUrl}?q=${query}');
  }
}
