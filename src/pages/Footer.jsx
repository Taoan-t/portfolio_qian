import styles from "./Footer.module.css";

const socialIcons = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9929c0a56a94fe25859fb5971c1c55487aaffc0d2ddfc6580c8e2e7ef0e57a2c?apiKey=2871edb3597c4b7a901bbf41bec8a8b2&",
    alt: "Social Icon 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe889287e3a5397097e43e13c6d4da59ab3cf6335c13f88859c4cdf3a61572e3?apiKey=2871edb3597c4b7a901bbf41bec8a8b2&",
    alt: "Social Icon 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b4d0a7949828eb923029c3027d7648a2ab0089d9c47d31549aa4ec56638d7e6?apiKey=2871edb3597c4b7a901bbf41bec8a8b2&",
    alt: "Social Icon 3",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d8fcfd2254b785db4bcb65ce44150e76e8d98626400df5dc83254e21f0be58f?apiKey=2871edb3597c4b7a901bbf41bec8a8b2&",
    alt: "Social Icon 4",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/389cca678d3d2627deabc759082779cfffdb365145cb969cd01d0303b10038ab?apiKey=2871edb3597c4b7a901bbf41bec8a8b2&",
    alt: "Social Icon 5",
  },
];

const Footer = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.sectionTitle}>Let&apos;s work together</h2>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <p className={styles.contactDescription}>
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </p>
          <div className={styles.socialIcons}>
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className={styles.socialIcon}
              />
            ))}
          </div>
        </div>
        <form className={styles.contactForm}>
          <label htmlFor="name" className={styles.visuallyHidden}>
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className={styles.formInput}
          />
          <label htmlFor="email" className={styles.visuallyHidden}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={styles.formInput}
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Footer;
