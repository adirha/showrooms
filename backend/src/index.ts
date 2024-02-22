import { ApolloServer } from "apollo-server";
import mongoose, { ConnectOptions } from "mongoose";
import { showroomResolver } from "./resolvers/showroomResolver";
import { showroomTypeDefs } from "./graphql/showroomTypeDefs";
import { userActivityResolver } from "./resolvers/userActivityResolver";
import { userActivityTypeDefs } from "./graphql/userActivityTypeDefs";
import dotenv from "dotenv";
dotenv.config();

const MONGODB = `mongodb+srv://adir:${process.env.MONGO_PASSWORD}@byondxr.cndpjlg.mongodb.net/?retryWrites=true&w=majority`;

const server = new ApolloServer({
  typeDefs: [showroomTypeDefs, userActivityTypeDefs],
  resolvers: [showroomResolver, userActivityResolver],
});

mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log("MONGODB CONNECTION SUCCESSFUL");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server is listening on port ${res.url}`);
  });
