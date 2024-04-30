import axios from 'axios';
import store from '../store'; // I might need to move this away, just did it to save time implementing the infinite scroll

const API_BASE_URL = 'http://bots.soltech.ltd:3000';

export const fetchRestaurants = async (date = '', partySize = 0, page = 1) => {
    // Get current state from Redux store
    const currentState = store.getState();
    
    // Use values from Redux if parameters are not provided
    const effectiveDate = date || currentState.reservation.date;
    const effectivePartySize = partySize || currentState.reservation.guests;

    try {
        const response = await axios.get(`${API_BASE_URL}/restaurants`, {
            params: { date: effectiveDate, partySize: effectivePartySize, page },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const bookTable = async (restaurantId: number, date: string, guests: number, name: string, email: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/book`, {
            restaurantId,
            date,
            guests,
            name,
            email
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};