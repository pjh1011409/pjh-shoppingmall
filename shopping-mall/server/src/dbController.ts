import fs from "fs";
import { resolve } from "path";

export enum DBField {
  CART = "cart",
  PRODUCTS = "products",
}

const basePath = resolve(); // __dirname

const filenames = {
  [DBField.CART]: resolve(basePath, "src/db/cart.json"),
  [DBField.PRODUCTS]: resolve(basePath, "src/db/products.json"),
};

export const readDB = (target: DBField) => {
  try {
    return JSON.parse(fs.readFileSync(filenames[target], "utf-8"));
  } catch (err) {
    console.log(err);
  }
};

export const writeDB = (target: DBField, data: any) => {
  try {
    fs.writeFileSync(filenames[target], JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};
