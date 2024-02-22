import { showroomService } from "../services/showroom.service";

export const showroomResolver = {
  Query: {
    async showroomById(_, { id }) {
      return showroomService.showroomById(id);
    },
  },
  Mutation: {
    async createShowroom(_, { input }) {
      return await showroomService.createShowroom(input);
    },
  },
};
