/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ReviewInput, ReviewErrorCode } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateReview
// ====================================================

export interface CreateReview_reviewCreate_errors {
  __typename: "ReviewError";
  /**
   * The error code.
   */
  code: ReviewErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface CreateReview_reviewCreate_review_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
}

export interface CreateReview_reviewCreate_review_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface CreateReview_reviewCreate_review {
  __typename: "Review";
  rating: number;
  comment: string;
  created: any;
  isPublished: boolean;
  user: CreateReview_reviewCreate_review_user;
  product: CreateReview_reviewCreate_review_product;
}

export interface CreateReview_reviewCreate {
  __typename: "ReviewCreate";
  errors: CreateReview_reviewCreate_errors[];
  review: CreateReview_reviewCreate_review | null;
}

export interface CreateReview {
  /**
   * Creates a new review.
   */
  reviewCreate: CreateReview_reviewCreate | null;
}

export interface CreateReviewVariables {
  reviewInput: ReviewInput;
}
