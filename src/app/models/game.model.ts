export interface GameListState {
  list: Array<Game>;
}

export interface Game {
  id: number;
  name: string;
  aliases: string;
  deck: string;
  description: string;
  image: {
    thumb_url: string;
    icon_url: string;
  };
}
