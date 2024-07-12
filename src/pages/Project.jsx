import PropTypes from "prop-types";
import styles from "./Project.module.css";
// import metMuseum from "../assets/images/MetMuseum.jpg";
import movieMania from "../assets/images/MovieMania.jpg";
import hackathonProject from "../assets/images/HackathonProject.jpg";
import hrSystem from "../assets/images/HRSystem.jpg";

const projectItems = [
  {
    image: "https://imgur.com/DiKJbWC",
    title: "Met Museum Artwork",
    categories: "UI, Art direction",
  },
  {
    image: { movieMania },
    title: "Movie Mania",
    categories: "UI, Art direction",
  },
  {
    image: { hackathonProject },
    title: "Restaurant Food Inventory Application",
    categories: "UI, Art direction",
  },
  {
    image: { hrSystem },
    title: "Hotel Reservation System",
    categories: "UI, Art direction",
  },
];

const ProjectItem = ({ image, title, categories }) => (
  <div className={styles.projectItem}>
    <img src={image} alt={title} className={styles.projectImage} />
    <h3 className={styles.projectTitle}>{title}</h3>
    <p className={styles.projectCategories}>{categories}</p>
  </div>
);

ProjectItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
};

const Project = () => {
  return (
    <section id="projects" className={styles.project}>
      <h2 className={styles.sectionTitle}>Latest projects</h2>
      <div className={styles.projectGrid}>
        {projectItems.map((item, index) => (
          <ProjectItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Project;
