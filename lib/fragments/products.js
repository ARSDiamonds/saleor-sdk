"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productFragment = exports.productReviewsFragment = exports.reviewFragment = exports.productPricingFragment = exports.productVariantFragment = exports.selectedAttributeFragment = exports.baseProductFragment = exports.priceWithTaxFragment = exports.priceFragment = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const checkout_1 = require("./checkout");
exports.priceFragment = graphql_tag_1.default `
  fragment PriceAmount on Money {
    amount
    currency
  }
`;
exports.priceWithTaxFragment = graphql_tag_1.default `
  ${exports.priceFragment}
  fragment PriceWithTax on TaxedMoney {
    gross {
      ...PriceAmount
    }
    net {
      ...PriceAmount
    }
    tax {
      ...PriceAmount
    }
  }
`;
exports.baseProductFragment = graphql_tag_1.default `
  fragment BaseProduct on Product {
    id
    name
    slug
    seoDescription
    isAvailableForPurchase
    availableForPurchase
    seoTitle
    thumbnail {
      url
      alt
    }
    thumbnail2x: thumbnail(size: 510) {
      url
    }
    media {
      id
      url
      alt
      type
    }
  }
`;
exports.selectedAttributeFragment = graphql_tag_1.default `
  fragment SelectedAttributeFields on SelectedAttribute {
    attribute {
      id
      name
      slug
      inputType
      unit
    }
    values {
      id
      name
      value
      slug
      reference
    }
  }
`;
exports.productVariantFragment = graphql_tag_1.default `
  ${checkout_1.checkoutPriceFragment}
  ${exports.priceWithTaxFragment}
  ${exports.priceFragment}
  fragment ProductVariantFields on ProductVariant {
    id
    sku
    name
    metalWeight
    quantityAvailable(countryCode: $countryCode)
    media {
      id
      url
      alt
      type
    }
    pricing {
      onSale
      priceUndiscounted {
        ...Price
      }
      price {
        ...PriceWithTax
      }
      discount {
        ...Price
      }
      priceForBankTransferUndiscounted {
        ...Price
      }
      priceForBankTransfer {
        ...PriceWithTax
      }
      discountForBankTransfer {
        ...Price
      }
      metalPrice {
        ...PriceAmount
      }
      stonePrice {
        ...PriceAmount
      }
      makingCharge {
        ...PriceAmount
      }
      packagingInsurance {
        ...PriceAmount
      }
    }
    pricingInUsd {
      onSale
      priceUndiscounted {
        ...Price
      }
      price {
        ...PriceWithTax
      }
      discount {
        ...Price
      }
      priceForBankTransferUndiscounted {
        ...Price
      }
      priceForBankTransfer {
        ...PriceWithTax
      }
      discountForBankTransfer {
        ...Price
      }
      metalPrice {
        ...PriceAmount
      }
      stonePrice {
        ...PriceAmount
      }
      makingCharge {
        ...PriceAmount
      }
      packagingInsurance {
        ...PriceAmount
      }
    }
    attributes(variantSelection: $variantSelection) {
      attribute {
        id
        name
        slug
        inputType
        unit
      }
      values {
        id
        name
        value
        slug
      }
    }
  }
`;
exports.productPricingFragment = graphql_tag_1.default `
  ${checkout_1.checkoutPriceFragment}
  fragment ProductPricingField on Product {
    pricing {
      onSale
      discount {
        ...Price
      }
      priceRangeUndiscounted {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
      priceRange {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
    }
    pricingInUsd {
      onSale
      discount {
        ...Price
      }
      priceRangeUndiscounted {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
      priceRange {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
    }
  }
`;
exports.reviewFragment = graphql_tag_1.default `
  fragment ReviewDetails on Review {
    rating
    comment
    created
    isPublished
    user {
      id
      firstName
      lastName
    }
    product {
      id
      name
    }
  }
`;
exports.productReviewsFragment = graphql_tag_1.default `
  fragment ProductReviews on Product {
    productReviews {
      averageRating
      reviewList {
        rating
        comment
        created
        user {
          firstName
          lastName
        }
      }
    }
  }
`;
exports.productFragment = graphql_tag_1.default `
  ${exports.baseProductFragment}
  ${exports.selectedAttributeFragment}
  ${exports.productVariantFragment}
  ${exports.productPricingFragment}
  ${exports.productReviewsFragment}
  fragment ProductDetails on Product {
    ...BaseProduct
    ...ProductPricingField
    description
    category {
      id
      name
      slug
      products(first: 3, channel: $channel) {
        edges {
          node {
            ...BaseProduct
            ...ProductPricingField
            category {
              id
              name
              slug
            }
          }
        }
      }
    }
    attributes {
      ...SelectedAttributeFields
    }
    variants {
      ...ProductVariantFields
    }
    isAvailable
    ...ProductReviews
  }
`;
//# sourceMappingURL=products.js.map