import { gql } from "apollo-server";

export const showroomTypeDefs = gql`
  enum AssetTypes {
    IMAGE
    VIDEO
  }

  type NavLink {
    title: String!
    to: String!
  }

  type Description {
    title: String
    content: String
  }

  type BoardAsset {
    url: String!
    link: String
    assetType: AssetTypes!
    title: String
    descriptions: [Description!]
  }

  type Board {
    id: String
    title: String
    descriptions: [Description!]
    assets: [BoardAsset!]
  }

  type Showroom {
    id: String!
    title: String!
    boards: [Board!]!
    navLinks: [[NavLink!]!]!
  }

  input CreateNavLinkInput {
    title: String
    to: String
  }

  input CreateDescriptionInput {
    title: String
    content: String
  }

  input CreateAssetInput {
    url: String!
    title: String
    link: String
    descriptions: [CreateDescriptionInput!]
    assetType: AssetTypes!
  }

  input CreateBoardInput {
    title: String!
    descriptions: [CreateDescriptionInput!]!
    assets: [CreateAssetInput!]!
  }

  input CreateShowroomInput {
    title: String!
    boards: [CreateBoardInput!]!
    navLinks: [[CreateNavLinkInput!]!]!
  }

  type Query {
    showroomById(id: ID!): Showroom!
  }

  type Mutation {
    createShowroom(input: CreateShowroomInput!): Showroom!
  }
`;
