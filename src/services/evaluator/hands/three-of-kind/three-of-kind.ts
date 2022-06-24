import BaseHand from '../hand/base-hand';
import { GAME_RULES } from '../../constants';
import type { CardType } from '../../types';

export default class ThreeOfAKind extends BaseHand {
  isPossible: boolean;

  constructor(cards: CardType[]) {
    super(cards, 'Three of a Kind');
    this.isPossible = this.solve();
  }

  solve() {
    for (let i = 0; i < this.values.length; i++) {
      if (this.getNumCardsByRank(i) === 3) {
        this.cards = this.cards.concat(
          this.values[i],
          this.nextHighest().slice(0, GAME_RULES.cardsInHand - 3)
        );
        break;
      }
    }

    if (this.cards.length >= 3) {
      const cardName = this.cards[0].toString().slice(0, -1);
      this.description = `${this.name}, ${cardName}'s`;
    }

    return this.cards.length >= 3;
  }
}
