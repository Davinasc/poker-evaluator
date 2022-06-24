import Card from '../../card';
import { GAME_RULES } from '../../constants';
import type { CardSuit, CardType, StraightFlushLength } from '../../types';

/**
 * Base Hand class that handles comparisons of full hands.
 */
export default class BaseHand {
  cardPool: Card[];

  cards: (Card | CardType)[];

  suits: { [key in CardSuit]?: Card[] };

  values: Card[][];

  name: string;

  description: string;

  rank: number;

  sfLength: StraightFlushLength;

  constructor(cards: (Card | CardType)[], name: string) {
    this.cardPool = [];
    this.cards = [];
    this.suits = {};
    this.values = [];
    this.name = name;
    this.sfLength = 0;
    this.description = GAME_RULES.description;

    // Ensure cards length limit
    if (cards.length > 5) {
      throw new Error('Max size of cards must be 5');
    }

    // Ensure no duplicated cards in the game
    if (new Set(cards).size !== cards.length) {
      throw new Error('Duplicated cards');
    }

    const handRank = GAME_RULES.handValues.length;
    let handRankIdx = 0;

    for (let i = 0; i < handRank; i++) {
      if (GAME_RULES.handValues[i] === this.name) {
        handRankIdx = handRank - i;
        break;
      }
    }

    this.rank = handRankIdx;

    // Set up the pool of cards.
    this.cardPool = cards
      .map(card => (typeof card === 'string' ? new Card(card) : card))
      .sort(Card.sort);

    this.cardPool.forEach(card => {
      if (!this.suits[card.suit]) this.suits[card.suit] = [];
      if (!this.values[card.rank]) this.values[card.rank] = [];

      this.suits[card.suit]?.push(card);
      this.values[card.rank]?.push(card);
    });

    this.values.reverse();
  }

  /**
   * Return list of contained cards in human readable format.
   */
  toString() {
    return this.cards.map(card => card.toString()).join(', ');
  }

  /**
   * Return array of contained cards.
   */
  toArray(): CardType[] {
    return this.cardPool.map(card =>
      card.toString().replace('10', 'T')
    ) as CardType[];
  }

  /**
   * Compare current hand with another to determine which is the winner.
   * @param rivalHand Hand to compare to.
   */
  compare(rivalHand: BaseHand) {
    if (this.rank < rivalHand.rank) return 1;
    if (this.rank > rivalHand.rank) return -1;

    let result = 0;
    for (let i = 0; i <= 4; i++) {
      if ((this.cards[i] as Card).rank < (rivalHand.cards[i] as Card).rank) {
        result = 1;
        break;
      }

      if ((this.cards[i] as Card).rank > (rivalHand.cards[i] as Card).rank) {
        result = -1;
        break;
      }
    }

    return result;
  }

  /**
   * Determine whether a hand loses to another.
   * @param hand Hand to compare to.
   */
  loseTo(hand: BaseHand) {
    return this.compare(hand) > 0;
  }

  /**
   * Determine the number of cards in a hand of a rank.
   * @param index Index of this.values.
   */
  getNumCardsByRank(index: number) {
    const cards = this.values[index];
    const checkCardsLength = cards ? cards.length : 0;

    return checkCardsLength;
  }

  /**
   * Determine the cards in a suit for a flush.
   * @param suit Key for this.suits.
   */
  getCardsForFlush(suit: CardSuit) {
    return this.suits[suit]?.sort(Card.sort);
  }

  /**
   * Highest card comparison.
   */
  nextHighest() {
    let excluding: Card[] = [];
    excluding = excluding.concat(this.cards as Card[]);

    const picks = this.cardPool
      .filter(card => excluding.indexOf(card) < 0)
      .sort(Card.sort);

    return picks;
  }
}
