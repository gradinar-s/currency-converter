import React from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";
import styles from "./WorkingSpace.module.sass";

const WorkingSpace = () => {
  return (
    <section className={styles.workingSpace}>
      <div className={styles.workingSpace__sell}>
        <Title>Sell</Title>
      </div>
      <div className={styles.workingSpace__buy}>
        <Title>Buy</Title>
      </div>
      <Button>Exchange</Button>
    </section>
  );
};

export default WorkingSpace;
