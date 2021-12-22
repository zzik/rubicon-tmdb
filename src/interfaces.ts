export interface MovieProps {
  id: number;
  title: string;
  backdrop_path?: string | null | undefined;
  poster_path?: string  | null | undefined;
  overview: string;
}
export interface TvProps {
  id: number;
  original_name: string;
  src: string;
  backdrop_path?: string | null | undefined;
  poster_path?: string  | null | undefined;
  overview: string;
}