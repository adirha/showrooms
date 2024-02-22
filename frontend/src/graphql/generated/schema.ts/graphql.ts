/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum AssetTypes {
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type Board = {
  __typename?: 'Board';
  assets?: Maybe<Array<BoardAsset>>;
  descriptions?: Maybe<Array<Description>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BoardAsset = {
  __typename?: 'BoardAsset';
  assetType?: Maybe<AssetTypes>;
  descriptions?: Maybe<Array<Description>>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CreateAssetInput = {
  assetType?: InputMaybe<AssetTypes>;
  descriptions?: InputMaybe<Array<CreateDescriptionInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBoardInput = {
  assets?: InputMaybe<Array<CreateAssetInput>>;
  descriptions?: InputMaybe<Array<CreateDescriptionInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDescriptionInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateShowroomInput = {
  boards: Array<CreateBoardInput>;
  title: Scalars['String']['input'];
};

export type Description = {
  __typename?: 'Description';
  content?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createShowroom: Showroom;
};


export type MutationCreateShowroomArgs = {
  input: CreateShowroomInput;
};

export type Query = {
  __typename?: 'Query';
  showroomById: Showroom;
};


export type QueryShowroomByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Showroom = {
  __typename?: 'Showroom';
  boards?: Maybe<Array<Maybe<Board>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ShowroomByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ShowroomByIdQuery = { __typename?: 'Query', showroomById: { __typename?: 'Showroom', title?: string | null, boards?: Array<{ __typename?: 'Board', title?: string | null, descriptions?: Array<{ __typename?: 'Description', title?: string | null, content?: string | null }> | null, assets?: Array<{ __typename?: 'BoardAsset', assetType?: AssetTypes | null, title?: string | null, url?: string | null, descriptions?: Array<{ __typename?: 'Description', title?: string | null, content?: string | null }> | null }> | null } | null> | null } };


export const ShowroomByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowroomById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"showroomById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"boards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"descriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assetType"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"descriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ShowroomByIdQuery, ShowroomByIdQueryVariables>;