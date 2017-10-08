import { StoreGroup } from 'almin';
import NavigationStore from './NavigationStore/NavigationStore';
import RoutineListStore from './RoutineListStore/RoutineListStore';
import RoutineDetailStore from './RoutineDetailStore/RoutineDetailStore';
import routineRepository from '../infra/RoutineRepository';

export default class AppStore {
  static create() {
    return new StoreGroup({
      navigationState: new NavigationStore(),
      routineListState: new RoutineListStore({ routineRepository }),
      routineDetailState: new RoutineDetailStore({ routineRepository })
    });
  }
}
