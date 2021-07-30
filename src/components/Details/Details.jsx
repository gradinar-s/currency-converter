import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Title from "../Title/Title";
import Button from "../Button/Button";
import styles from "./Details.module.sass";
import stylesWorkingSpace from "../WorkingSpace/WorkingSpace.module.sass";

const Details = () => {
  const amount = useSelector((state) => state.currencyExchange.amount);
  const valueEntryField = useSelector((state) => state.currencyExchange.valueEntryField);
  const invoicePayMethod = useSelector((state) => state.currencyExchange.invoice.selectPayMethod);
  const withdrawPayMethod = useSelector((state) => state.currencyExchange.withdraw.selectPayMethod);

  return (
    <section className={`${stylesWorkingSpace.workingSpace} ${styles.details}`}>
      <Title>Details</Title>
      <div className={styles.details__column}>
        <div className={styles.details__method}>Sell</div>
        <div className={styles.details__result}>{`${valueEntryField} ${invoicePayMethod}`}</div>
      </div>
      <div className={styles.details__column}>
        <div className={styles.details__method}>Buy</div>
        <div className={styles.details__result}>{`${amount} ${withdrawPayMethod}`}</div>
      </div>
      <div className={styles.details__buttonsBlock}>
        <NavLink to="/">
          <Button className={styles.details__button} tranparent>
            Cancel
          </Button>
        </NavLink>
        <NavLink to="/success">
          <Button className={styles.details__button}>Confirm</Button>
        </NavLink>
      </div>
    </section>
  );
};

export default Details;
