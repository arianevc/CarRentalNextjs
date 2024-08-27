import React from 'react';
import Image from 'next/image';
import styles from './SubscribeSection.module.css'; // Import the CSS module

const SubscribeSection: React.FC = () => {
  return (
    <section className={styles.subContainer}>
      <div className={styles.userInfo}>
        <p className={styles.infotagline}>Subscribe here for exclusive offers and updates!</p>
        <div className={styles.nameEmail}>
          <input type="text" placeholder="Name" name="user-name" id="name" />
          <input type="email" placeholder="Email" name="email" id="email" />
        </div>
        <div className={styles.subDesc}>
          Don&apost miss out! Enter your email and your name, then hit subscribe to unlock a world of special offers and details.
        </div>
        <div className={styles.subBtn}>
          <button>Subscribe</button>
        </div>
      </div>
      <div className={styles.phone}>
        <div className={styles.phoneImg}>
          <Image src="./phone.svg" alt="phone picture" width={231} height={417} />
        </div>
        <div className={styles.phoneDetails}>
          <p className={styles.phoneDetailsdesc}>
            Enter your number and receive a direct link to download the app
          </p>
          <input type="text" placeholder="Enter Phone Number" />
          <a href="#">
            <button>Get the link</button>
          </a>
          <div className={styles.storeBtnPhn}>
            <p>Get it on</p>
            <a href="#">
              <Image src="./appstoreBtnTrans.svg" alt="appstore-button" width={100} height={50} />
            </a>
            <a href="#">
              <Image src="./playstore-button-trans.svg" alt="playstore" width={100} height={50} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
