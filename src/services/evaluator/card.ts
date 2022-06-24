import { CARD_VALUES } from './constants';
import type { CardSuit, CardType, CardValue } from './types';

/**
 * Base Card class that defines a single card.
 */
export default class Card {
  value: CardValue;

  suit: CardSuit;

  rank: number;

  constructor(card: CardType) {
    this.value = card.substr(0, 1) as CardValue;
    this.suit = card.substr(1, 1).toLowerCase() as CardSuit;
    this.rank = CARD_VALUES.indexOf(this.value);
  }

  toString() {
    return this.value.replace('T', '10') + this.suit;
  }

  static sort(a: Card, b: Card) {
    if (a.rank > b.rank) return -1;
    if (a.rank < b.rank) return 1;
    return 0;
  }
}
