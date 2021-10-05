import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
};

export type Asset = {
  __typename?: 'Asset';
  createAt: Scalars['Time'];
  id: Scalars['ID'];
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  ticker: Scalars['String'];
};

export type AssetCreateInput = {
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  ticker: Scalars['String'];
};

export type AssetCreateManyInput = {
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
  create?: Maybe<Array<AssetCreateInput>>;
};

export type AssetUpdateInput = {
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ticker?: Maybe<Scalars['String']>;
};

export type AssetWhereInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  ticker?: Maybe<Scalars['String']>;
};

export type AssetWhereUniqueInput = {
  id: Scalars['ID'];
};

export type Author = {
  __typename?: 'Author';
  bio?: Maybe<Scalars['String']>;
  createAt: Scalars['Time'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  pseudonym?: Maybe<Scalars['Boolean']>;
};

export type AuthorCreateInput = {
  bio?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  papers?: Maybe<PaperCreateManyInput>;
  photo?: Maybe<Scalars['String']>;
  pseudonym?: Maybe<Scalars['Boolean']>;
};

export type AuthorCreateManyInput = {
  connect?: Maybe<Array<AuthorWhereUniqueInput>>;
  create?: Maybe<Array<AuthorCreateInput>>;
};

export enum AuthorOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc'
}

export type AuthorUpdateInput = {
  bio?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  pseudonym?: Maybe<Scalars['Boolean']>;
};

export type AuthorWhereUniqueInput = {
  id: Scalars['ID'];
};

export type Feature = {
  __typename?: 'Feature';
  createAt: Scalars['Time'];
  id: Scalars['ID'];
  paper: Scalars['ID'];
  promoted: Scalars['Boolean'];
  sponsor?: Maybe<Scalars['String']>;
};

export type FeatureCreateInput = {
  id?: Maybe<Scalars['ID']>;
  paper: Scalars['ID'];
  promoted: Scalars['Boolean'];
  sponsor?: Maybe<Scalars['String']>;
};

export type FeatureUpdateInput = {
  paper?: Maybe<Scalars['ID']>;
  promoted?: Maybe<Scalars['Boolean']>;
  sponsor?: Maybe<Scalars['String']>;
};

export type FeatureWhereUniqueInput = {
  id: Scalars['ID'];
};

