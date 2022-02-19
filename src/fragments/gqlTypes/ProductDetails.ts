/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductMediaType, AttributeInputTypeEnum, MeasurementUnitsEnum } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: ProductDetails
// ====================================================

export interface ProductDetails_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface ProductDetails_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductDetails_media {
  __typename: "ProductMedia";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The URL of the media.
   */
  url: string;
  alt: string;
  type: ProductMediaType;
}

export interface ProductDetails_pricing_discount_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricing_discount_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_pricing_discount_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_pricing_discount_net;
}

export interface ProductDetails_pricing_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricing_priceRangeUndiscounted_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_pricing_priceRangeUndiscounted_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_pricing_priceRangeUndiscounted_start_net;
}

export interface ProductDetails_pricing_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricing_priceRangeUndiscounted_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_pricing_priceRangeUndiscounted_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_pricing_priceRangeUndiscounted_stop_net;
}

export interface ProductDetails_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductDetails_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductDetails_pricing_priceRangeUndiscounted_stop | null;
}

export interface ProductDetails_pricing_priceRange_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricing_priceRange_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_pricing_priceRange_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_pricing_priceRange_start_net;
}

export interface ProductDetails_pricing_priceRange_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricing_priceRange_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_pricing_priceRange_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_pricing_priceRange_stop_net;
}

export interface ProductDetails_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductDetails_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductDetails_pricing_priceRange_stop | null;
}

export interface ProductDetails_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: ProductDetails_pricing_discount | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: ProductDetails_pricing_priceRangeUndiscounted | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: ProductDetails_pricing_priceRange | null;
}

export interface ProductDetails_pricingInUsd_discount_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricingInUsd_discount_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricingInUsd_discount {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_pricingInUsd_discount_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_pricingInUsd_discount_net;
}

export interface ProductDetails_pricingInUsd_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricingInUsd_priceRangeUndiscounted_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricingInUsd_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_pricingInUsd_priceRangeUndiscounted_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_pricingInUsd_priceRangeUndiscounted_start_net;
}

export interface ProductDetails_pricingInUsd_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricingInUsd_priceRangeUndiscounted_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricingInUsd_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_pricingInUsd_priceRangeUndiscounted_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_pricingInUsd_priceRangeUndiscounted_stop_net;
}

export interface ProductDetails_pricingInUsd_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductDetails_pricingInUsd_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductDetails_pricingInUsd_priceRangeUndiscounted_stop | null;
}

export interface ProductDetails_pricingInUsd_priceRange_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricingInUsd_priceRange_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricingInUsd_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_pricingInUsd_priceRange_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_pricingInUsd_priceRange_start_net;
}

export interface ProductDetails_pricingInUsd_priceRange_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricingInUsd_priceRange_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_pricingInUsd_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_pricingInUsd_priceRange_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_pricingInUsd_priceRange_stop_net;
}

export interface ProductDetails_pricingInUsd_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductDetails_pricingInUsd_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductDetails_pricingInUsd_priceRange_stop | null;
}

export interface ProductDetails_pricingInUsd {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: ProductDetails_pricingInUsd_discount | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: ProductDetails_pricingInUsd_priceRangeUndiscounted | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: ProductDetails_pricingInUsd_priceRange | null;
}

export interface ProductDetails_category_products_edges_node_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface ProductDetails_category_products_edges_node_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductDetails_category_products_edges_node_media {
  __typename: "ProductMedia";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The URL of the media.
   */
  url: string;
  alt: string;
  type: ProductMediaType;
}

export interface ProductDetails_category_products_edges_node_pricing_discount_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_discount_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_category_products_edges_node_pricing_discount_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_category_products_edges_node_pricing_discount_net;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start_net;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop_net;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRange_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRange_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_category_products_edges_node_pricing_priceRange_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_category_products_edges_node_pricing_priceRange_start_net;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRange_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRange_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_category_products_edges_node_pricing_priceRange_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_category_products_edges_node_pricing_priceRange_stop_net;
}

export interface ProductDetails_category_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductDetails_category_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductDetails_category_products_edges_node_pricing_priceRange_stop | null;
}

