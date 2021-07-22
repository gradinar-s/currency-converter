import React from "react";
import { useSelector } from "react-redux";

import Title from "../Title/Title";
import Button from "../Button/Button";
import Select from "../Select/Select";
import Input from "../Input/Input";
import styles from "./WorkingSpace.module.sass";

const WorkingSpace = () => {
  const payMethods = useSelector((state) => state.currencyExchange.payMethods);

  const sell = payMethods.invoice;
  const buy = payMethods.withdraw;

  return (
    <section className={styles.workingSpace}>
      <div className={styles.workingSpace__wrapper}>
        <div className={styles.workingSpace__sell}>
          <Title>Sell</Title>
          <Select
            payMethods={sell}
            category="invoice"
            className={styles.workingSpace__select}
          />
          <Input
            type="number"
            name="invoice"
            className={styles.workingSpace__input}
          />
        </div>
        <div className={styles.workingSpace__buy}>
          <Title>Buy</Title>
          <Select
            payMethods={buy}
            category="withdraw"
            className={styles.workingSpace__select}
          />
          <Input
            type="number"
            name="withdraw"
            className={styles.workingSpace__input}
          />
        </div>
      </div>
      <div className={styles.workingSpace__button}>
        <Button>Exchange</Button>
      </div>
    </section>
  );
};

export default WorkingSpace;
