import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.css';
import { text } from 'stream/consumers';
const Banner: React.FC = () => {
  return (
    <section className={styles.banner}>
      {/* Uncomment and use the Image component if you have the image available */}
      {/* <Image src="./carsPhoto.svg" alt="instaicon" width={15} height={15} />  */}
      
      <div className={styles.bannerText}>
        <p className={styles.bannerDesc}>Receive guaranteed <button value="#" className={styles.giftVoucher}>Gift Voucher</button>on a monthly hire or lease</p>
        
      </div>
    </section>
  );
};

export default Banner;