export interface ProductDetails_category_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: ProductDetails_category_products_edges_node_pricing_discount | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: ProductDetails_category_products_edges_node_pricing_priceRangeUndiscounted | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: ProductDetails_category_products_edges_node_pricing_priceRange | null;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_discount_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_discount_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_discount {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_category_products_edges_node_pricingInUsd_discount_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_category_products_edges_node_pricingInUsd_discount_net;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_priceRangeUndiscounted_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_category_products_edges_node_pricingInUsd_priceRangeUndiscounted_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_category_products_edges_node_pricingInUsd_priceRangeUndiscounted_start_net;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_priceRangeUndiscounted_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_category_products_edges_node_pricingInUsd_priceRangeUndiscounted_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_category_products_edges_node_pricingInUsd_priceRangeUndiscounted_stop_net;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductDetails_category_products_edges_node_pricingInUsd_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductDetails_category_products_edges_node_pricingInUsd_priceRangeUndiscounted_stop | null;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_priceRange_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_priceRange_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_category_products_edges_node_pricingInUsd_priceRange_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_category_products_edges_node_pricingInUsd_priceRange_start_net;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_priceRange_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_priceRange_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_category_products_edges_node_pricingInUsd_priceRange_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_category_products_edges_node_pricingInUsd_priceRange_stop_net;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: ProductDetails_category_products_edges_node_pricingInUsd_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: ProductDetails_category_products_edges_node_pricingInUsd_priceRange_stop | null;
}

export interface ProductDetails_category_products_edges_node_pricingInUsd {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: ProductDetails_category_products_edges_node_pricingInUsd_discount | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: ProductDetails_category_products_edges_node_pricingInUsd_priceRangeUndiscounted | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: ProductDetails_category_products_edges_node_pricingInUsd_priceRange | null;
}

export interface ProductDetails_category_products_edges_node_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
}

export interface ProductDetails_category_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  /**
   * Whether the product is available for purchase.
   */
  isAvailableForPurchase: boolean | null;
  /**
   * Date when product is available for purchase. 
   */
  availableForPurchase: any | null;
  seoTitle: string | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: ProductDetails_category_products_edges_node_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: ProductDetails_category_products_edges_node_thumbnail2x | null;
  /**
   * List of media for the product.
   */
  media: ProductDetails_category_products_edges_node_media[] | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: ProductDetails_category_products_edges_node_pricing | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricingInUsd: ProductDetails_category_products_edges_node_pricingInUsd | null;
  category: ProductDetails_category_products_edges_node_category | null;
}

export interface ProductDetails_category_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ProductDetails_category_products_edges_node;
}

export interface ProductDetails_category_products {
  __typename: "ProductCountableConnection";
  edges: ProductDetails_category_products_edges[];
}

export interface ProductDetails_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  /**
   * List of products in the category.
   */
  products: ProductDetails_category_products | null;
}

export interface ProductDetails_attributes_attribute {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of an attribute name.
   */
  slug: string | null;
  /**
   * The input type to use for entering attribute values in the dashboard.
   */
  inputType: AttributeInputTypeEnum | null;
  /**
   * The unit of attribute values.
   */
  unit: MeasurementUnitsEnum | null;
}

export interface ProductDetails_attributes_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Represents the value of the attribute value.
   */
  value: string | null;
  /**
   * Internal representation of a value (unique per attribute).
   */
  slug: string | null;
  /**
   * The ID of the attribute reference.
   */
  reference: string | null;
}

export interface ProductDetails_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: ProductDetails_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (ProductDetails_attributes_values | null)[];
}

export interface ProductDetails_variants_media {
  __typename: "ProductMedia";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The URL of the media.
   */
  url: string;
  alt: string;
  type: ProductMediaType;
}

export interface ProductDetails_variants_pricing_priceUndiscounted_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_priceUndiscounted_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_priceUndiscounted {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_variants_pricing_priceUndiscounted_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_variants_pricing_priceUndiscounted_net;
}

export interface ProductDetails_variants_pricing_price_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_price_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_price_tax {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_variants_pricing_price_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_variants_pricing_price_net;
  /**
   * Amount of taxes.
   */
  tax: ProductDetails_variants_pricing_price_tax;
}

export interface ProductDetails_variants_pricing_discount_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_discount_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_variants_pricing_discount_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_variants_pricing_discount_net;
}

