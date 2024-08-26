import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import RedContainer from "./components/redContainer/redContainer";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
    <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'/>

      <Header/>
      <RedContainer/>
      <Footer/>
    </main>
  );
}
