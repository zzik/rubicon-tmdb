export interface MovieProps {
  title: string;
  cover:{
    image: string;
    trailer?:string|null;
  }
  description: string;
}

export interface TopTenProps {
  
}