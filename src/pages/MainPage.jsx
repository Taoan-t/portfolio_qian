import { Link } from "react-scroll";
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
            Hello, ny name is Qian Tang. I am a web developer.
          </p>
          {/* <button className="contactButton">Contact</button> */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={styles.contactButton}
          >
            Contact
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
