import RoutineItem from '../RoutineItem';
import SimpleDate from '../value/SimpleDate';

describe('RoutineItem', () => {
  describe('#isDone', () => {
    it('return true if it contains target date', () => {
      const routineItem = new RoutineItem({
        title: 'walking',
        doneDates: [
          new SimpleDate({ year: 2017, month: 10, day: 1 }),
          new SimpleDate({ year: 2017, month: 10, day: 2 })
        ],
        sinceDate: new SimpleDate({ year: 2017, month: 10, day: 1 })
      });

      const targetDate = new SimpleDate({ year: 2017, month: 10, day: 1 });
      expect(routineItem.isDone(targetDate)).toBe(true);
    });

    it('return false if it does not contain target date', () => {
      const routineItem = new RoutineItem({
        title: 'walking',
        doneDates: [
          new SimpleDate({ year: 2017, month: 10, day: 1 }),
          new SimpleDate({ year: 2017, month: 10, day: 2 })
        ],
        sinceDate: new SimpleDate({ year: 2017, month: 10, day: 1 })
      });

      const targetDate = new SimpleDate({ year: 2017, month: 10, day: 3 });
      expect(routineItem.isDone(targetDate)).toBe(false);
    });
  });

  describe('#toggleDone', () => {
    it('append target date to doneDates if it does not contain the date', () => {
      const routineItem = new RoutineItem({
        title: 'walking',
        doneDates: [new SimpleDate({ year: 2017, month: 10, day: 1 })],
        sinceDate: new SimpleDate({ year: 2017, month: 10, day: 1 })
      });

      const targetDate = new SimpleDate({ year: 2017, month: 10, day: 2 });
      const expectedDates = [
        new SimpleDate({ year: 2017, month: 10, day: 1 }),
        new SimpleDate({ year: 2017, month: 10, day: 2 })
      ];
      routineItem.toggleDone(targetDate);
      expect(routineItem.doneDates).toEqual(expectedDates);
    });

    it('remove target date from doneDates if it contain the date', () => {
      const routineItem = new RoutineItem({
        title: 'walking',
        doneDates: [
          new SimpleDate({ year: 2017, month: 10, day: 1 }),
          new SimpleDate({ year: 2017, month: 10, day: 2 })
        ],
        sinceDate: new SimpleDate({ year: 2017, month: 10, day: 1 })
      });

      const targetDate = new SimpleDate({ year: 2017, month: 10, day: 2 });
      const expectedDates = [new SimpleDate({ year: 2017, month: 10, day: 1 })];
      routineItem.toggleDone(targetDate);
      expect(routineItem.doneDates).toEqual(expectedDates);
    });
  });
});
