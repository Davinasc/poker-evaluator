import BaseHand from '../hand/base-hand';
import type { CardType } from '../../types';

export default class FullHouse extends BaseHand {
  isPossible: boolean;

  constructor(cards: CardType[]) {
    super(cards, 'Full House');
    this.isPossible = this.solve();
  }

  solve() {
    for (let i = 0; i < this.values.length; i++) {
      if (this.getNumCardsByRank(i) === 3) {
        this.cards = this.values[i];
        break;
      }
    }

    if (this.cards.length === 3) {
      for (let i = 0; i < this.values.length; i++) {
        if (this.getNumCardsByRank(i) === 2) {
          this.cards = this.cards.concat(this.values[i]);
          break;
        }
      }
    }

    if (this.cards.length === 5) {
      const cardNames = [
        this.cards[0].toString().slice(0, -1),
        this.cards[3].toString().slice(0, -1),
      ];
      this.description = `${this.name}, ${cardNames[0]}'s over ${cardNames[1]}'s`;
    }

    return this.cards.length === 5;
  }
}
