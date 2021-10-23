/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ReviewDetails
// ====================================================

export interface ReviewDetails_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
}

export interface ReviewDetails_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ReviewDetails {
  __typename: "Review";
  rating: number;
  comment: string;
  created: any;
  isPublished: boolean;
  user: ReviewDetails_user;
  product: ReviewDetails_product;
}
