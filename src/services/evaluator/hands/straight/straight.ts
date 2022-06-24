import BaseHand from '../hand/base-hand';
import Card from '../../card';
import { GAME_RULES } from '../../constants';
import type { CardType, StraightFlushLength } from '../../types';

export default class Straight extends BaseHand {
  isPossible: boolean;

  constructor(cards: (Card | CardType)[]) {
    super(cards, 'Straight');
    this.isPossible = this.solve();
  }

  solve() {
    this.cards = this.getGaps();

    if (this.cards.length >= GAME_RULES.sfQualify) {
      const cardName = this.cards[0].toString().slice(0, -1);
      this.description = `${this.name}, ${cardName} High`;

      this.cards = this.cards.slice(0, GAME_RULES.cardsInHand);
      this.sfLength = this.cards.length as StraightFlushLength;

      if (this.cards.length < GAME_RULES.cardsInHand) {
        if ((this.cards[this.sfLength - 1] as Card).rank === 0) {
          this.cards = this.cards.concat(
            this.nextHighest().slice(
              1,
              GAME_RULES.cardsInHand - this.cards.length + 1
            )
          );
        } else {
          this.cards = this.cards.concat(
            this.nextHighest().slice(
              0,
              GAME_RULES.cardsInHand - this.cards.length
            )
          );
        }
      }
    }

    return this.cards.length >= GAME_RULES.sfQualify;
  }

  /**
   * Get the number of gaps in the straight.
   * returns the Highest potential straight with fewest number of gaps.
   */
  getGaps() {
    const checkHandLength = GAME_RULES.sfQualify;
    const cards = this.cardPool.sort(Card.sort);
    let gapCards: Card[] = [];

    for (let i = this.values.length; i > 0; i--) {
      const cardsList = [];
      let gapCount = 0;

      for (let j = 0; j < cards.length; j++) {
        const card = cards[j];

        if (card.rank > i) continue;

        const prevCard = cardsList[cardsList.length - 1];
        const diff = prevCard ? prevCard.rank - card.rank : i - card.rank;

        // TODO: REFACTOR
        if (checkHandLength < gapCount + diff + cardsList.length) {
          break;
        }

        if (diff > 0) {
          cardsList.push(card);
          gapCount += diff - 1;
        }
      }

      if (cardsList.length > gapCards.length) gapCards = cardsList.slice();
    }

    return gapCards;
  }
}
