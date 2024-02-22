import { Schema } from "mongoose";
import { assetSchema } from "./asset";
import { descriptionSchema } from "./description";

export const boardSchema = new Schema(
  {
    title: String,
    descriptions: [descriptionSchema],
    assets: [assetSchema],
  },
  {
    id: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
boardSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

boardSchema.set("toJSON", {
  virtuals: true,
});
