import React from 'react';
import Image from 'next/image';
import styles from './RentLeaseSteps.module.css'; // Import the CSS module

const RentLeaseSteps: React.FC = () => {
  return (
    <section className={styles.stepsContainer}>
      <p className={styles.rentHeading}>Rent/Lease In three easy steps</p>
      <section className={styles.steps}>
        <div className={styles.step}>
          <p className={styles.stepNumber}>01</p>
          <div className={styles.stepDesc}>
            <Image src="./location-icon.svg" alt="location-icon" width={50} height={50} />
            <p>Select the location. Browse through our available options and find the perfect car to suit your needs.</p>
          </div>
        </div>
        <div className={styles.step}>
          <p className={styles.stepNumber}>02</p>
          <div className={styles.stepDesc}>
            <Image src="./calendar-icon.svg" alt="calendar-icon" width={50} height={50} />
            <p>Choose your desired Pick-Up date and time.</p>
          </div>
        </div>
        <div className={styles.step}>
          <p className={styles.stepNumber}>03</p>
          <div className={styles.stepDesc}>
            <Image src="./car-icon.svg" alt="car-icon" width={50} height={50} />
            <p>Make payment and book the car. Select an option to either have the car delivered to your location or pick it up directly from us.</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default RentLeaseSteps;
