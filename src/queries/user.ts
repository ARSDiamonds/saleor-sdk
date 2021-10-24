import gql from "graphql-tag";

import { userFragment } from "../fragments/auth";

export const getUserDetailsQuery = gql`
  ${userFragment}
  query UserDetails {
    me {
      ...User
      wishlist {
        id
        createdAt
        items(first: 100) {
          totalCount
        }
      }
    }
  }
`;
