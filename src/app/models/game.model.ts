export interface GameListState {
  list: Array<Game>;
}

export interface Game {
  id: number;
  name: string;
  original_release_date: string;
  aliases: string;
  deck: string;
  platforms: any;
  description: string;
  image: {
    original_url: string;
    thumb_url: string;
    icon_url: string;
  };
}
