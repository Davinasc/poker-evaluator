import BaseHand from '../hand/base-hand';
import { GAME_RULES } from '../../constants';
import type { CardSuit, CardType, StraightFlushLength } from '../../types';

export default class Flush extends BaseHand {
  isPossible: boolean;

  constructor(cards: CardType[]) {
    super(cards, 'Flush');
    this.isPossible = this.solve();
  }

  solve() {
    this.sfLength = 0;
    let flushSuit: CardSuit | null = null;

    const suitKeys = Object.keys(this.suits);
    for (let i = 0; i < suitKeys.length; i++) {
      const suit = suitKeys[i] as CardSuit;
      const cards = this.getCardsForFlush(suit);

      if (cards && cards.length >= GAME_RULES.sfQualify) {
        this.cards = cards;
        flushSuit = suit;
        break;
      }
    }

    if (this.cards.length >= GAME_RULES.sfQualify) {
      const cardName = this.cards[0].toString().slice(0, -1);
      this.description = `${this.name}, ${cardName}${flushSuit} High`;

      this.sfLength = this.cards.length as StraightFlushLength;

      if (this.cards.length < GAME_RULES.cardsInHand) {
        this.cards = this.cards.concat(
          this.nextHighest().slice(
            0,
            GAME_RULES.cardsInHand - this.cards.length
          )
        );
      }
    }

    return this.cards.length >= GAME_RULES.sfQualify;
  }
}
