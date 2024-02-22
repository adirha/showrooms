import { userActivityService } from "../services/userActivity.service";

export const userActivityResolver = {
  Mutation: {
    async createUserActivity(_, { input }) {
      return await userActivityService.createUserActivity(input);
    },
  },
};
