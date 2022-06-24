import Card from '../../card';
import BaseHand from '../hand/base-hand';
import { GAME_RULES } from '../../constants';
import type { CardType } from '../../types';

export default class HighCard extends BaseHand {
  isPossible: boolean;

  constructor(cards: CardType[]) {
    super(cards, 'High Card');
    this.isPossible = this.solve();
  }

  solve() {
    this.cards = this.cardPool.slice(0, GAME_RULES.cardsInHand).sort(Card.sort);
    this.description = `${this.cards[0].toString().slice(0, -1)} High`;

    return true;
  }
}
