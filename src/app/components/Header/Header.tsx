'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import Marquee from 'react-fast-marquee';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.headContainer}>
      <div className={styles.socialLinks}>
        <a href="https://www.facebook.com">
          <Image src="./fbIcon.svg" alt="Facebook logo" width={15} height={15} />
        </a>
        <a href="https://www.instagram.com">
          <Image src="./instaIcon.svg" alt="Instagram logo" width={15} height={15} />
        </a>
        <a href="https://www.twitter.com">
          <Image src="./xIcon.svg" alt="Twitter logo" width={15} height={15} />
        </a>
        <a href="https://www.linkedin.com">
          <Image src="./linkedinIcon.svg" alt="LinkedIn logo" width={15} height={15} />
        </a>
      </div>
      <div className={styles.headingLogo}>
        <div className={styles.logo}>
          <Image src="./headlogo.svg" alt="Company logo" width={400} height={50} />
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${styles.menuLinks} ${menuOpen ? styles.active : ''}`}>
          <ul className={styles.menu}>
            <li>About</li>
            <li>Offers</li>
            <li>Corporate</li>
            <li>Personal</li>
            <li>Locations</li>
            <li>Contact Us</li>
            <div className={styles.menuButtons}>
              <li id={styles.bellIcon}>
                <Image src="./bell-icon.svg" alt="bell icon" width={24} height={24} />
              </li>
              <li id={styles.menuUserbtn}>
                {/* <Image src="./menu-userbtncircle.svg" alt="User" width={24} height={24} /> */}
                <div className={styles.name}>Ariane</div>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="tandc">
        <small>
          <Marquee speed={100}>
            Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand Sales Counters | All Rates inclusive of VAT. T&C’s apply | Follow us on Social Media for New Offers
          </Marquee>
        </small>
      </div>
    </header>
  );
};

export default Header;
