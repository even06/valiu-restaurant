import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './features/reservationSlice';
const store = configureStore({
    reducer: {
        reservation: reservationReducer
    }
});

// Define the RootState type based on the reducers
export type RootState = ReturnType<typeof store.getState>;

export default store;
