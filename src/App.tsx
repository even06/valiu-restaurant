import { useState } from 'react';
import { useRestaurants } from './hooks/useRestaurants';
import ReservationForm from './components/ReservationForm';
import RestaurantList from './components/RestaurantList';
import BookingModal from './components/BookingModal';
import { Restaurant } from './types/globalTypes';
import './App.css';
import './Responsive.css';



function App() {
  const { restaurants, hasMore, loadRestaurants, loading, error } = useRestaurants();
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReserveClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmReservation = () => {
    console.log("Reservation confirmed for", selectedRestaurant);
    setIsModalOpen(false);
    // Additional reservation confirmation logic here
  };

  return (
    <div className="wrapper">
      <div id="App">
        <div className="content">
          <header>
            Valiu Restaurants
          </header>
          
          <ReservationForm onSearch={loadRestaurants} />
        </div>
      </div>
      <header className="App-header">
        <RestaurantList
          data={restaurants}
          fetchMoreData={() => loadRestaurants('', 0, restaurants.length / 10 + 1)}
          hasMore={hasMore}
          onReserveClick={handleReserveClick}
        />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </header>
      {selectedRestaurant && isModalOpen && (  // Ensure selectedRestaurant is not null before rendering
        <BookingModal
          restaurant={selectedRestaurant}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onConfirmReservation={handleConfirmReservation}
        />
      )}
    </div>
  );
}

export default App;


