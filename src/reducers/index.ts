import homeReducers from '@/features/home/redux/reducers';
import { combineReducers } from 'redux';

export default () =>
  combineReducers({
    home: homeReducers,
  });
