import { Resolver } from "./types";

const mockProducts = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1 + "",
  imageUrl: `http://placeimg.com/640/480/${i + 1}`,
  price: 50000,
  title: `임시상품-${i + 1}`,
  description: `임시상세내용-${i + 1}`,
  createdAt: new Date(1646745501883 + i * 1000 * 60 * 60 * 10).toString(),
}));

let cartData = [
  { id: "1", amount: 1 },
  { id: "2", amount: 2 },
];

const cartResolver: Resolver = {
  Query: {
    cart: async (parent, args, context, info) => {
      return cartData;
    },
  },

  Mutation: {
    addCart: async (parent, { productId }) => {
      const newCartData = { ...cartData };
      const targetProduct = mockProducts.find((item) => item.id === productId);

      if (!targetProduct) throw new Error("상품이 없습니다");

      const newItem = {
        ...targetProduct,
        amount: (newCartData[productId]?.amount || 0) + 1,
      };
      newCartData[productId] = newItem;
      cartData = newCartData;

      return newItem;
    },
    updateCart: async (parent, { cartId, amount }) => {
      const newData = { ...cartData };
      if (!newData[cartId]) {
        throw new Error("상품이 존재하지 않습니다.");
      }
      const newItem = {
        ...newData[cartId],
        amount,
      };
      newData[cartId] = newItem;
      cartData = newData;
      return newItem;
    },
    deleteCart: async (parent, { cartId }) => {
      const newData = { ...cartData };
      delete newData[cartId];
      cartData = newData;
      return cartId;
    },
    executePay: (parent, { ids }) => {
      const newCartData = cartData.filter((cartItem) => {
        !ids.includes(cartItem.id);
      });
      cartData = newCartData;
      return ids;
    },
  },
};

export default cartResolver;
