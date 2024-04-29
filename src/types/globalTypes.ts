// src/types/globalTypes.ts

// Interface for restaurant information
export interface Restaurant {
    id: number;
    name: string;
    availableSeats: number;
    img_url: string;
    hasMore: boolean;
    category: string;
}

export interface RestaurantsApiResponse {
    restaurants: Restaurant[];
    hasMore: boolean;
}

// Interface for the props of the ReservationForm component
export interface ReservationFormProps {
    onSearch: (date: string, guests: number, page: number) => void;
}

// Interface for the props of the RestaurantList component
export interface RestaurantListProps {
    data: Restaurant[];
    fetchMoreData: () => void;
    hasMore: boolean;
}

export interface ErrorResponse {
    message: string;
}
