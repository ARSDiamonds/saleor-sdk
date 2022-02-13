"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReviewMutation = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const errors_1 = require("../fragments/errors");
const products_1 = require("../fragments/products");
exports.createReviewMutation = graphql_tag_1.default `
  ${products_1.reviewFragment}
  ${errors_1.reviewErrorFragment}
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
//# sourceMappingURL=review.js.map