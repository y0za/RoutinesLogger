import React from 'react';
import { Calendar } from 'react-native-calendars';

export default class LogCalendar extends React.Component {
  createMarkedDates(dates) {
    const markedDates = {};
    for (const date of dates) {
      markedDates[date] = { marked: true };
    }
    return markedDates;
  }

  render() {
    const markedDates = this.createMarkedDates(this.props.doneDates);

    return <Calendar markedDates={markedDates} />;
  }
}
