import gql from "graphql-tag";

export const getShop = gql`
  query GetShop {
    shop {
      companyAddress {
        phone
      }
      displayGrossPrices
      defaultCountry {
        code
        country
      }
      countries {
        country
        code
      }
    }
  }
`;
