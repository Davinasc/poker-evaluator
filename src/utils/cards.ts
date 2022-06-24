import { CARD_SUIT_NAMES, DECK } from '../services/evaluator/constants';
import { CardSuit, CardSuitName, CardType } from '../services/evaluator/types';

export function getCardImgPath(card: CardType) {
  return `/cards/${card}.png`;
}

export function getSuitName(suit: CardSuit) {
  return CARD_SUIT_NAMES[suit];
}

export function getSuitByName(suitName: CardSuitName) {
  return (Object.keys(CARD_SUIT_NAMES) as CardSuit[]).find(
    suit => CARD_SUIT_NAMES[suit] === suitName
  ) as CardSuit;
}

export function getCardsBySuitName(suitName: CardSuitName) {
  const suit = getSuitByName(suitName);
  const cards = DECK.filter(card => card.includes(suit));

  return cards;
}
