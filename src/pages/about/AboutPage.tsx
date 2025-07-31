import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div className={styles.containerAbout}>
      <Link to="/">
        <h2 className="about">Home</h2>
      </Link>
      <h1 className={styles.title}>Star Wars Сharacters</h1>
      <div className={styles.cardAbout}>
        <h2 className={styles.titleAbout}>I&apos;m Victor</h2>
        <img src="/profile.jpg" alt="photo" className={styles.imageAbout} />
        <p className={styles.descriptionAbout}>
          I have always been interested in getting into web development as I am
          inspired by its challenges. I am sure that with the right strategy I
          can succeed in this field.
        </p>
        <a
          className={styles.link}
          href="https://github.com/GrigorevVic"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub: GrigorevVic
        </a>
      </div>
      <a
        className={styles.link}
        href="https://rs.school/courses/reactjs"
        target="_blank"
        rel="noopener noreferrer"
      >
        RS School
      </a>
    </div>
  );
};
