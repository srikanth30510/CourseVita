
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import categoryReducer from '../reducers/categoryReducer';
import Axios from 'axios';

Axios.defaults.withCredentials = true;
const store = configureStore({
  reducer:{
    auth:authReducer,
    category:categoryReducer
  }
});

export default store;

