import { createReducer } from "@reduxjs/toolkit";


export const DataReducer = createReducer({}, {
    DATA_REQUEST : (state) => {
        state.loading = true;
    },
    DATA_SUCCESS : (state, action) => {
        state.loading = false;
        state.allTickets = action.payload.tickets;
        state.allUser = action.payload.users;
    },
    DATA_FAILURE : (state) => {
        state.loading = false;
        state.allTickets = []
        state.allUser = [];
    },
});


export const SelectReducer = createReducer({}, {
    SELECT_REQUEST : (state) => {
        state.loading = true;
        state.selectedData = [];
    },
    SELECT_SUCCESS : (state, action) => {
        state.loading = false;
        state.selectedData = action.payload.selectedData;
        state.user = action.payload.user
    },
    SELECT_FAILURE : (state, action) => {
        state.loading = false;
        state.selectedData = []
        state.message = action.payload.message
    },
});