import React from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AlminReactContainer from 'almin-react-container';
import LogCalendar from './LogCalendar';

export default class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LogCalendar
          doneDates={this.props.screenProps.routineDetailState.dates}
        />
      </View>
    );
  }
}
