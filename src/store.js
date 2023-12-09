import { configureStore } from '@reduxjs/toolkit';
import { DataReducer, SelectReducer } from './Reducers/DataReducer';

const store = configureStore({
    reducer: {
        DataReducer, SelectReducer
    }
})
export default store;