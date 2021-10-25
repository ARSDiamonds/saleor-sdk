import gql from "graphql-tag";

import { userFragment, wishlistFragment } from "../fragments/auth";

export const getUserDetailsQuery = gql`
  ${userFragment}
  ${wishlistFragment}
  query UserDetails {
    me {
      ...User
      wishlist {
        ...Wishlist
      }
    }
  }
`;
