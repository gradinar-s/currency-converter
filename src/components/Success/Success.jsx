import React from "react";
import Button from "../Button/Button";
import SuccesIcon from "../../assets/images/Success.svg";
import styles from "./Success.module.sass";
import stylesWorkingSpace from "../WorkingSpace/WorkingSpace.module.sass";
import { NavLink } from "react-router-dom";

const Success = () => {
  return (
    <section className={`${stylesWorkingSpace.workingSpace} ${styles.success}`}>
      <img src={SuccesIcon} alt="" />
      <h2 className={styles.success__title}>Success!</h2>
      <p className={styles.success__text}>
        Your exchange order has been placed successfully and will be processed soon.
      </p>
      <NavLink to="/">
        <Button className={styles.success__button}>Home</Button>
      </NavLink>
    </section>
  );
};

export default Success;
