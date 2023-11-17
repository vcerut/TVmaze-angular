export interface Person {
  score: number;
  person: {
    id: number;
    url: string;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    birthday: string;
    deathday: string;
    gender: string;
    image: {
      medium: string;
      original: string;
    };
    updated: number;
    _links: {
      self: {
        href: string;
      };
    };
  };
}
