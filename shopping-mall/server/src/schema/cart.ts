import { gql } from "apollo-server-express";

const cartSchema = gql`
  type CartItem {
    id: ID!
    amount: Int!
    product: Product!
  }
  type Query {
    cart: [CartItem!]
  }
  type Mutation {
    addCart(productId: ID!): CartItem!
    updateCart(cartId: ID!, amount: Int!): CartItem!
    deleteCart(cartId: ID!): ID!
    executePay(ids: [ID!]): [ID!]
  }
`;

export default cartSchema;
