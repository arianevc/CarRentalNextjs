'use client';
import React, { useState } from 'react';
import styles from './RespBooking.module.css';

const RespBooking: React.FC = () => {
  const [activeButton, setActiveButton] = useState<'bookacar' | 'quickbook' | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  const handleButtonClick = (button: 'bookacar' | 'quickbook') => {
    setActiveButton(button);
    if (button === 'bookacar') {
      setShowBooking(true); // Show the booking div when "Book a Car" is clicked
    } else {
      setShowBooking(false); // Hide the booking div when "Quick Book" is clicked
    }
  };

  return (
    <div className={styles.buttons}>
      <button
        id="bookacar"
        value="#"
        className={`${styles.bookacar} ${activeButton === 'bookacar' ? styles.active : styles.inactive}`}
        onClick={() => handleButtonClick('bookacar')}
      >
        Book a Car
      </button>
      <button
        id="quickbook"
        value="#"
        className={`${styles.bookacar} ${activeButton === 'quickbook' ? styles.active : styles.inactive}`}
        onClick={() => handleButtonClick('quickbook')}
      >
        Quick Book
      </button>
      {showBooking && (
        <div className={styles.booking}>
          {/* Booking options */}
        </div>
      )}
    </div>
  );
};

export default RespBooking;
