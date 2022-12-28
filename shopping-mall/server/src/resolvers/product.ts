import { Resolver } from "./types";

const mockProducts = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1 + "",
  imageUrl: `http://placeimg.com/640/480/${i + 1}`,
  price: 50000,
  title: `임시상품-${i + 1}`,
  description: `임시상세내용-${i + 1}`,
  createdAt: new Date(1646745501883 + i * 1000 * 60 * 60 * 10).toString(),
}));

const productResolver: Resolver = {
  Query: {
    products: async (parent, args, context, info) => {
      return mockProducts;
    },
    product: async (parent, { id }) => {
      const found = mockProducts.find((item) => item.id === id);
      if (found) return found;
      return null;
    },
  },
};

export default productResolver;
