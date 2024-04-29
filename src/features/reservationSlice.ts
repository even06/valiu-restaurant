import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReservationState {
    date: string;
    guests: number;
    name: string;
    email: string;
}

const initialState: ReservationState = {
    date: '',
    guests: 0,
    name: '',
    email: ''
};

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        setDate(state, action: PayloadAction<string>) {
            state.date = action.payload;
        },
        setGuests(state, action: PayloadAction<number>) {
            state.guests = action.payload;
        },
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        }
    }
});

export const { setDate, setGuests, setName, setEmail } = reservationSlice.actions;
export default reservationSlice.reducer;
