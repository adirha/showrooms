import { Types } from "mongoose";
import { ShowroomModel } from "../models/showroom";

class ShowroomService {
  async showroomById(id) {
    try {
      const showroom = await ShowroomModel.findById(new Types.ObjectId(id));
      return showroom;
    } catch (error: any) {
      console.log(error.message);
      throw error;
    }
  }

  async createShowroom(input) {
    try {
      const newShowroom = new ShowroomModel({
        ...input,
      });
      const res = await newShowroom.save();
      return {
        ...res.toObject(),
      };
    } catch (error: any) {
      console.log(error.message);
      throw error;
    }
  }
}

export const showroomService = new ShowroomService();
