// Common TypeScript interfaces and types
export interface Artist {
  name: string;
  time: string;
  genre: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Contestant {
  slot: string;
  genre: string;
  image: string;
  trackUrl: string;
}

export interface FormData {
  email: string;
  message: string;
}