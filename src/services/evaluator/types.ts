export type CardValue =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'T'
  | 'J'
  | 'Q'
  | 'K'
  | 'A';

export type CardSuit = 'c' | 'd' | 'h' | 's';

export type CardSuitName = 'Clubs' | 'Diamonds' | 'Hearts' | 'Spades';

export type CardType = `${CardValue}${CardSuit}`;

export type StraightFlushLength = 0 | 1 | 2 | 3 | 4;

export type GameRules = {
  description: string;
  cardsInHand: number;
  sfQualify: number;
  handValues: string[];
};
