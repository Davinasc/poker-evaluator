import type {
  CardSuit,
  CardSuitName,
  CardType,
  CardValue,
  GameRules,
} from './types';

export const CARD_VALUES: CardValue[] = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'T',
  'J',
  'Q',
  'K',
  'A',
];

export const CARD_SUITS: CardSuit[] = ['c', 'd', 'h', 's'];

export const CARD_SUIT_NAMES: Record<CardSuit, CardSuitName> = {
  c: 'Clubs',
  d: 'Diamonds',
  h: 'Hearts',
  s: 'Spades',
};

export const DECK: CardType[] = CARD_VALUES.flatMap(value =>
  CARD_SUITS.map(suit => `${value}${suit}` as CardType)
);

/**
 * Defines the rules of the game.
 */
export const GAME_RULES: GameRules = {
  description: 'standard',
  cardsInHand: 5,
  sfQualify: 5,
  handValues: [
    'Straight Flush',
    'Four of a Kind',
    'Full House',
    'Flush',
    'Straight',
    'Three of a Kind',
    'Two Pair',
    'Pair',
    'High Card',
  ],
};
