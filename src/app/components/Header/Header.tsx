import Image from 'next/image';
import styles from './Header.module.css'; // Assuming you're using CSS Modules
import Marquee from 'react-fast-marquee';
const Header: React.FC = () => {
  return (
    
    <header 
    className={styles.headContainer}>
        <div className={styles.socialLinks}>
        <a href="https://www.facebook.com">
        <Image src="./fbIcon.svg" alt="logo" width={15} height={15} />
        </a>
        <a href="https://www.instagram.com"><Image id="insta" src="./instaIcon.svg" alt="instaicon" width={15} height={15}/></a>
        <a href="https://www.twitter.com"><Image id="x" src="./xIcon.svg" alt="xicon" width={15} height={15}/></a>
        <a href="https://www.linkedin.com"><Image id="linkedin" src="./linkedinIcon.svg" alt="linkedinicon" width={15} height={15}/></a>
        </div>
      <div className={styles.headingLogo}>
        <div className={styles.logo}>
          <Image src="./headlogo.svg" alt="logo" width={400} height={50} />
        </div>
        <div className={styles.menuLinks}>
          <ul className={styles.menu}>
            <li>About</li>
            <li>Offers</li>
            <li>Corporate</li>
            <li>Personal</li>
            <li>Locations</li>
            <li>Contact Us</li>
            <div className={styles.menuButtons}>
              <li id={styles.bellIcon}>
                <Image src="./bell-icon.svg" alt="bell-icon" width={24} height={24} />
              </li>
              <li id={styles.menuUserbtn}>
                {/* <Image src="./menu-userbtn.svg" alt="menu-userbtn" width={24} height={24} /> */}
                <Image src="./menu-userbtncircle.svg" alt="circle" width={24} height={24} />
                <div className={styles.name}>Ariane</div>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="tandc">
            <small> <Marquee speed={100}>Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand Sales
                Counters | All Rates inclusive of VAT. T&C’s apply | Follow us on Social Media for New
                Offers</Marquee></small>
                </div>
    </header>
  );
};

export default Header;