export type File = {
  __typename?: 'File';
  coverImage?: Maybe<Scalars['String']>;
  createAt: Scalars['Time'];
  filename: Scalars['String'];
  id: Scalars['ID'];
  latest?: Maybe<Scalars['Boolean']>;
  pageNum?: Maybe<Scalars['Int']>;
  pubDate?: Maybe<Scalars['Time']>;
  source?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type FileCreateInput = {
  coverImage?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  latest?: Maybe<Scalars['Boolean']>;
  pageNum?: Maybe<Scalars['Int']>;
  pubDate?: Maybe<Scalars['Time']>;
  source?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type FileCreateManyInput = {
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  create?: Maybe<Array<FileCreateInput>>;
};

export type FileUpdateInput = {
  coverImage?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  latest?: Maybe<Scalars['Boolean']>;
  pageNum?: Maybe<Scalars['Int']>;
  pubDate?: Maybe<Scalars['Time']>;
  source?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type FileWhereUniqueInput = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAsset: Asset;
  createAuthor: Author;
  createFeature: Feature;
  createFile: File;
  createPaper: Paper;
  createUser: User;
  deleteAsset: Scalars['ID'];
  deleteAuthor: Scalars['ID'];
  deleteFeature: Scalars['ID'];
  deleteFile: Scalars['ID'];
  deletePaper: Scalars['ID'];
  deleteUser: Scalars['ID'];
  updateAsset: Asset;
  updateAuthor: Author;
  updateFeature: Feature;
  updateFile: File;
  updatePaper: Paper;
  updateUser: User;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateAuthorArgs = {
  data: AuthorCreateInput;
};


export type MutationCreateFeatureArgs = {
  data: FeatureCreateInput;
};


export type MutationCreateFileArgs = {
  data: FileCreateInput;
};


export type MutationCreatePaperArgs = {
  data: PaperCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteAuthorArgs = {
  where: AuthorWhereUniqueInput;
};


export type MutationDeleteFeatureArgs = {
  where: FeatureWhereUniqueInput;
};


export type MutationDeleteFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationDeletePaperArgs = {
  where: PaperWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
};


export type MutationUpdateAuthorArgs = {
  data: AuthorUpdateInput;
};


export type MutationUpdateFeatureArgs = {
  data: FeatureUpdateInput;
};


export type MutationUpdateFileArgs = {
  data: FileUpdateInput;
};


export type MutationUpdatePaperArgs = {
  data: PaperUpdateInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
};

export type Paper = {
  __typename?: 'Paper';
  createAt: Scalars['Time'];
  description?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  latestVersion?: Maybe<Scalars['ID']>;
  prettyId?: Maybe<Scalars['Int']>;
  subTitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type PaperCreateInput = {
  description?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  latestVersion?: Maybe<Scalars['ID']>;
  prettyId?: Maybe<Scalars['Int']>;
  subTitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type PaperCreateManyInput = {
  connect?: Maybe<Array<PaperWhereUniqueInput>>;
  create?: Maybe<Array<PaperCreateInput>>;
};

export enum PaperOrdering {
  TitleAsc = 'title_asc',
  TitleDesc = 'title_desc'
}

export type PaperUpdateInput = {
  description?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  latestVersion?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type PaperWhereInput = {
  id?: Maybe<Scalars['ID']>;
  prettyId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type PaperWhereUniqueInput = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetByTicker?: Maybe<Asset>;
  assets: Array<Asset>;
  author?: Maybe<Author>;
  authors: Array<Author>;
  feature?: Maybe<Feature>;
  featureLatest?: Maybe<Feature>;
  features?: Maybe<Array<Feature>>;
  file?: Maybe<File>;
  files: Array<File>;
  paper?: Maybe<Paper>;
  paperByPid?: Maybe<Paper>;
  papers: Array<Paper>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAssetArgs = {
  id: Scalars['ID'];
};


export type QueryAssetByTickerArgs = {
  ticker: Scalars['String'];
};


export type QueryAuthorArgs = {
  id: Scalars['ID'];
};


export type QueryAuthorsArgs = {
  orderBy?: Maybe<AuthorOrdering>;
};


export type QueryFeatureArgs = {
  id: Scalars['ID'];
};


export type QueryFileArgs = {
  id: Scalars['ID'];
};


export type QueryPaperArgs = {
  id: Scalars['ID'];
};


export type QueryPaperByPidArgs = {
  prettyId: Scalars['Int'];
};


export type QueryPapersArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PaperOrdering>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  createAt: Scalars['Time'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserCreateInput = {
  email: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserUpdateInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
  Asset: ResolverTypeWrapper<Asset>;
  AssetCreateInput: AssetCreateInput;
  AssetCreateManyInput: AssetCreateManyInput;
  AssetUpdateInput: AssetUpdateInput;
  AssetWhereInput: AssetWhereInput;
  AssetWhereUniqueInput: AssetWhereUniqueInput;
  Author: ResolverTypeWrapper<Author>;
  AuthorCreateInput: AuthorCreateInput;
  AuthorCreateManyInput: AuthorCreateManyInput;
  AuthorOrdering: AuthorOrdering;
  AuthorUpdateInput: AuthorUpdateInput;
  AuthorWhereUniqueInput: AuthorWhereUniqueInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Feature: ResolverTypeWrapper<Feature>;
  FeatureCreateInput: FeatureCreateInput;
  FeatureUpdateInput: FeatureUpdateInput;
  FeatureWhereUniqueInput: FeatureWhereUniqueInput;
  File: ResolverTypeWrapper<File>;
  FileCreateInput: FileCreateInput;
  FileCreateManyInput: FileCreateManyInput;
  FileUpdateInput: FileUpdateInput;
  FileWhereUniqueInput: FileWhereUniqueInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Paper: ResolverTypeWrapper<Paper>;
  PaperCreateInput: PaperCreateInput;
  PaperCreateManyInput: PaperCreateManyInput;
  PaperOrdering: PaperOrdering;
  PaperUpdateInput: PaperUpdateInput;
  PaperWhereInput: PaperWhereInput;
  PaperWhereUniqueInput: PaperWhereUniqueInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  User: ResolverTypeWrapper<User>;
  UserCreateInput: UserCreateInput;
  UserUpdateInput: UserUpdateInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Asset: Asset;
  AssetCreateInput: AssetCreateInput;
  AssetCreateManyInput: AssetCreateManyInput;
  AssetUpdateInput: AssetUpdateInput;
  AssetWhereInput: AssetWhereInput;
  AssetWhereUniqueInput: AssetWhereUniqueInput;
  Author: Author;
  AuthorCreateInput: AuthorCreateInput;
  AuthorCreateManyInput: AuthorCreateManyInput;
  AuthorUpdateInput: AuthorUpdateInput;
  AuthorWhereUniqueInput: AuthorWhereUniqueInput;
  Boolean: Scalars['Boolean'];
  Feature: Feature;
  FeatureCreateInput: FeatureCreateInput;
  FeatureUpdateInput: FeatureUpdateInput;
  FeatureWhereUniqueInput: FeatureWhereUniqueInput;
  File: File;
  FileCreateInput: FileCreateInput;
  FileCreateManyInput: FileCreateManyInput;
  FileUpdateInput: FileUpdateInput;
  FileWhereUniqueInput: FileWhereUniqueInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Paper: Paper;
  PaperCreateInput: PaperCreateInput;
  PaperCreateManyInput: PaperCreateManyInput;
  PaperUpdateInput: PaperUpdateInput;
  PaperWhereInput: PaperWhereInput;
  PaperWhereUniqueInput: PaperWhereUniqueInput;
  Query: {};
  String: Scalars['String'];
  Time: Scalars['Time'];
  User: User;
  UserCreateInput: UserCreateInput;
  UserUpdateInput: UserUpdateInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  createAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ticker?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pseudonym?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feature'] = ResolversParentTypes['Feature']> = {
  createAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  paper?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  promoted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sponsor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  coverImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  latest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pageNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pubDate?: Resolver<Maybe<ResolversTypes['Time']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAsset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType, RequireFields<MutationCreateAssetArgs, 'data'>>;
  createAuthor?: Resolver<ResolversTypes['Author'], ParentType, ContextType, RequireFields<MutationCreateAuthorArgs, 'data'>>;
  createFeature?: Resolver<ResolversTypes['Feature'], ParentType, ContextType, RequireFields<MutationCreateFeatureArgs, 'data'>>;
  createFile?: Resolver<ResolversTypes['File'], ParentType, ContextType, RequireFields<MutationCreateFileArgs, 'data'>>;
  createPaper?: Resolver<ResolversTypes['Paper'], ParentType, ContextType, RequireFields<MutationCreatePaperArgs, 'data'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>;
  deleteAsset?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteAssetArgs, 'where'>>;
  deleteAuthor?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteAuthorArgs, 'where'>>;
  deleteFeature?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteFeatureArgs, 'where'>>;
  deleteFile?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteFileArgs, 'where'>>;
  deletePaper?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeletePaperArgs, 'where'>>;
  deleteUser?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'where'>>;
  updateAsset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType, RequireFields<MutationUpdateAssetArgs, 'data'>>;
  updateAuthor?: Resolver<ResolversTypes['Author'], ParentType, ContextType, RequireFields<MutationUpdateAuthorArgs, 'data'>>;
  updateFeature?: Resolver<ResolversTypes['Feature'], ParentType, ContextType, RequireFields<MutationUpdateFeatureArgs, 'data'>>;
  updateFile?: Resolver<ResolversTypes['File'], ParentType, ContextType, RequireFields<MutationUpdateFileArgs, 'data'>>;
  updatePaper?: Resolver<ResolversTypes['Paper'], ParentType, ContextType, RequireFields<MutationUpdatePaperArgs, 'data'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data'>>;
};

export type PaperResolvers<ContextType = any, ParentType extends ResolversParentTypes['Paper'] = ResolversParentTypes['Paper']> = {
  createAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  excerpt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  latestVersion?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  prettyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'id'>>;
  assetByTicker?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetByTickerArgs, 'ticker'>>;
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<QueryAuthorArgs, 'id'>>;
  authors?: Resolver<Array<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<QueryAuthorsArgs, 'orderBy'>>;
  feature?: Resolver<Maybe<ResolversTypes['Feature']>, ParentType, ContextType, RequireFields<QueryFeatureArgs, 'id'>>;
  featureLatest?: Resolver<Maybe<ResolversTypes['Feature']>, ParentType, ContextType>;
  features?: Resolver<Maybe<Array<ResolversTypes['Feature']>>, ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<QueryFileArgs, 'id'>>;
  files?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>;
  paper?: Resolver<Maybe<ResolversTypes['Paper']>, ParentType, ContextType, RequireFields<QueryPaperArgs, 'id'>>;
  paperByPid?: Resolver<Maybe<ResolversTypes['Paper']>, ParentType, ContextType, RequireFields<QueryPaperByPidArgs, 'prettyId'>>;
  papers?: Resolver<Array<ResolversTypes['Paper']>, ParentType, ContextType, RequireFields<QueryPapersArgs, 'first' | 'offset' | 'orderBy'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Asset?: AssetResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  Feature?: FeatureResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Paper?: PaperResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Time?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

