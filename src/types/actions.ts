// Action Types
export const SET_DATE = 'SET_DATE';
export const SET_GUESTS = 'SET_GUESTS';

// Action Interfaces
export interface SetDateAction {
    type: typeof SET_DATE;
    payload: string;
}

export interface SetGuestsAction {
    type: typeof SET_GUESTS;
    payload: number;
}

export type ReservationActionTypes = SetDateAction | SetGuestsAction;
