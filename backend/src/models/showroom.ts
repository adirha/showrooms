import { Schema, model } from "mongoose";
import { boardSchema } from "./board";

const showroomSchema = new Schema(
  {
    title: String,
    navLinks: [[{ title: String, to: String }]],
    boards: [boardSchema],
  },
  {
    timestamps: true,
    id: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

showroomSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
showroomSchema.set("toJSON", {
  virtuals: true,
});

export const ShowroomModel = model("Showroom", showroomSchema);
