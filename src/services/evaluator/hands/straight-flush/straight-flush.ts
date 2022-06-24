import BaseHand from '../hand/base-hand';
import Card from '../../card';
import { Straight } from '../straight';

import { GAME_RULES } from '../../constants';
import type { CardSuit, CardType } from '../../types';

export default class StraightFlush extends BaseHand {
  isPossible: boolean;

  constructor(cards: CardType[]) {
    super(cards, 'Straight Flush');
    this.isPossible = this.solve();
  }

  solve() {
    let possibleStraight: Card[] | null = null;
    let flushSuit: CardSuit | null = null;

    const suitKeys = Object.keys(this.suits);
    for (let i = 0; i < suitKeys.length; i++) {
      const suit = suitKeys[i] as CardSuit;
      const cards = this.getCardsForFlush(suit);

      if (cards && cards.length >= GAME_RULES.sfQualify) {
        possibleStraight = cards;
        flushSuit = suit;
        break;
      }
    }

    if (possibleStraight) {
      const straight = new Straight(possibleStraight);

      if (straight.isPossible) {
        this.cards = straight.cards;
        this.sfLength = straight.sfLength;
      }
    }

    const isA = (this.cards[0] as Card)?.rank === 13;
    if (isA) this.description = 'Royal Flush';

    if (this.cards.length >= GAME_RULES.sfQualify) {
      const cardName = this.cards[0].toString().slice(0, -1);
      this.description = `${this.name}, ${cardName}${flushSuit} High`;
    }

    return this.cards.length >= GAME_RULES.sfQualify;
  }
}
