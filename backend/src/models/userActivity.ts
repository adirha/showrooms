import { Schema, model } from "mongoose";

const userActivitySchema = new Schema(
  // "UserId" field will be added in case there are users management system
  {
    page: String,
    eventType: String,
    data: { boardId: String },
  },
  {
    timestamps: true,
    id: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userActivitySchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userActivitySchema.set("toJSON", {
  virtuals: true,
});

export const UserActivityModel = model("UserActivity", userActivitySchema);
