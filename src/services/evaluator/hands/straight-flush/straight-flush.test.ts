import { StraightFlush } from '.';

describe('A Straight Flush', () => {
  it('should be detected as possible', () => {
    const hand = new StraightFlush(['5c', '6c', '3c', '2c', '4c']);
    expect(hand.isPossible).toBe(true);
  });

  it('should be detected as not possible', () => {
    const hand = new StraightFlush(['5c', '6c', '3c', '2c', '4s']);
    expect(hand.isPossible).toBe(false);
  });

  it('should select the correct winner', () => {
    const highHand = new StraightFlush(['5c', '6c', '3c', '7c', '4c']);
    const lowHand = new StraightFlush(['5c', '6c', '3c', '2c', '4c']);

    expect(lowHand.loseTo(highHand)).toBe(true);
    expect(highHand.loseTo(lowHand)).toBe(false);
  });
});
