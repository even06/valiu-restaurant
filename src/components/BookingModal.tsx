import { useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import { RootState } from '../store'; 
import { Restaurant, ErrorResponse } from '../types/globalTypes'; 
import { setName, setEmail } from '../features/reservationSlice';
import { bookTable } from '../services/restaurantService';
import { AxiosError } from 'axios';

interface BookingModalProps {
    restaurant: Restaurant;
    isOpen: boolean;
    onClose: () => void;
    onConfirmReservation: () => void;
}

const BookingModal = ({ restaurant, isOpen, onClose, onConfirmReservation }: BookingModalProps) => {
    const { date, guests, name, email } = useSelector((state: RootState) => state.reservation);
    const [bookingStatus, setBookingStatus] = useState({ success: false, message: '' });    
    const dispatch = useDispatch();
    dispatch(setEmail(''));
    dispatch(setName(''));

    const handleConfirmClick = async () => {
      try {
          const bookingConfirmation = await bookTable(restaurant.id, date, guests, name, email);
          console.log("Booking successful:", bookingConfirmation);
          setBookingStatus({ success: true, message: bookingConfirmation.message });
          //onConfirmReservation();
      } catch (error) {
        if (error instanceof Error) {
          const axiosError = error as AxiosError;
          if (axiosError.response) {
              console.error("Error booking table:", axiosError.response.data);
              
              // Check that data is an object and has a 'message' property
              if (typeof axiosError.response.data === 'object' && axiosError.response.data !== null && 'message' in axiosError.response.data) {
                  const errorData = axiosError.response.data as ErrorResponse;
                  setBookingStatus({ success: false, message: errorData.message });
              } else {
                  // If no message property or not the expected object structure
                  setBookingStatus({ success: false, message: "An error occurred, but no message was provided" });
              }
          } else {
              console.error("Error booking table:", error.message);
              setBookingStatus({ success: false, message: "An unknown error occurred" });
          }
        } else {
            console.error("Unknown Error:", error);
            setBookingStatus({ success: false, message: "An error occurred" });
        }
      }
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-bg">
            </div>

            {bookingStatus.message && <div className="modal-content modal-success">
                <h2>Your reservation at {restaurant.name} is<span className={bookingStatus.success ? "success" : "error"}>{bookingStatus.success ? "Confirmed" : "Not confirmed"}</span></h2>
                <div className="modal-img">
                  <img src={restaurant.img_url} alt={restaurant.name}></img>
                </div>
                <div className="modal-form">
                  <p className={bookingStatus.success ? "success-message" : "error-message"}>{bookingStatus.message}</p>
                  
                  <button className="btn-red" onClick={onClose}>Close</button>
                </div>
              </div> }
            {!bookingStatus.message && <div className="modal-content">
                <h2>confirm your reservation at <span>{restaurant.name}</span></h2>
                <div className="modal-img">
                  <img src={restaurant.img_url} alt={restaurant.name}></img>
                </div>
                <div className="modal-form">
                  <p>To confirm your reservation for {guests} guests on {date} please fill your name and email address.</p>
                  <div>
                      <input
                          id="name"
                          type="text"
                          value={name}
                          placeholder="Name on the reservation"
                          onChange={(e) => dispatch(setName(e.target.value))}
                          required
                      />
                  </div>
                  
                  <div>
                      <input
                          id="email"
                          type="email"
                          value={email}
                          placeholder="Email"
                          onChange={(e) => dispatch(setEmail(e.target.value))}
                          required
                      />
                  </div>

                  <button className="btn-red" onClick={handleConfirmClick}>Reserve Now!</button>
                  <button className="btn-red btn-cancel" onClick={onClose}>Cancel</button>
                </div>
            </div>
            }
            
        </div>
    );
};

export default BookingModal;
