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
    addCart(id: ID!): CartItem!
    updateCart(id: ID!, amount: Int!): CartItem!
    deleteCart(id: ID!): ID!
    executePay(ids: [ID!]): [ID!]
  }
`;

export default cartSchema;
