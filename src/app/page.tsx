import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import RedContainer from "./components/redContainer/redContainer";
import Banner from "./components/Banner/Banner";
import PopularCars from "./components/PopularCars/PopularCars";
import SubscribeSection from "./components/SubscribeSection/SubscribeSection";
import RentLeaseSteps from "./components/RentLeaseSteps/RentLeaseSteps";
import LocationSection from "./components/LocationSection/LocationSection";
import FAQSection from "./components/FAQSection/FAQSection"; 
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
    <link href='https://fonts.googleapis.com/css?family=Poppins&display=optional' rel='stylesheet'/>
  
      <Header/>
      <RedContainer/>
      <Banner/>
      <PopularCars/>
      <SubscribeSection/>
      <RentLeaseSteps/>
      <LocationSection/>
      <FAQSection/>
      <Footer/>
    </main>
  );
}
