import BaseHand from '../hand/base-hand';
import { GAME_RULES } from '../../constants';
import type { CardType } from '../../types';

export default class OnePair extends BaseHand {
  isPossible: boolean;

  constructor(cards: CardType[]) {
    super(cards, 'Pair');
    this.isPossible = this.solve();
  }

  solve() {
    for (let i = 0; i < this.values.length; i++) {
      if (this.getNumCardsByRank(i) === 2) {
        this.cards = this.cards.concat(
          this.values[i],
          this.nextHighest().slice(0, GAME_RULES.cardsInHand - 2)
        );
        break;
      }
    }

    if (this.cards.length >= 2) {
      const cardName = this.cards[0].toString().slice(0, -1);
      this.description = `${this.name}, ${cardName}'s`;
    }

    return this.cards.length >= 2;
  }
}
