import { StackNavigator } from 'react-navigation';
import ListScreen from './component/ListScreen';
import DetailScreen from './component/DetailScreen';

export default StackNavigator({
  List: { screen: ListScreen },
  Detail: { screen: DetailScreen }
});
