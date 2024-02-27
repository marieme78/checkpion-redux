import { createStore } from 'redux';
import tasksReducer from './Reducer';

const store = createStore(tasksReducer);

export default store;
