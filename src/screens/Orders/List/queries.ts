import { gql } from "@apollo/client";

export const GET_ORDERS_QUERY = gql`
  query Orders($page: Int) {
    getOrders(page: $page) {
      orders {
        id
        number
        site
        createdAt
        delivery {
          code
        }
        status
      }
      pagination {
        limit
        totalCount
        currentPage
        totalPageCount
      }
    }
  }
`;
