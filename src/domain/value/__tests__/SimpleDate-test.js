import SimpleDate from '../SimpleDate';

describe('SimpleDate', () => {
  describe('#equals', () => {
    it('return true if same date', () => {
      const date1 = new SimpleDate({ year: 2017, month: 10, day: 9 });
      const date2 = new SimpleDate({ year: 2017, month: 10, day: 9 });
      expect(date1.equals(date2)).toBe(true);
    });

    it('return false if different date', () => {
      const date1 = new SimpleDate({ year: 2017, month: 10, day: 9 });
      const date2 = new SimpleDate({ year: 2017, month: 10, day: 10 });
      expect(date1.equals(date2)).toBe(false);
    });
  });

  describe('#toString', () => {
    it('return "{year}-{month}-{day}" string', () => {
      const date = new SimpleDate({ year: 2017, month: 1, day: 1 });
      expect(date.toString()).toBe('2017-01-01');
    });
  });
});
