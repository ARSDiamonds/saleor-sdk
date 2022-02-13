export interface ProductReviews_productReviews_reviewList_user {
    __typename: "User";
    firstName: string;
    lastName: string;
}
export interface ProductReviews_productReviews_reviewList {
    __typename: "Review";
    rating: number;
    comment: string;
    created: any;
    user: ProductReviews_productReviews_reviewList_user;
}
export interface ProductReviews_productReviews {
    __typename: "ProductReviews";
    /**
     * Average rating of the product.
     */
    averageRating: number | null;
    /**
     * List of review of the product.
     */
    reviewList: (ProductReviews_productReviews_reviewList | null)[] | null;
}
export interface ProductReviews {
    __typename: "Product";
    /**
     * Product reviews and rating of the product.
     */
    productReviews: ProductReviews_productReviews | null;
}
