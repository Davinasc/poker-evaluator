import Hand from './hand';

describe('Hand', () => {
  it('should return a hand with cards sorted descending', () => {
    const hand = Hand.solve(['Kh', 'Tc', '5d', 'As', '3c']);

    expect(hand.cardPool[0].toString()).toBe('As');
    expect(hand.cardPool[4].toString()).toBe('3c');
  });

  it('should return throw an Error for a hand with duplicate cards', () => {
    expect(() => {
      Hand.solve(['As', 'Qh', 'Ts', 'As', '2d']);
    }).toThrow('Duplicated cards');
  });

  it('should return a correct description', () => {
    const hand = Hand.solve(['Kh', 'Tc', '3d', 'As', '3c']);
    expect(hand.description).toBe("Pair, 3's");
  });

  it('should return throw an Error for a hand with more than 5 cards', () => {
    expect(() => {
      Hand.solve(['As', 'Qh', 'Ts', 'As', '2d', '3s']);
    }).toThrow('Max size of cards must be 5');
  });

  describe('Determining winning hands', () => {
    it('should detect the winning hand from a list', () => {
      const hand1 = Hand.solve(['3h', '2c', 'Ad', 'Th', 'Ts']);
      const hand2 = Hand.solve(['3h', '3c', 'Js', 'Ts', '3d']);
      const winners = Hand.winners([hand1, hand2]);

      expect(winners.length).toBe(1);
      expect(winners[0]).toBe(hand2);
    });
  });
});
