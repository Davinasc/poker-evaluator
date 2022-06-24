import { ThreeOfAKind } from '.';

describe('Three of a Kind', () => {
  it('should be detected as possible', () => {
    const hand = new ThreeOfAKind(['5c', '5s', '5h', '6c', 'Td']);

    expect(hand.isPossible).toBe(true);
    expect(hand.toString()).toBe('5c, 5s, 5h, 10d, 6c');
  });

  it('should be detected as not possible', () => {
    const hand = new ThreeOfAKind(['5c', '2h', '5h', '6c', 'Ts']);
    expect(hand.isPossible).toBe(false);
  });

  it('should select the correct winner', () => {
    const highHand = new ThreeOfAKind(['8d', '8h', '8s', 'Ac', 'Ts']);
    const lowHand = new ThreeOfAKind(['4d', '4h', '4s', 'Ac', '9s']);

    expect(lowHand.loseTo(highHand)).toBe(true);
    expect(highHand.loseTo(lowHand)).toBe(false);
  });
});
