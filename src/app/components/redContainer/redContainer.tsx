import Image from 'next/image';
import styles from './redContainer.module.css'; 

const RedContainer: React.FC = () => {
  return (
    <section className={styles.redContainer}>
      <div className={styles.redTopMenu}>
        <div className={styles.sameAsPickup}>
          <p><a href="#">Same as Pick-Up</a></p>
          
        </div>
        <div className={styles.dropoff}>
          <p><a href="#">Different Drop-Off</a></p>
        </div>
        <div className={styles.selectVehType}>
          <select name="vehtype" className={styles.select}>
            <option className={styles.option}>Select vehicle type</option>
            <option className={styles.option} value="SUV">SUV</option>
            <option className={styles.option} value="Sedan">Sedan</option>
            <option className={styles.option} value="Hatchback">Hatchback</option>
          </select>
          <div className={styles.dropDownIcon}>
            <Image src="./drop-down-icon.svg" alt="drop-down-icon" width={8} height={8} />
          </div>
        </div>
      </div>

      <div className={styles.booking}>
        <div className={styles.selectLocn}>
          <select name="location" id="location">
            <option className={styles.default}>Select Location</option>
            <option className={styles.option} value="Al Quoz">Al Quoz</option>
            <option className={styles.option} value="Al Dale">Al Dale</option>
            <option className={styles.option} value="Shaneem">Shaneem</option>
          </select>
          <div className={styles.dropDownIcon}>
            <Image src="./red-drop-down.svg" alt="drop-down-icon" width={8} height={8} />
          </div>
        </div>

        <div className={styles.fromCalenTime}>
          <input type="datetime-local" defaultValue="2024-08-20T14:30" />
        </div>

        <div className={styles.uptoCalenTime}>
          <input type="datetime-local" defaultValue="2024-08-21T14:30" />
        </div>

        <div className={styles.searchIcon}>
          <a href="#"><Image src="./search-icon.svg" alt="search-icon" width={24} height={24} /></a>
        </div>

        <div className={styles.sep}></div>

        <div className={styles.quickBook}>
          <p><a href="#">Quick Book</a></p>
        </div>
      </div>

      <div className={styles.redBottom}>
        <p>Download our App for easy accessibility anytime, anywhere!</p>
        <div className={styles.storeBtn}>
          <a href="#"><Image src="./appstore-button.svg" alt="appstore-button" width={120} height={40} /></a>
          <a href="#"><Image src="./playstore-button.svg" alt="playstore-button" width={120} height={40} /></a>
        </div>
      </div>
    </section>
  );
};

export default RedContainer;
