import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";
import visualDesigner from "../assets/images/mainPage.jpg";

const MainPage = () => {
  return (
    <>
      {/* <Header /> */}
      <section className={styles.mainPage}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.subtitle}>Designing | Developing</span>
            Web Developer
          </h1>
          <p className={styles.description}>
            Hello, my name is Qian Tang. I am a web developer.
          </p>
          <Link to="/contact">
            <button className={styles.contactButton}>Contact</button>
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={visualDesigner}
            alt="Visual Designer"
            className={styles.mainPageImage}
          />
        </div>
      </section>
    </>
  );
};

export default MainPage;
