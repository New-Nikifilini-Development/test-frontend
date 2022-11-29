import React, { useEffect } from "react";
import styles from "./styles.m.styl";
import { map } from "lodash";
import { observer } from "mobx-react-lite";
import OrdersListState from "./store";
import { OrdersListItem } from "./types";

import Button from "../../../components/Button";
import AngleLeftIcon from "../../../assets/icons/angle-left-solid.svg";
import AngleRightIcon from "~/assets/icons/angle-right-solid.svg";
import ListItem from "./components/ListItem";
import { useQuery } from "urql";
import { GET_ORDERS_QUERY } from "./queries";

const OrdersList = observer(
  (): JSX.Element => {
    const [state] = React.useState(new OrdersListState());
    const [result] = useQuery({ query: GET_ORDERS_QUERY})
    useEffect(() => {
      if (state.initialized) return;
      state.initialize();
    });
    useEffect(() => {
      const allOrders = result.data?.getAllOrders?.orders;
      if (allOrders) {
        state.setOrders(allOrders)
      }
    }, [result.data?.getAllOrders?.orders, state])

    return (
      <div className={styles.screen}>
        {state.loading && <span>Loading...</span>}
        <div className={styles.orders}>
          {map(state.orders, (order: OrdersListItem, index: number) => (
            <ListItem order={order} key={index} />
          ))}
        </div>
        <div className={styles.pagination}>
          <Button
            small
            text="PREV"
            icon={AngleLeftIcon}
            resting
            disabled={!state.canPrev}
            onClick={() => state.prevPage()}
          />
          <div className={styles.page}>
            {state.page}
          </div>
          <Button
            small
            text="NEXT"
            rightIcon={AngleRightIcon}
            resting
            disabled={!state.canNext}
            onClick={() => state.nextPage()}
          />
        </div>
      </div>
    );
  }
);

export default OrdersList;
