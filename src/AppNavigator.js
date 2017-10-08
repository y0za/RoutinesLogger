import { StackNavigator } from 'react-navigation';
import ListScreen from './component/ListScreen';
import DetailScreen from './component/DetailScreen';
import AddRoutineScreen from './component/AddRoutineScreen';

export default StackNavigator({
  List: { screen: ListScreen },
  Detail: { screen: DetailScreen },
  AddRoutine: { screen: AddRoutineScreen }
});
