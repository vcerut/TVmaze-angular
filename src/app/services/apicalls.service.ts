import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Show } from '../show.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIcallsService {
  private showId: number = 0;

  // chiamata per dettagli serie
  getShowDetails(showId: number): Observable<Show> {
    const apiUrl = `https://api.tvmaze.com/shows/${showId}`;
    return this.http.get<Show>(apiUrl);
  }
  // ------------------------

  constructor(private http: HttpClient) {}

  // chiamata per lista serie tv
  searchShows(query: string): Observable<any> {
    return this.http.get(`https://api.tvmaze.com/search/shows?q=${query}`).pipe(
      tap((data) => {
        console.log('API Response:', data); // Aggiungi console.log per visualizzare la risposta
      })
    );
  }
  // ------------------------

  transformShow(show: any) {
    return {
      score: 0,
      show: {
        id: show.id || 0,
        url: show.url || '',
        name: show.name || '',
        type: show.type || '',
        language: show.language || '',
        genres: show.genres || [],
        status: show.status || '',
        runtime: show.runtime || 0,
        averageRuntime: show.averageRuntime || 0,
        premiered: show.premiered || '',
        ended: show.ended || 0,
        officialSite: show.officialSite || '',
        schedule: {
          time: '',
          days: [],
        },
        rating: {
          average: 0,
        },
        weight: 0,
        network: {
          id: 0,
          name: '',
          country: {
            name: '',
            code: '',
            timezone: '',
          },
          officialSite: '',
        },
        webChannel: 0,
        dvdCountry: 0,
        externals: {
          tvrage: 0,
          thetvdb: 0,
          imdb: '',
        },
        image: {
          medium: show.image.medium,
          original: show.image.original,
        },
        summary: show.summary,
        updated: 0,
        _links: {
          self: {
            href: '',
          },
          previousepisode: {
            href: '',
          },
          nextepisode: {
            href: '',
          },
        },
      },
    };
  }
}
