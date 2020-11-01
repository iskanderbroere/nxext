interface Name {
  first: string;
  last: string;
}

interface User {
  _id: string;
  name: Name;
}

export interface CatFact {
  _id: string;
  text: string;
  type: string;
  user: User;
  upvotes: number;
  userUpvoted?: null;
}

export interface CatFactsRequest {
  all: CatFact[];
}
