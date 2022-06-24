import BaseHand from './base-hand';
import {
  Flush,
  FourOfAKind,
  FullHouse,
  HighCard,
  OnePair,
  Straight,
  StraightFlush,
  ThreeOfAKind,
  TwoPair,
} from '../index';
import type { CardType } from '../../types';
import { DECK } from '../../constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HAND_VALUES: any = [
  StraightFlush,
  FourOfAKind,
  FullHouse,
  Flush,
  Straight,
  ThreeOfAKind,
  TwoPair,
  OnePair,
  HighCard,
];

/**
 * Base Hand class that handles comparisons of full hands.
 */
export default class Hand extends BaseHand {
  /**
   * Find highest ranked hands and remove any that don't qualify or lose to another hand.
   * @param hands Hands to evaluate.
   */
  static winners(hands: Hand[]) {
    const highestRank = Math.max(...hands.map(hand => hand.rank));
    const result = hands.filter(hand => hand.rank === highestRank);

    const finalHands = result.filter(hand => {
      let lose = false;

      for (let i = 0; i < hands.length; i++) {
        lose = hand.loseTo(hands[i]);
        if (lose) break;
      }

      return !lose;
    });

    return finalHands;
  }

  /**
   * Build and return the best hand.
   */
  static solve(cards?: CardType[]) {
    const hands = HAND_VALUES;
    let result = null;

    for (let i = 0; i < hands.length; i++) {
      result = new hands[i](cards || ['']);

      if (result.isPossible) break;
    }

    return result;
  }

  /**
   * Build a random hand.
   */
  static random() {
    const hand = new Set<CardType>();

    while (hand.size !== 5) {
      hand.add(DECK[Math.floor(Math.random() * DECK.length)]);
    }

    return Array.from(hand);
  }
}
