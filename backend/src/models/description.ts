import { Schema } from "mongoose";

export const descriptionSchema = new Schema({
  title: String,
  content: String,
});
