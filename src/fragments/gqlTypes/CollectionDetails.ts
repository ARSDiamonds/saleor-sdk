/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CollectionDetails
// ====================================================

export interface CollectionDetails_backgroundImage {
  __typename: "ResponsiveImage";
  /**
   * Alt text for an image.
   */
  alt: string | null;
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * The URL of mobile version of the image.
   */
  mobileUrl: string | null;
}

export interface CollectionDetails {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  seoTitle: string | null;
  backgroundImage: CollectionDetails_backgroundImage | null;
  description: any | null;
}
