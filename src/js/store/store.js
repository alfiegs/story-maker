//STORE

import {createStore} from 'redux';
import addSentenceReducer from '../reducers/addSentenceReducer';


//creating store
//createStore is a function from the Redux library
//it takes a reducer as the first argument
//reducers produce the state of the application
const store = createStore(addSentenceReducer);

export default store;