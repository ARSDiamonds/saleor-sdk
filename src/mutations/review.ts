import gql from "graphql-tag";

import { reviewErrorFragment } from "../fragments/errors";
import { reviewFragment } from "../fragments/products";

export const createReviewMutation = gql`
  ${reviewFragment}
  ${reviewErrorFragment}
  mutation CreateReview($reviewInput: ReviewInput!) {
    reviewCreate(input: $reviewInput) {
      errors: reviewErrors {
        ...ReviewError
      }
      review {
        ...ReviewDetails
      }
    }
  }
`;
