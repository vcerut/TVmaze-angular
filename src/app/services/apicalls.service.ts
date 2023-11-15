import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Show } from '../models/show.model';
import { ShowEpisode } from '../models/show-episode.model';
import { Cast } from '../models/cast.model';
import { Image } from '../models/image.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIcallsService {
  private showId: number = 0;

  //chiamata per lista episodi
  getEpisodesList(showId: number): Observable<ShowEpisode[]> {
    const apiUrl = `https://api.tvmaze.com/shows/${showId}/episodes`;
    return this.http.get<ShowEpisode[]>(apiUrl);
  }
  // ------------------------

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
      tap(
        (data) => console.log('API Response:', data),
        (error) => console.error('API Error:', error)
      )
    );
  }
  // ------------------------

  // chiamata per lista cast
  getCast(showId: number): Observable<any> {
    const apiUrl = `https://api.tvmaze.com/shows/${showId}/cast`;
    return this.http.get<Cast[]>(apiUrl);
  }
  // ------------------------
  
  // chiamata per lista guest cast
  getGuestCast(showId: number): Observable<any> {
    const apiUrl = `https://api.tvmaze.com/episodes/${showId}/guestcast`;
    return this.http.get<Cast[]>(apiUrl);
  }
  // ------------------------
  
  // chiamata per immagini
  getGallery(showId: number): Observable<any>{
    const apiUrl = `https://api.tvmaze.com/shows/${showId}/images`;
    return this.http.get<any>(apiUrl);
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
          time: show.schedule.time,
          days: show.schedule.days,
        },
        rating: {
          average: 0,
        },
        weight: 0,
        network: {
          id: 0,
          name: show.network?.name || '-',
          country: {
            name: show.network?.country?.name || '-',
            code: '',
            timezone: '',
          },
          officialSite: show.network?.officialSite || '-',
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

  transformEpisode(episode: any) {
    return {
      id: episode.id || 0,
      url: episode.url || '',
      name: episode.name || '',
      season: episode.season || '',
      number: episode.number || '',
      type: episode.type || '',
      airdate: episode.airdate || '',
      airtime: episode.airtime || '',
      airstamp: episode.airstamp || '',
      runtime: episode.runtime || 0,
      rating: {
        average: episode.rating.average || 0,
      },
      image: {
        medium: episode.image.medium || '',
        original: episode.image.original || '',
      },
      summary: episode.summary || '',
      _links: {
        self: {
          href: episode._links.self.href || '',
        },
        show: {
          href: episode._links.show.href || '',
        },
      },
    };
  }

  transformCast(cast: any) {
    return {
      person: {
        id: cast.person.id || 0,
        url: cast.person.url || '',
        name: cast.person.name || '',
        country: {
          name: cast.person.name || '',
          code: cast.person.code || '',
          timezone: cast.person.timezone || '',
        },
        birthday: cast.person.birthday || '',
        deathday: cast.person.deathday || '',
        gender: cast.person.gender || '',
        image: {
          medium: cast.person.image?.medium || '',
          original: cast.person.image?.original || '',
        },
        updated: cast.person.updated || '',
        _links: {
          self: {
            href: cast.person._links.self.href || '',
          },
        },
      },
      character: {
        id: cast.character.id || 0,
        url: cast.character.url || '',
        name: cast.character.name || '',
        image: {
          medium: cast.character.image && cast.character.image.medium ? cast.character.image.medium : '',
          original: cast.character.image && cast.character.image.original ? cast.character.image.original : '',
        },
        _links: {
          self: {
            href: cast.character._links.self.href || '',
          },
        },
      },
      self: cast.self || false,
      voice: cast.voice || false,
    };
  }

  transformImage(image: any) {
    return {
      id: image.id || 0,
      type: image.type || '',
      main: image.main || false,
      resolutions: {
        original: {
          url: image.resolutions.original.url || '',
          width: image.resolutions.original.width || 0,
          height: image.resolutions.original.height || 0,
        },
        medium: {
          url: image.resolutions.medium.url || '',
          width: image.resolutions.medium.width || 0,
          height: image.resolutions.medium.height || 0,
        },
      },
    }
    
  }
}
