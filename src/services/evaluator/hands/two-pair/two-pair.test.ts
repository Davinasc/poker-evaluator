import { TwoPair } from '.';

describe('Two Pair', () => {
  it('should be detected as possible', () => {
    const hand = new TwoPair(['5c', '5d', '6s', '6c', 'Td']);
    expect(hand.isPossible).toBe(true);
  });

  it('should be detected as not possible', () => {
    const hand = new TwoPair(['5c', '6s', '6h', '7c', '2d']);
    expect(hand.isPossible).toBe(false);
  });

  it('should select the correct winner', () => {
    const highHand = new TwoPair(['4d', '4h', 'Ah', 'Ac', 'Ts']);
    const lowHand = new TwoPair(['4d', '4h', 'Ah', 'Ac', '9s']);

    expect(lowHand.loseTo(highHand)).toBe(true);
    expect(highHand.loseTo(lowHand)).toBe(false);
  });
});
