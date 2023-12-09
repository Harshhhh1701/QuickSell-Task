import { configureStore } from '@reduxjs/toolkit';
import { DataReducer, SelectReducer } from './Reducer/DataReducer';

const Reduxstore = configureStore({
    reducer: {
        DataReducer, SelectReducer
    }
})
export default Reduxstore;