import gql from "graphql-tag";

import { checkoutAddressFragment } from "./checkout";

export const wishlistFragment = gql`
  fragment Wishlist on Wishlist {
    id
    items(first: 100) {
      edges {
        node {
          id
          product {
            id
          }
        }
      }
    }
  }
`;

export const userFragment = gql`
  ${checkoutAddressFragment}
  fragment User on User {
    id
    email
    firstName
    lastName
    isStaff
    defaultShippingAddress {
      ...Address
    }
    defaultBillingAddress {
      ...Address
    }
    addresses {
      ...Address
    }
  }
`;
