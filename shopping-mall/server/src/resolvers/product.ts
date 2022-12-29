import { writeDB, DBField } from "../dbController";
import { Products, Resolver } from "./types";
import { v4 as uuid } from "uuid";

const setJSON = (data: Products) => writeDB(DBField.PRODUCTS, data);

const productResolver: Resolver = {
  Query: {
    products: async (parent, { cursor = "", showDeleted = false }, { db }) => {
      const [hasCreatedAt, noCreatedAt] = [
        db.products
          .filter((product) => !!product.createdAt)
          .sort((a, b) => a.createdAt! - b.createdAt!),
        db.products.filter((product) => !product.createdAt),
      ];
      const filteredDB = showDeleted
        ? [...hasCreatedAt, ...noCreatedAt]
        : hasCreatedAt;
      const fromIndex =
        filteredDB.findIndex((product) => product.id === cursor) + 1;
      return filteredDB.slice(fromIndex, fromIndex + 15) || [];
    },
    product: async (parent, { id }, { db }) => {
      const found = db.products.find((item) => item.id === id);
      if (found) return found;
      return null;
    },
  },
  Mutation: {
    addProduct: async (
      parent,
      { imageUrl, price, title, description },
      { db }
    ) => {
      const newProduct = {
        id: uuid(),
        imageUrl,
        price,
        title,
        description,
        createdAt: Date.now(),
      };
      db.products.push(newProduct);
      setJSON(db.products);
      return newProduct;
    },
    updateProduct: (parent, { id, ...data }, { db }) => {
      const existProductIndex = db.products.findIndex((item) => item.id === id);
      if (existProductIndex < 0) {
        throw new Error("없는 상품입니다.");
      }
      const updateItem = {
        ...db.products[existProductIndex],
        ...data,
      };
      db.products.splice(existProductIndex, 1, updateItem);
      setJSON(db.products);
      return updateItem;
    },
    deleteProduct: (parent, { id }, { db }) => {
      // 실제 db의 데이터를 삭제 대신, createdAt을 삭제
      const existProductIndex = db.products.findIndex((item) => item.id === id);
      if (existProductIndex < 0) {
        throw new Error("없는 상품입니다.");
      }
      const deleteItem = {
        ...db.products[existProductIndex],
      };
      delete deleteItem.createdAt;
      db.products.splice(existProductIndex, 1, deleteItem);
      setJSON(db.products);
      return id;
    },
  },
};

export default productResolver;
