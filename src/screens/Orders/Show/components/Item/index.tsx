import React from "react";
import { observer } from "mobx-react-lite";
import { SingleOrderItem } from "~/screens/Orders/Show/types";
import styles from "./styles.m.styl";

const Item = observer(
  ({ item }: { item: SingleOrderItem }): JSX.Element => {
    return <div className={styles.item}>{item.offer.displayName}</div>;
  }
);

export default Item;
