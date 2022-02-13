export interface PriceWithTax_gross {
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
export interface PriceWithTax_net {
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
export interface PriceWithTax_tax {
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
export interface PriceWithTax {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: PriceWithTax_gross;
    /**
     * Amount of money without taxes.
     */
    net: PriceWithTax_net;
    /**
     * Amount of taxes.
     */
    tax: PriceWithTax_tax;
}
