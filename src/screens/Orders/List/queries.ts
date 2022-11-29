import { gql } from '@apollo/client';

export const GET_ORDERS_QUERY = gql`
  query {
    getAllOrders  {
      orders {
        id
        number
        createdAt
        status
        delivery {
          code
        }
        items {
          id
          status
          quantity
          offer {
            externalId
            displayName
            article
          }
        }
        site
        orderType
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

// export const GET_ORDERS_QUERY = gql`
//   query Orders($page: Int) {
//     getAllOrders(page: $page) {
//       orders {
//         id
//         number
//         site
//         createdAt
//         delivery {
//           code
//         }
//         status
//       }
//       pagination {
//         limit
//         totalCount
//         currentPage
//         totalPageCount
//       }
//     }
//   }
// `;
