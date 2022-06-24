import HighCard from './high-card';

describe('HighCard', () => {
  it('should select the correct winner', () => {
    const highHand = new HighCard(['4d', '9h', 'Ah', 'Jc', 'Ts']);
    const lowHand = new HighCard(['4d', '3h', 'Ac', 'Tc', '9s']);

    expect(lowHand.loseTo(highHand)).toBe(true);
    expect(highHand.loseTo(lowHand)).toBe(false);
  });
});