export interface ProductDetails_variants_pricing_priceForBankTransferUndiscounted_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_priceForBankTransferUndiscounted_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_priceForBankTransferUndiscounted {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_variants_pricing_priceForBankTransferUndiscounted_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_variants_pricing_priceForBankTransferUndiscounted_net;
}

export interface ProductDetails_variants_pricing_priceForBankTransfer_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_priceForBankTransfer_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_priceForBankTransfer_tax {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_priceForBankTransfer {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_variants_pricing_priceForBankTransfer_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_variants_pricing_priceForBankTransfer_net;
  /**
   * Amount of taxes.
   */
  tax: ProductDetails_variants_pricing_priceForBankTransfer_tax;
}

export interface ProductDetails_variants_pricing_discountForBankTransfer_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_discountForBankTransfer_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_discountForBankTransfer {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_variants_pricing_discountForBankTransfer_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_variants_pricing_discountForBankTransfer_net;
}

export interface ProductDetails_variants_pricing_metalPrice {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_stonePrice {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_makingCharge {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing_packagingInsurance {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricing {
  __typename: "VariantPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The price without any discount.
   */
  priceUndiscounted: ProductDetails_variants_pricing_priceUndiscounted | null;
  /**
   * The price, with any discount subtracted.
   */
  price: ProductDetails_variants_pricing_price | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: ProductDetails_variants_pricing_discount | null;
  /**
   * The price for bank transfer without any discount.
   */
  priceForBankTransferUndiscounted: ProductDetails_variants_pricing_priceForBankTransferUndiscounted | null;
  /**
   * The price for bank transfer, with any discount subtracted.
   */
  priceForBankTransfer: ProductDetails_variants_pricing_priceForBankTransfer | null;
  /**
   * The discount amount for bank transfer if in sale (null otherwise).
   */
  discountForBankTransfer: ProductDetails_variants_pricing_discountForBankTransfer | null;
  /**
   * Metal weight calculated as per variant size
   */
  metalWeight: any;
  /**
   * The price of the metal used.
   */
  metalPrice: ProductDetails_variants_pricing_metalPrice | null;
  /**
   * The price of the stones used.
   */
  stonePrice: ProductDetails_variants_pricing_stonePrice | null;
  /**
   * Making charge for the jewellery.
   */
  makingCharge: ProductDetails_variants_pricing_makingCharge | null;
  /**
   * Packaging and insurance charge for the jewellery.
   */
  packagingInsurance: ProductDetails_variants_pricing_packagingInsurance | null;
}

export interface ProductDetails_variants_pricingInUsd_priceUndiscounted_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_priceUndiscounted_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_priceUndiscounted {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_variants_pricingInUsd_priceUndiscounted_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_variants_pricingInUsd_priceUndiscounted_net;
}

export interface ProductDetails_variants_pricingInUsd_price_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_price_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_price_tax {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_variants_pricingInUsd_price_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_variants_pricingInUsd_price_net;
  /**
   * Amount of taxes.
   */
  tax: ProductDetails_variants_pricingInUsd_price_tax;
}

export interface ProductDetails_variants_pricingInUsd_discount_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_discount_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_discount {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_variants_pricingInUsd_discount_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_variants_pricingInUsd_discount_net;
}

export interface ProductDetails_variants_pricingInUsd_priceForBankTransferUndiscounted_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_priceForBankTransferUndiscounted_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_priceForBankTransferUndiscounted {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_variants_pricingInUsd_priceForBankTransferUndiscounted_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_variants_pricingInUsd_priceForBankTransferUndiscounted_net;
}

export interface ProductDetails_variants_pricingInUsd_priceForBankTransfer_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_priceForBankTransfer_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_priceForBankTransfer_tax {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_priceForBankTransfer {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_variants_pricingInUsd_priceForBankTransfer_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_variants_pricingInUsd_priceForBankTransfer_net;
  /**
   * Amount of taxes.
   */
  tax: ProductDetails_variants_pricingInUsd_priceForBankTransfer_tax;
}

export interface ProductDetails_variants_pricingInUsd_discountForBankTransfer_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_discountForBankTransfer_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_discountForBankTransfer {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductDetails_variants_pricingInUsd_discountForBankTransfer_gross;
  /**
   * Amount of money without taxes.
   */
  net: ProductDetails_variants_pricingInUsd_discountForBankTransfer_net;
}

export interface ProductDetails_variants_pricingInUsd_metalPrice {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_stonePrice {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_makingCharge {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd_packagingInsurance {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface ProductDetails_variants_pricingInUsd {
  __typename: "VariantPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The price without any discount.
   */
  priceUndiscounted: ProductDetails_variants_pricingInUsd_priceUndiscounted | null;
  /**
   * The price, with any discount subtracted.
   */
  price: ProductDetails_variants_pricingInUsd_price | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: ProductDetails_variants_pricingInUsd_discount | null;
  /**
   * The price for bank transfer without any discount.
   */
  priceForBankTransferUndiscounted: ProductDetails_variants_pricingInUsd_priceForBankTransferUndiscounted | null;
  /**
   * The price for bank transfer, with any discount subtracted.
   */
  priceForBankTransfer: ProductDetails_variants_pricingInUsd_priceForBankTransfer | null;
  /**
   * The discount amount for bank transfer if in sale (null otherwise).
   */
  discountForBankTransfer: ProductDetails_variants_pricingInUsd_discountForBankTransfer | null;
  /**
   * Metal weight calculated as per variant size
   */
  metalWeight: any;
  /**
   * The price of the metal used.
   */
  metalPrice: ProductDetails_variants_pricingInUsd_metalPrice | null;
  /**
   * The price of the stones used.
   */
  stonePrice: ProductDetails_variants_pricingInUsd_stonePrice | null;
  /**
   * Making charge for the jewellery.
   */
  makingCharge: ProductDetails_variants_pricingInUsd_makingCharge | null;
  /**
   * Packaging and insurance charge for the jewellery.
   */
  packagingInsurance: ProductDetails_variants_pricingInUsd_packagingInsurance | null;
}

export interface ProductDetails_variants_attributes_attribute {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of an attribute name.
   */
  slug: string | null;
  /**
   * The input type to use for entering attribute values in the dashboard.
   */
  inputType: AttributeInputTypeEnum | null;
  /**
   * The unit of attribute values.
   */
  unit: MeasurementUnitsEnum | null;
}

export interface ProductDetails_variants_attributes_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Represents the value of the attribute value.
   */
  value: string | null;
  /**
   * Internal representation of a value (unique per attribute).
   */
  slug: string | null;
}

export interface ProductDetails_variants_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: ProductDetails_variants_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (ProductDetails_variants_attributes_values | null)[];
}

export interface ProductDetails_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  sku: string;
  name: string;
  /**
   * Quantity of a product available for sale in one checkout.
   */
  quantityAvailable: number;
  /**
   * List of media for the product variant.
   */
  media: ProductDetails_variants_media[] | null;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: ProductDetails_variants_pricing | null;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricingInUsd: ProductDetails_variants_pricingInUsd | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: ProductDetails_variants_attributes[];
}

export interface ProductDetails_productReviews_reviewList_user {
  __typename: "User";
  firstName: string;
  lastName: string;
}

export interface ProductDetails_productReviews_reviewList {
  __typename: "Review";
  rating: number;
  comment: string;
  created: any;
  user: ProductDetails_productReviews_reviewList_user;
}

export interface ProductDetails_productReviews {
  __typename: "ProductReviews";
  /**
   * Average rating of the product.
   */
  averageRating: number | null;
  /**
   * List of review of the product.
   */
  reviewList: (ProductDetails_productReviews_reviewList | null)[] | null;
}

export interface ProductDetails {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  /**
   * Whether the product is available for purchase.
   */
  isAvailableForPurchase: boolean | null;
  /**
   * Date when product is available for purchase. 
   */
  availableForPurchase: any | null;
  seoTitle: string | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: ProductDetails_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: ProductDetails_thumbnail2x | null;
  /**
   * List of media for the product.
   */
  media: ProductDetails_media[] | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: ProductDetails_pricing | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricingInUsd: ProductDetails_pricingInUsd | null;
  description: any | null;
  category: ProductDetails_category | null;
  /**
   * List of attributes assigned to this product.
   */
  attributes: ProductDetails_attributes[];
  /**
   * List of variants for the product.
   */
  variants: (ProductDetails_variants | null)[] | null;
  /**
   * Whether the product is in stock and visible or not.
   */
  isAvailable: boolean | null;
  /**
   * Product reviews and rating of the product.
   */
  productReviews: ProductDetails_productReviews | null;
}
