import gql from "graphql-tag";
import { checkoutPriceFragment } from "./checkout";

export const priceFragment = gql`
  fragment PriceAmount on Money {
    amount
    currency
  }
`;

export const priceWithTaxFragment = gql`
  ${priceFragment}
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

export const baseProductFragment = gql`
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

export const selectedAttributeFragment = gql`
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

export const productVariantFragment = gql`
  ${checkoutPriceFragment}
  ${priceWithTaxFragment}
  ${priceFragment}
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

export const productPricingFragment = gql`
  ${checkoutPriceFragment}
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

export const reviewFragment = gql`
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

export const productReviewsFragment = gql`
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

export const productFragment = gql`
  ${baseProductFragment}
  ${selectedAttributeFragment}
  ${productVariantFragment}
  ${productPricingFragment}
  ${productReviewsFragment}
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
