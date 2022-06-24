import { FourOfAKind } from '.';

describe('A Four of a Kind', () => {
  it('should be detected as possible', () => {
    const hand = new FourOfAKind(['7h', '7d', '3s', '7s', '7c']);

    expect(hand.isPossible).toBe(true);
  });

  it('should be detected as not possible', () => {
    const hand = new FourOfAKind(['7h', '3d', '7s', '7c', '4s']);

    expect(hand.isPossible).toBe(false);
  });

  it('should select the correct winner', () => {
    const highHand = new FourOfAKind(['9h', '9d', '2s', '9s', '9c']);
    const lowHand = new FourOfAKind(['7h', '7d', '3s', '7s', '7c']);

    expect(lowHand.loseTo(highHand)).toBe(true);
    expect(highHand.loseTo(lowHand)).toBe(false);
  });
});
