import Image from 'next/image';
import styles from './Footer.module.css'; // Assuming you're using CSS Modules

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerEnd}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <Image src="./carRentalLogo.svg" alt="Logo" width={150} height={50} />
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerColumn}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Al Habtoor Companies</a></li>
              <li className={styles.footerSubheading}>
                <ul>
                  <li><a href="#">Hospitality</a></li>
                  <li><a href="#">Real Estate</a></li>
                  <li><a href="#">Education</a></li>
                  <li><a href="#">Publishing</a></li>
                  <li><a href="#">Automotive</a></li>
                  <li><a href="#">Vehicle Leasing</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <ul>
              <li><a href="#">Offers</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Service Request</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <ul>
              <li><a href="#">Career</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerSocial}>
          <p>FOLLOW US ON</p>
          <div className={styles.socialIcons}>
            <a href="#"><Image src="./facebookIcon.svg" alt="Facebook" width={24} height={24} /></a>
            <a href="#"><Image src="./xIconWhite.svg" alt="Twitter" width={24} height={24} /></a>
            <a href="#"><Image src="./instaIconWhite.svg" alt="Instagram" width={24} height={24} /></a>
            <a href="#"><Image src="./linkediniconWhite.svg" alt="LinkedIn" width={24} height={24} /></a>
            <a href="#"><Image src="./ytubeIconWhite.svg" alt="YouTube" width={24} height={24} /></a>
          </div>
          <div className={styles.secureSign}>
            <Image src="./docsign.svg" alt="DocuSign" width={150} height={50} />
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2018 Car rental LLC - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
