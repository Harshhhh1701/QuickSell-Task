import { configureStore } from '@reduxjs/toolkit';
import { DataReducer, SelectReducer } from './Reducer/DataReducer';

const store = configureStore({
    reducer: {
        DataReducer, SelectReducer
    }
})
export default store;