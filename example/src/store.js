import {createStore} from 'redux';
import counter from './counter.js';

const store = createStore(counter);

export default store;
