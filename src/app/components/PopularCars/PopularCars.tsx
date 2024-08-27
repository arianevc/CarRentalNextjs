import React from 'react';
import Image from 'next/image';
import styles from './PopularCars.module.css'; // Import the CSS module

const PopularCars: React.FC = () => {
  return (
    <div>
      <p className={styles.midHeading}>Most popular cars</p>
      <section className={styles.midContent}>
        <div className={styles.carsDesc}>
          <div className={styles.blueCar}>
            <Image src="./blueCar.svg" alt="blue car" width={368} height={288} />
            <div className={styles.blueDesc}>
              <p className={styles.eclipse}>Mitsubishi Eclipse</p>
              <p className={styles.blueDescription}>
                Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology, and driving confidence.
              </p>
              <Image src="./blueCarFeats.svg" alt="blue car features" width={350} height={100} />
              <div className={styles.bluePrice}>
                <p>AED 2700/- Monthly</p>
                <button className={styles.booknow}>Book Now</button>
              </div>
            </div>
          </div>
          <div className={styles.redCar}>
            <Image src="./redCar.svg" alt="red car" width={368} height={288} />
            <div className={styles.redDesc}>
              <p className={styles.jac}>Jac J7</p>
              <p className={styles.redDescription}>
                S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.
              </p>
              <Image src="./blueCarFeats.svg" alt="red car features" width={350} height={100} />
              <div className={styles.redPrice}>
                <p>AED 2700/- Monthly</p>
                <button className={styles.booknow}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularCars;
