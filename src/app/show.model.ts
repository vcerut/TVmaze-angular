export interface Show {
  score: number;
  show: {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: Array<string>;
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: number;
    officialSite: string;
    schedule: {
      time: string;
      days: Array<string>;
    };
    rating: {
      average: number;
    };
    weight: number;
    network: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
      officialSite: string;
    };
    webChannel: number;
    dvdCountry: number;
    externals: {
      tvrage: number;
      thetvdb: number;
      imdb: string;
    };
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    updated: number;
    _links: {
      self: {
        href: string;
      };
      previousepisode: {
        href: string;
      };
      nextepisode: {
        href: string;
      };
    };
  };
}
