import OnePair from './one-pair';

describe('One Pair', () => {
  it('should be detected as possible', () => {
    const hand = new OnePair(['5h', '5c', '7s', '6c', 'Ts']);
    expect(hand.isPossible).toBe(true);
  });

  it('should be detected as not possible', () => {
    const hand = new OnePair(['5h', '6s', 'Jh', '7c', '2s']);
    expect(hand.isPossible).toBe(false);
  });

  it('should select the correct winner', () => {
    const highHand = new OnePair(['4d', '4h', 'Ah', 'Jc', 'Ts']);
    const lowHand = new OnePair(['4d', '4h', 'Ac', 'Tc', '9s']);

    expect(lowHand.loseTo(highHand)).toBe(true);
    expect(highHand.loseTo(lowHand)).toBe(false);
  });
});
