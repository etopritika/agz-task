import { useState, useEffect } from "react";
import Button from "../Buttons/Button";
import styles from "./Title.module.scss";
import src from "../../images/title.avif";
import lowQuality from "../../images/low-quality-title.avif";

function Title() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setLoaded(true);
    };
  }, []);

  return (
    <section
      className={styles.wrapper}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
          loaded ? src : lowQuality
        })`,
      }}
    >
      <div className={`container ${styles.title_container}`}>
        <h1 className={styles.title}>
          Test assignment for front-end developer
        </h1>
        <p className={styles.text}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button text={"Sign up"} type={"submit"} location={"#signup"} />
      </div>
    </section>
  );
}

export default Title;
