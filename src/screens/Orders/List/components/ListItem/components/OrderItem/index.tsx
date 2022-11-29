import  React from 'react';
import { observer } from 'mobx-react-lite';
import OrderStatus from '../../../../../../../components/OrderStatus';
import { IOrderItem } from '../../../../types';
import styles from './styles.m.styl'

const OrderItem = observer(({ item }: { item: IOrderItem}) => {
  return (
    <div className={styles.item}>
      <div>
        <div>{item.id}</div>
        <div>{item.offer.article}</div>
        <div>{item.offer.displayName}</div>
        <div>{item.offer.externalId}</div>
        <div>{item.quantity}</div>
      </div>
      <OrderStatus code={item.status} />
    </div>
  )
})

   export default OrderItem