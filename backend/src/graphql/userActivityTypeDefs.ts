import { gql } from "apollo-server";

export const userActivityTypeDefs = gql`
  enum EventTypes {
    PAGE_LOAD
    BOARD_HOVERED
    BOARD_CLICKED
  }

  type UserActivityData {
    boardId: ID!
  }

  type UserActivity {
    id: String!
    page: String!
    eventType: EventTypes!
    data: UserActivityData!
  }

  input CreateUserActivityDataInput {
    boardId: ID!
  }

  input CreateUserActivityInput {
    page: String!
    eventType: EventTypes!
    data: CreateUserActivityDataInput!
  }

  type Mutation {
    createUserActivity(input: CreateUserActivityInput!): UserActivity!
  }
`;
