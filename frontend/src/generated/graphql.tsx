/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _FieldSet: { input: any; output: any; }
};

export enum AssetTypes {
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type Board = {
  __typename?: 'Board';
  assets?: Maybe<Array<BoardAsset>>;
  descriptions?: Maybe<Array<Description>>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BoardAsset = {
  __typename?: 'BoardAsset';
  assetType: AssetTypes;
  descriptions?: Maybe<Array<Description>>;
  link?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type CreateAssetInput = {
  assetType: AssetTypes;
  descriptions?: InputMaybe<Array<CreateDescriptionInput>>;
  link?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type CreateBoardInput = {
  assets: Array<CreateAssetInput>;
  descriptions: Array<CreateDescriptionInput>;
  title: Scalars['String']['input'];
};

export type CreateDescriptionInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateNavLinkInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type CreateShowroomInput = {
  boards: Array<CreateBoardInput>;
  navLinks: Array<Array<CreateNavLinkInput>>;
  title: Scalars['String']['input'];
};

export type CreateUserActivityDataInput = {
  boardId: Scalars['ID']['input'];
};

export type CreateUserActivityInput = {
  data: CreateUserActivityDataInput;
  eventType: EventTypes;
  page: Scalars['String']['input'];
};

export type Description = {
  __typename?: 'Description';
  content?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum EventTypes {
  BoardClicked = 'BOARD_CLICKED',
  BoardHovered = 'BOARD_HOVERED',
  PageLoad = 'PAGE_LOAD'
}

export type Mutation = {
  __typename?: 'Mutation';
  createShowroom: Showroom;
  createUserActivity: UserActivity;
};


export type MutationCreateShowroomArgs = {
  input: CreateShowroomInput;
};


export type MutationCreateUserActivityArgs = {
  input: CreateUserActivityInput;
};

export type NavLink = {
  __typename?: 'NavLink';
  title: Scalars['String']['output'];
  to: Scalars['String']['output'];
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
  boards: Array<Board>;
  id: Scalars['String']['output'];
  navLinks: Array<Array<NavLink>>;
  title: Scalars['String']['output'];
};

export type UserActivity = {
  __typename?: 'UserActivity';
  data: UserActivityData;
  eventType: EventTypes;
  id: Scalars['String']['output'];
  page: Scalars['String']['output'];
};

export type UserActivityData = {
  __typename?: 'UserActivityData';
  boardId: Scalars['ID']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AssetTypes: AssetTypes;
  Board: ResolverTypeWrapper<Board>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  BoardAsset: ResolverTypeWrapper<BoardAsset>;
  CreateAssetInput: CreateAssetInput;
  CreateBoardInput: CreateBoardInput;
  CreateDescriptionInput: CreateDescriptionInput;
  CreateNavLinkInput: CreateNavLinkInput;
  CreateShowroomInput: CreateShowroomInput;
  CreateUserActivityDataInput: CreateUserActivityDataInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  CreateUserActivityInput: CreateUserActivityInput;
  Description: ResolverTypeWrapper<Description>;
  EventTypes: EventTypes;
  Mutation: ResolverTypeWrapper<{}>;
  NavLink: ResolverTypeWrapper<NavLink>;
  Query: ResolverTypeWrapper<{}>;
  Showroom: ResolverTypeWrapper<Showroom>;
  UserActivity: ResolverTypeWrapper<UserActivity>;
  UserActivityData: ResolverTypeWrapper<UserActivityData>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Board: Board;
  String: Scalars['String']['output'];
  BoardAsset: BoardAsset;
  CreateAssetInput: CreateAssetInput;
  CreateBoardInput: CreateBoardInput;
  CreateDescriptionInput: CreateDescriptionInput;
  CreateNavLinkInput: CreateNavLinkInput;
  CreateShowroomInput: CreateShowroomInput;
  CreateUserActivityDataInput: CreateUserActivityDataInput;
  ID: Scalars['ID']['output'];
  CreateUserActivityInput: CreateUserActivityInput;
  Description: Description;
  Mutation: {};
  NavLink: NavLink;
  Query: {};
  Showroom: Showroom;
  UserActivity: UserActivity;
  UserActivityData: UserActivityData;
  Boolean: Scalars['Boolean']['output'];
};

export type BoardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Board'] = ResolversParentTypes['Board']> = {
  assets?: Resolver<Maybe<Array<ResolversTypes['BoardAsset']>>, ParentType, ContextType>;
  descriptions?: Resolver<Maybe<Array<ResolversTypes['Description']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BoardAssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['BoardAsset'] = ResolversParentTypes['BoardAsset']> = {
  assetType?: Resolver<ResolversTypes['AssetTypes'], ParentType, ContextType>;
  descriptions?: Resolver<Maybe<Array<ResolversTypes['Description']>>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Description'] = ResolversParentTypes['Description']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createShowroom?: Resolver<ResolversTypes['Showroom'], ParentType, ContextType, RequireFields<MutationCreateShowroomArgs, 'input'>>;
  createUserActivity?: Resolver<ResolversTypes['UserActivity'], ParentType, ContextType, RequireFields<MutationCreateUserActivityArgs, 'input'>>;
};

export type NavLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['NavLink'] = ResolversParentTypes['NavLink']> = {
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  showroomById?: Resolver<ResolversTypes['Showroom'], ParentType, ContextType, RequireFields<QueryShowroomByIdArgs, 'id'>>;
};

export type ShowroomResolvers<ContextType = any, ParentType extends ResolversParentTypes['Showroom'] = ResolversParentTypes['Showroom']> = {
  boards?: Resolver<Array<ResolversTypes['Board']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  navLinks?: Resolver<Array<Array<ResolversTypes['NavLink']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserActivity'] = ResolversParentTypes['UserActivity']> = {
  data?: Resolver<ResolversTypes['UserActivityData'], ParentType, ContextType>;
  eventType?: Resolver<ResolversTypes['EventTypes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserActivityDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserActivityData'] = ResolversParentTypes['UserActivityData']> = {
  boardId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Board?: BoardResolvers<ContextType>;
  BoardAsset?: BoardAssetResolvers<ContextType>;
  Description?: DescriptionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NavLink?: NavLinkResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Showroom?: ShowroomResolvers<ContextType>;
  UserActivity?: UserActivityResolvers<ContextType>;
  UserActivityData?: UserActivityDataResolvers<ContextType>;
};


export type ShowroomByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ShowroomByIdQuery = { __typename?: 'Query', showroomById: { __typename?: 'Showroom', id: string, title: string, navLinks: Array<Array<{ __typename?: 'NavLink', to: string, title: string }>>, boards: Array<{ __typename?: 'Board', id?: string | null | undefined, title?: string | null | undefined, descriptions?: Array<{ __typename?: 'Description', title?: string | null | undefined, content?: string | null | undefined }> | null | undefined, assets?: Array<{ __typename?: 'BoardAsset', assetType: AssetTypes, title?: string | null | undefined, link?: string | null | undefined, url: string, descriptions?: Array<{ __typename?: 'Description', title?: string | null | undefined, content?: string | null | undefined }> | null | undefined }> | null | undefined }> } };

export type CreateUserActivityMutationVariables = Exact<{
  input: CreateUserActivityInput;
}>;


export type CreateUserActivityMutation = { __typename?: 'Mutation', createUserActivity: { __typename?: 'UserActivity', id: string, page: string, eventType: EventTypes, data: { __typename?: 'UserActivityData', boardId: string } } };


export const ShowroomByIdDocument = gql`
    query ShowroomById($id: ID!) {
  showroomById(id: $id) {
    id
    title
    navLinks {
      to
      title
    }
    boards {
      id
      title
      descriptions {
        title
        content
      }
      assets {
        assetType
        title
        link
        url
        descriptions {
          title
          content
        }
      }
    }
  }
}
    `;

/**
 * __useShowroomByIdQuery__
 *
 * To run a query within a React component, call `useShowroomByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowroomByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowroomByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useShowroomByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ShowroomByIdQuery, ShowroomByIdQueryVariables> & ({ variables: ShowroomByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ShowroomByIdQuery, ShowroomByIdQueryVariables>(ShowroomByIdDocument, options);
      }
export function useShowroomByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ShowroomByIdQuery, ShowroomByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ShowroomByIdQuery, ShowroomByIdQueryVariables>(ShowroomByIdDocument, options);
        }
export function useShowroomByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ShowroomByIdQuery, ShowroomByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ShowroomByIdQuery, ShowroomByIdQueryVariables>(ShowroomByIdDocument, options);
        }
export type ShowroomByIdQueryHookResult = ReturnType<typeof useShowroomByIdQuery>;
export type ShowroomByIdLazyQueryHookResult = ReturnType<typeof useShowroomByIdLazyQuery>;
export type ShowroomByIdSuspenseQueryHookResult = ReturnType<typeof useShowroomByIdSuspenseQuery>;
export type ShowroomByIdQueryResult = Apollo.QueryResult<ShowroomByIdQuery, ShowroomByIdQueryVariables>;
export function refetchShowroomByIdQuery(variables: ShowroomByIdQueryVariables) {
      return { query: ShowroomByIdDocument, variables: variables }
    }
export const CreateUserActivityDocument = gql`
    mutation CreateUserActivity($input: CreateUserActivityInput!) {
  createUserActivity(input: $input) {
    id
    page
    eventType
    data {
      boardId
    }
  }
}
    `;
export type CreateUserActivityMutationFn = Apollo.MutationFunction<CreateUserActivityMutation, CreateUserActivityMutationVariables>;

/**
 * __useCreateUserActivityMutation__
 *
 * To run a mutation, you first call `useCreateUserActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserActivityMutation, { data, loading, error }] = useCreateUserActivityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserActivityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserActivityMutation, CreateUserActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateUserActivityMutation, CreateUserActivityMutationVariables>(CreateUserActivityDocument, options);
      }
export type CreateUserActivityMutationHookResult = ReturnType<typeof useCreateUserActivityMutation>;
export type CreateUserActivityMutationResult = Apollo.MutationResult<CreateUserActivityMutation>;
export type CreateUserActivityMutationOptions = Apollo.BaseMutationOptions<CreateUserActivityMutation, CreateUserActivityMutationVariables>;