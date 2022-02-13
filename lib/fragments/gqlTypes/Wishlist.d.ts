export interface Wishlist_items_edges_node_product {
    __typename: "Product";
    /**
     * The ID of the object.
     */
    id: string;
}
export interface Wishlist_items_edges_node {
    __typename: "WishlistItem";
    /**
     * The ID of the object.
     */
    id: string;
    product: Wishlist_items_edges_node_product;
}
export interface Wishlist_items_edges {
    __typename: "WishlistItemCountableEdge";
    /**
     * The item at the end of the edge.
     */
    node: Wishlist_items_edges_node;
}
export interface Wishlist_items {
    __typename: "WishlistItemCountableConnection";
    edges: Wishlist_items_edges[];
}
export interface Wishlist {
    __typename: "Wishlist";
    /**
     * The ID of the object.
     */
    id: string;
    items: Wishlist_items;
}
