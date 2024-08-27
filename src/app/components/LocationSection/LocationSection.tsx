import React from 'react';
import Image from 'next/image';
import styles from './LocationSection.module.css'; // Import the CSS module

const locations = [
  "Dubai",
  "Abu-Dhabi",
  "Sharjah",
  "Fujairah",
  "Ras Al Khaimah",
];

const LocationSection: React.FC = () => {
  return (
    <section className={styles.location}>
      <p className={styles.locn}>Locations</p>
      <div className={styles.locationCont}>
        {locations.map((place, index) => (
          <div className={styles.places} key={index}>
            <Image src="./red-location-icon.svg" alt="red-location-icon" width={20} height={20} />
            <p className={styles.place}>{place}</p>
            {index < locations.length - 1 && <div className={styles.line}></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationSection;
