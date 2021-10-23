/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ReviewErrorCode } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: ReviewError
// ====================================================

export interface ReviewError {
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
