export interface People {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  gender: string;
  skin_color: string;
  eye_color: string;
  url: string;
  hair_color: string;
}

export interface ApiResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: [];
}

export interface PaginationState {
  previous: string | null;
  next: string | null;
}

export interface PeopleList {
  peopleList?: People[];
}
