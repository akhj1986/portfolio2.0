import React from "react";
import styles from "./paragraphContent.module.scss";

const ParagraphContent = () => {
  return (
    <div className={styles.paragraph}>
      <h1>About</h1>
      <p>
        Hello, I am Alex Harris-Jedamski! I am a motivated and highly educated
        learner stepping into the world of professional web development. I am
        passionate about programming and creating high-quality code using the
        latest technologies.
      </p>
      <p className={styles.skillsParagraph}>
        I have web development experience utilising HTML5, CSS3, JavaScript ES6,
        SASS, Flexbox, Bootstrap 4, Git and NPM. I am also familiar with the
        React JavaScript framework.
      </p>
      <p>
        I always design using a responsive, mobile-first approach with a focus
        on ease of access. I develop using clean and legible code.
      </p>
    </div>
  );
};

export default ParagraphContent;
