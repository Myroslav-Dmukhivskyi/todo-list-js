import { resolve } from "path";

export const entry = "./js/main.js";
require("./js/add-to-do");
export const module = {
  rules: [
    { test: /\.svg$/, use: "svg-inline-loader" },
    { test: /\.css$/, use: ["style-loader", "css-loader"] },
    { test: /\.(js)$/, use: "babel-loader" },
  ],
};
export const mode = "development";
export const output = {
  path: resolve(__dirname, "dist"),
  filename: "index.js",
};
