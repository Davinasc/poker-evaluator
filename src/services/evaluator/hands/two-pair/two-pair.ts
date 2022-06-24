import BaseHand from '../hand/base-hand';
import { GAME_RULES } from '../../constants';
import type { CardType } from '../../types';

export default class TwoPair extends BaseHand {
  isPossible: boolean;

  constructor(cards: CardType[]) {
    super(cards, 'Two Pair');
    this.isPossible = this.solve();
  }

  solve() {
    for (let i = 0; i < this.values.length; i++) {
      if (this.getNumCardsByRank(i) === 2) {
        const cards = this.values[i];

        if (this.cards.length > 0) {
          this.cards = this.cards.concat(
            cards,
            this.nextHighest().slice(0, GAME_RULES.cardsInHand - 4)
          );
          break;
        }

        this.cards = this.cards.concat(cards);
      }
    }

    if (this.cards.length >= 4) {
      const pairs = [
        this.cards[0].toString().slice(0, -1),
        this.cards[2].toString().slice(0, -1),
      ];
      this.description = `${this.name}, ${pairs[0]}'s & ${pairs[1]}'s`;
    }

    return this.cards.length >= 4;
  }
}
