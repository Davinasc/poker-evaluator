import { FullHouse } from '.';

describe('A Full House', () => {
  it('should be detected as possible', () => {
    const hand1 = new FullHouse(['Qd', 'Js', 'Qc', 'Jc', 'Jd']);
    const hand2 = new FullHouse(['9c', '9d', 'Jh', 'Js', '9h']);

    expect(hand1.isPossible).toBe(true);
    expect(hand2.isPossible).toBe(true);
  });

  it('should be detected as not possible', () => {
    const hand1 = new FullHouse(['5h', '3h', '3c', '5d', '2s']);
    const hand2 = new FullHouse(['9h', '9s', '9d', '5c', 'Kd']);

    expect(hand1.isPossible).toBe(false);
    expect(hand2.isPossible).toBe(false);
  });

  it('should be in order', () => {
    const hand = new FullHouse(['9c', 'Qs', '9h', 'Qc', 'Qh']);

    expect(hand.toString()).toBe('Qs, Qc, Qh, 9c, 9h');
  });

  it('should select the correct winner', () => {
    const highHand = new FullHouse(['Qd', 'Js', 'Qc', 'Jc', 'Jd']);
    const lowHand = new FullHouse(['9c', '9d', 'Jh', 'Js', '9h']);

    expect(lowHand.loseTo(highHand)).toBe(true);
    expect(highHand.loseTo(lowHand)).toBe(false);
  });
});
