import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Restaurant as RestaurantType, RestaurantListProps } from '../types/globalTypes';


// Define the props for the Restaurant component
interface RestaurantProps {
  restaurant: RestaurantType;
  onReserveClick: (restaurant: RestaurantType) => void; // Adding this to pass function to each Restaurant
}

const Restaurant: React.FC<RestaurantProps & { onReserveClick: (restaurant: RestaurantType) => void }> = ({ restaurant, onReserveClick }) => (
    <div key={restaurant.id} className="restaurant-card">
        <div className="restaurant-img">
          <img src={restaurant.img_url} alt={restaurant.name}></img>
        </div>
        <div className="restaurant-content">
          <h3>{restaurant.name}</h3>
          <div className="restaurant-line">
            <span className="restaurant-reviews">Reviews Coming Soon</span>
          </div>
          <div className="restaurant-line">
            <span>{restaurant.category} | $$$ </span>
          </div>
          <p>
            <button
              className={"btn-red " + (restaurant.availableSeats > 0 ? 'btn-active' : 'btn-disabled')}
              onClick={() => onReserveClick(restaurant)}
              disabled={restaurant.availableSeats <= 0}
            >
              {restaurant.availableSeats > 0 ? 'Reserve Now' : 'Not Available'}
            </button>
            </p>
        </div>
    </div>
);

const RestaurantList: React.FC<RestaurantListProps & { onReserveClick: (restaurant: RestaurantType) => void }> = ({ data, fetchMoreData, hasMore, onReserveClick }) => {
  return (
      <div className="restaurant-container">
          <InfiniteScroll
              dataLength={data.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<h4></h4>}
          >
              {data.map(restaurant => (
                  <Restaurant
                      key={restaurant.id}
                      restaurant={restaurant}
                      onReserveClick={onReserveClick}  // Passing onReserveClick to each Restaurant
                  />
              ))}
          </InfiniteScroll>
      </div>
  );
};

export default RestaurantList;
