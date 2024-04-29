// src/hooks/useRestaurants.ts
import { useState, useCallback } from 'react';
import { fetchRestaurants } from '../services/restaurantService';
import { Restaurant } from '../types/globalTypes';

export function useRestaurants() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const loadRestaurants = useCallback(async (date = '', partySize = 0, page = 1) => {
        setLoading(true);
        try {
            const data = await fetchRestaurants(date, partySize, page);
            // Only append if page is greater than 1, else replace
            setRestaurants(prev => page > 1 ? [...prev, ...data.restaurants] : data.restaurants);
            setHasMore(data.hasMore);
            setError('');
        } catch (err) {
            setError('Failed to fetch data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, []);
    

    return { restaurants, hasMore, loading, error, loadRestaurants };
}
