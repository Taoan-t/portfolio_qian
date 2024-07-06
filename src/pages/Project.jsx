import PropTypes from "prop-types";
import styles from "./Project.module.css";

const projectItems = [
  {
    image: "./public/MetMuseum.png",
    title: "Met Museum Artwork",
    categories: "UI, Art direction",
  },
  {
    image: "./public/MovieMania.png",
    title: "Movie Mania",
    categories: "UI, Art direction",
  },
  {
    image: "./public/HackathonProject.png",
    title: "Restaurant Food Inventory Application",
    categories: "UI, Art direction",
  },
  {
    image: "./public/HRSystem.png",
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
