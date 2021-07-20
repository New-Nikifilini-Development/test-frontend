import React from "react";
import OrdersShowStore from "./store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import styles from "./styles.m.styl";

type ShowParams = {
  id: string;
};

const OrdersShow = observer(
  (): JSX.Element => {
    const [state] = React.useState(new OrdersShowStore());

    return (
      <div className={styles.screenWrapper}>
        <div className={styles.screen}>
          <div className={styles.items}></div>
        </div>
      </div>
    );
  }
);

export default OrdersShow;
