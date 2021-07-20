import { gql } from "@apollo/client";

export const PRODUCT_STATUSES_QUERY = gql`
  query ProductStatuses {
    productStatuses {
      name
      code
    }
  }
`;

export const ORDER_STATUSES_QUERY = gql`
  query OrderStatuses {
    orderStatuses {
      name
      code
    }
  }
`;

export const DELIVERY_TYPES_QUERY = gql`
  query DeliveryTypes {
    deliveryTypes {
      name
      code
    }
  }
`;
