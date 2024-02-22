import { Schema } from "mongoose";
import { descriptionSchema } from "./description";

export const assetSchema = new Schema({
  url: String,
  assetType: String,
  title: String,
  link: String,
  descriptions: [descriptionSchema],
});
