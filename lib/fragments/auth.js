"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFragment = exports.wishlistFragment = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const checkout_1 = require("./checkout");
exports.wishlistFragment = graphql_tag_1.default `
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
exports.userFragment = graphql_tag_1.default `
  ${checkout_1.checkoutAddressFragment}
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
//# sourceMappingURL=auth.js.map