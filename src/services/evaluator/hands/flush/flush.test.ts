import { Flush } from '.';

describe('A Flush', () => {
  it('should be detected as possible', () => {
    const hand = new Flush(['4h', 'Th', '5h', '2h', 'Kh']);
    expect(hand.isPossible).toBe(true);
  });

  it('should be detected as not possible', () => {
    const hand = new Flush(['4s', 'Th', '5h', 'Ac', '2h']);
    expect(hand.isPossible).toBe(false);
  });

  it('should select the correct winner', () => {
    const highHand = new Flush(['4h', 'Th', '5h', 'Ah', 'Kh']);
    const lowHand = new Flush(['4h', 'Th', '5h', '2h', 'Kh']);

    expect(lowHand.loseTo(highHand)).toBe(true);
    expect(highHand.loseTo(lowHand)).toBe(false);
  });
});
