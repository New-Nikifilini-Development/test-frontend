import React, { useEffect } from "react";
import OrdersShowStore from "./store";
import { observer } from "mobx-react-lite";
import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import styles from "./styles.m.styl";
import { useQuery } from "urql";
import { ORDER_QUERY } from "./queries";
import AngleLeftIcon from "assets/icons/angle-left-solid.svg";
import DeliveryType from "../../../components/DeliveryType";
import OrderStatus from "../../../components/OrderStatus";

type ShowParams = {
  id: string;
};

const OrdersShow = observer(
  (): JSX.Element => {
    const [state] = React.useState(new OrdersShowStore());
    const history = useHistory()
    const { id }: ShowParams = useParams()
    
    const [result] = useQuery({ query: ORDER_QUERY, variables: { number: id }})
    
    useEffect(() => {
      if (state.initialized) return;
      state.initialize();
    });
    
    useEffect(() => {
      const order = result.data?.order
      console.log(order)
      if (order) {
        state.setOrder(order)
      }
    }, [result.data?.order, state])
    console.log(state.order)
    return (
      <div className={styles.screenWrapper}>
        <div className={styles.container}>
          {/* <div className={styles.back} onClick={() => history.push('/orders')}><AngleLeftIcon /></div> */}
          
          <NavLink to='/orders' replace>
            <div className={styles.back}>
                <AngleLeftIcon />
              </div>
          </NavLink>
          <div className={styles.screen}>
            <div>{state.order?.number}</div>
            {state.order?.delivery && <DeliveryType code={state.order?.delivery?.code} />}
            <OrderStatus code={state.order?.status} />
          </div>
        </div>

          <div className={styles.items}>
            {state.order?.items.length > 0 && state.order?.items.map(((item,index) => (
              <div className={styles.item} key={`${item.id}_${index}`}>
                <div className={styles.offer}>
                  {item.offer.displayName}
                </div>
                <OrderStatus code={item.status} />
              </div>
            )))}
          </div>
      </div>
    );
  }
);

export default OrdersShow;
