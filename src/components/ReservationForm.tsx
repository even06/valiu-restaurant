import React, { useState } from 'react';
import { ReservationFormProps } from '../types/globalTypes';
import { useDispatch } from 'react-redux';
import { setDate, setGuests } from '../features/reservationSlice';

const ReservationForm: React.FC<ReservationFormProps> = ({ onSearch }) => {
const dispatch = useDispatch();
    const [date, setDateState] = useState<string>('');
    const [partySize, setPartySize] = useState<number>(1);  // Setting default party size to 1

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setDate(date));
        dispatch(setGuests(partySize));
        onSearch(date, partySize, 1);
    };

    return (
        <div className="reservation-content">
            <header>
                <div className="reservation-header-content">
                    <h1>Find a table for any occasion</h1>
                </div>
                <div className="reservation-form">
                    <form className="reservation-form-content" onSubmit={handleSubmit}>
                        <div className="reservation-form-inputs">
                            <div className="reservation-form-date">
                                <div className="reservation-form-date-input">
                                    <input type="date" value={date} onChange={e => setDateState(e.target.value)} required />
                                </div>
                                <div className="reservation-form-guests-input">
                                    <select name="partySize" value={partySize.toString()} onChange={e => setPartySize(parseInt(e.target.value, 10))}>
                                        <option value="1">1 Guest</option>
                                        <option value="2">2 Guests</option>
                                        <option value="3">3 Guests</option>
                                        <option value="4">4 Guests</option>
                                        <option value="5">5 Guests</option>
                                        <option value="6">6 Guests</option>
                                        <option value="7">7 Guests</option>
                                        <option value="8">8 Guests</option>
                                        <option value="9">9 Guests</option>
                                    </select>
                                </div>
                            </div>
                            <div className="reservation-form-submit">
                                <div className="reservation-form-submit-content">
                                    <button type="submit">Let's Go</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </header>
        </div>
    );
};

export default ReservationForm;