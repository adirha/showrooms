import { UserActivityModel } from "../models/userActivity";

class UserActivityService {
  async createUserActivity(input) {
    try {
      const newUseActivity = new UserActivityModel({
        ...input,
      });
      const res = await newUseActivity.save();
      return {
        ...res.toObject(),
      };
    } catch (error: any) {
      console.log(error.message);
      throw error;
    }
  }
}

export const userActivityService = new UserActivityService();
