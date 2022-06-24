import { Straight } from '.';

describe('A Straight', () => {
  it('should be detected as possible', () => {
    const hand1 = new Straight(['5c', '6s', '3s', '2s', '4s']);
    const hand2 = new Straight(['5d', '6s', '9s', '7s', '8c']);

    expect(hand1.isPossible).toBe(true);
    expect(hand2.isPossible).toBe(true);
  });

  it('should be detected as not possible', () => {
    const hand = new Straight(['5h', '6s', '2s', 'Ts', '8d']);

    expect(hand.isPossible).toBe(false);
  });

  it('should select the correct winner', () => {
    const highHand = new Straight(['Ad', 'Kh', 'Qs', 'Jc', 'Ts']);
    const lowHand = new Straight(['6d', '5h', '4s', '3c', '2s']);

    expect(lowHand.loseTo(highHand)).toBe(true);
    expect(highHand.loseTo(lowHand)).toBe(false);
  });
});
