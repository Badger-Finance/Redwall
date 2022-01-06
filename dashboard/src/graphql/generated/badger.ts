import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Approval = Snapshot & {
  __typename?: 'Approval';
  amount: Scalars['BigInt'];
  id: Scalars['ID'];
  owner: User;
  spender: User;
  timestamp: Scalars['Int'];
  token: Token;
  transactionId: Scalars['Bytes'];
};

export type ApprovalDayData = Snapshot & {
  __typename?: 'ApprovalDayData';
  approvals: Scalars['BigInt'];
  id: Scalars['ID'];
  revokes: Scalars['BigInt'];
  timestamp: Scalars['Int'];
  token: Token;
};

export type ApprovalDayData_Filter = {
  approvals?: InputMaybe<Scalars['BigInt']>;
  approvals_gt?: InputMaybe<Scalars['BigInt']>;
  approvals_gte?: InputMaybe<Scalars['BigInt']>;
  approvals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  approvals_lt?: InputMaybe<Scalars['BigInt']>;
  approvals_lte?: InputMaybe<Scalars['BigInt']>;
  approvals_not?: InputMaybe<Scalars['BigInt']>;
  approvals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  revokes?: InputMaybe<Scalars['BigInt']>;
  revokes_gt?: InputMaybe<Scalars['BigInt']>;
  revokes_gte?: InputMaybe<Scalars['BigInt']>;
  revokes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  revokes_lt?: InputMaybe<Scalars['BigInt']>;
  revokes_lte?: InputMaybe<Scalars['BigInt']>;
  revokes_not?: InputMaybe<Scalars['BigInt']>;
  revokes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ApprovalDayData_OrderBy {
  Approvals = 'approvals',
  Id = 'id',
  Revokes = 'revokes',
  Timestamp = 'timestamp',
  Token = 'token',
}

export type Approval_Filter = {
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  spender?: InputMaybe<Scalars['String']>;
  spender_contains?: InputMaybe<Scalars['String']>;
  spender_ends_with?: InputMaybe<Scalars['String']>;
  spender_gt?: InputMaybe<Scalars['String']>;
  spender_gte?: InputMaybe<Scalars['String']>;
  spender_in?: InputMaybe<Array<Scalars['String']>>;
  spender_lt?: InputMaybe<Scalars['String']>;
  spender_lte?: InputMaybe<Scalars['String']>;
  spender_not?: InputMaybe<Scalars['String']>;
  spender_not_contains?: InputMaybe<Scalars['String']>;
  spender_not_ends_with?: InputMaybe<Scalars['String']>;
  spender_not_in?: InputMaybe<Array<Scalars['String']>>;
  spender_not_starts_with?: InputMaybe<Scalars['String']>;
  spender_starts_with?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  transactionId?: InputMaybe<Scalars['Bytes']>;
  transactionId_contains?: InputMaybe<Scalars['Bytes']>;
  transactionId_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionId_not?: InputMaybe<Scalars['Bytes']>;
  transactionId_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Approval_OrderBy {
  Amount = 'amount',
  Id = 'id',
  Owner = 'owner',
  Spender = 'spender',
  Timestamp = 'timestamp',
  Token = 'token',
  TransactionId = 'transactionId',
}

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type CumulativeApproval = {
  __typename?: 'CumulativeApproval';
  approvals: Scalars['BigInt'];
  id: Scalars['ID'];
  revokes: Scalars['BigInt'];
  spender: User;
  token: Token;
};

export type CumulativeApproval_Filter = {
  approvals?: InputMaybe<Scalars['BigInt']>;
  approvals_gt?: InputMaybe<Scalars['BigInt']>;
  approvals_gte?: InputMaybe<Scalars['BigInt']>;
  approvals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  approvals_lt?: InputMaybe<Scalars['BigInt']>;
  approvals_lte?: InputMaybe<Scalars['BigInt']>;
  approvals_not?: InputMaybe<Scalars['BigInt']>;
  approvals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  revokes?: InputMaybe<Scalars['BigInt']>;
  revokes_gt?: InputMaybe<Scalars['BigInt']>;
  revokes_gte?: InputMaybe<Scalars['BigInt']>;
  revokes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  revokes_lt?: InputMaybe<Scalars['BigInt']>;
  revokes_lte?: InputMaybe<Scalars['BigInt']>;
  revokes_not?: InputMaybe<Scalars['BigInt']>;
  revokes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spender?: InputMaybe<Scalars['String']>;
  spender_contains?: InputMaybe<Scalars['String']>;
  spender_ends_with?: InputMaybe<Scalars['String']>;
  spender_gt?: InputMaybe<Scalars['String']>;
  spender_gte?: InputMaybe<Scalars['String']>;
  spender_in?: InputMaybe<Array<Scalars['String']>>;
  spender_lt?: InputMaybe<Scalars['String']>;
  spender_lte?: InputMaybe<Scalars['String']>;
  spender_not?: InputMaybe<Scalars['String']>;
  spender_not_contains?: InputMaybe<Scalars['String']>;
  spender_not_ends_with?: InputMaybe<Scalars['String']>;
  spender_not_in?: InputMaybe<Array<Scalars['String']>>;
  spender_not_starts_with?: InputMaybe<Scalars['String']>;
  spender_starts_with?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
};

export enum CumulativeApproval_OrderBy {
  Approvals = 'approvals',
  Id = 'id',
  Revokes = 'revokes',
  Spender = 'spender',
  Token = 'token',
}

export type Erc20 = {
  decimals: Scalars['BigInt'];
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  totalSupply: Scalars['BigInt'];
};

export type Erc20_Filter = {
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Erc20_OrderBy {
  Decimals = 'decimals',
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  TotalSupply = 'totalSupply',
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  approval?: Maybe<Approval>;
  approvalDayData?: Maybe<ApprovalDayData>;
  approvalDayDatas: Array<ApprovalDayData>;
  approvals: Array<Approval>;
  cumulativeApproval?: Maybe<CumulativeApproval>;
  cumulativeApprovals: Array<CumulativeApproval>;
  erc20?: Maybe<Erc20>;
  erc20S: Array<Erc20>;
  snapshot?: Maybe<Snapshot>;
  snapshots: Array<Snapshot>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  user?: Maybe<User>;
  userApprovalDayData?: Maybe<UserApprovalDayData>;
  userApprovalDayDatas: Array<UserApprovalDayData>;
  users: Array<User>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryApprovalDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryApprovalDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalDayData_Filter>;
};

export type QueryApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Approval_Filter>;
};

export type QueryCumulativeApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCumulativeApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CumulativeApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CumulativeApproval_Filter>;
};

export type QueryErc20Args = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc20SArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc20_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc20_Filter>;
};

export type QuerySnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Snapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Snapshot_Filter>;
};

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserApprovalDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserApprovalDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserApprovalDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserApprovalDayData_Filter>;
};

export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type Snapshot = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
};

export type Snapshot_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Snapshot_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  approval?: Maybe<Approval>;
  approvalDayData?: Maybe<ApprovalDayData>;
  approvalDayDatas: Array<ApprovalDayData>;
  approvals: Array<Approval>;
  cumulativeApproval?: Maybe<CumulativeApproval>;
  cumulativeApprovals: Array<CumulativeApproval>;
  erc20?: Maybe<Erc20>;
  erc20S: Array<Erc20>;
  snapshot?: Maybe<Snapshot>;
  snapshots: Array<Snapshot>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  user?: Maybe<User>;
  userApprovalDayData?: Maybe<UserApprovalDayData>;
  userApprovalDayDatas: Array<UserApprovalDayData>;
  users: Array<User>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionApprovalDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionApprovalDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalDayData_Filter>;
};

export type SubscriptionApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Approval_Filter>;
};

export type SubscriptionCumulativeApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCumulativeApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CumulativeApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CumulativeApproval_Filter>;
};

export type SubscriptionErc20Args = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc20SArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Erc20_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc20_Filter>;
};

export type SubscriptionSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Snapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Snapshot_Filter>;
};

export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserApprovalDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserApprovalDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserApprovalDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserApprovalDayData_Filter>;
};

export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type Token = Erc20 & {
  __typename?: 'Token';
  decimals: Scalars['BigInt'];
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  totalSupply: Scalars['BigInt'];
};

export type Token_Filter = {
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Token_OrderBy {
  Decimals = 'decimals',
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  TotalSupply = 'totalSupply',
}

export type User = {
  __typename?: 'User';
  approvals: Array<Approval>;
  cumulativeApprovals: Array<CumulativeApproval>;
  id: Scalars['ID'];
  sentApprovals: Array<Approval>;
};

export type UserApprovalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Approval_Filter>;
};

export type UserCumulativeApprovalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CumulativeApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CumulativeApproval_Filter>;
};

export type UserSentApprovalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Approval_Filter>;
};

export type UserApprovalDayData = Snapshot & {
  __typename?: 'UserApprovalDayData';
  approvals: Scalars['BigInt'];
  id: Scalars['ID'];
  revokes: Scalars['BigInt'];
  spender: User;
  timestamp: Scalars['Int'];
  token: Token;
};

export type UserApprovalDayData_Filter = {
  approvals?: InputMaybe<Scalars['BigInt']>;
  approvals_gt?: InputMaybe<Scalars['BigInt']>;
  approvals_gte?: InputMaybe<Scalars['BigInt']>;
  approvals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  approvals_lt?: InputMaybe<Scalars['BigInt']>;
  approvals_lte?: InputMaybe<Scalars['BigInt']>;
  approvals_not?: InputMaybe<Scalars['BigInt']>;
  approvals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  revokes?: InputMaybe<Scalars['BigInt']>;
  revokes_gt?: InputMaybe<Scalars['BigInt']>;
  revokes_gte?: InputMaybe<Scalars['BigInt']>;
  revokes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  revokes_lt?: InputMaybe<Scalars['BigInt']>;
  revokes_lte?: InputMaybe<Scalars['BigInt']>;
  revokes_not?: InputMaybe<Scalars['BigInt']>;
  revokes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spender?: InputMaybe<Scalars['String']>;
  spender_contains?: InputMaybe<Scalars['String']>;
  spender_ends_with?: InputMaybe<Scalars['String']>;
  spender_gt?: InputMaybe<Scalars['String']>;
  spender_gte?: InputMaybe<Scalars['String']>;
  spender_in?: InputMaybe<Array<Scalars['String']>>;
  spender_lt?: InputMaybe<Scalars['String']>;
  spender_lte?: InputMaybe<Scalars['String']>;
  spender_not?: InputMaybe<Scalars['String']>;
  spender_not_contains?: InputMaybe<Scalars['String']>;
  spender_not_ends_with?: InputMaybe<Scalars['String']>;
  spender_not_in?: InputMaybe<Array<Scalars['String']>>;
  spender_not_starts_with?: InputMaybe<Scalars['String']>;
  spender_starts_with?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
};

export enum UserApprovalDayData_OrderBy {
  Approvals = 'approvals',
  Id = 'id',
  Revokes = 'revokes',
  Spender = 'spender',
  Timestamp = 'timestamp',
  Token = 'token',
}

export type User_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum User_OrderBy {
  Approvals = 'approvals',
  CumulativeApprovals = 'cumulativeApprovals',
  Id = 'id',
  SentApprovals = 'sentApprovals',
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny',
}

export const TokenFragmentDoc = gql`
  fragment Token on Token {
    id
    name
    symbol
    decimals
    totalSupply
  }
`;
export const ApprovalDayDataFragmentDoc = gql`
  fragment ApprovalDayData on ApprovalDayData {
    id
    timestamp
    token {
      ...Token
    }
    approvals
    revokes
  }
  ${TokenFragmentDoc}
`;
export const ApprovalFragmentDoc = gql`
  fragment Approval on Approval {
    id
    transactionId
    timestamp
    token {
      ...Token
    }
    owner {
      id
    }
    spender {
      id
    }
    amount
  }
  ${TokenFragmentDoc}
`;
export const CumulativeApprovalFragmentDoc = gql`
  fragment CumulativeApproval on CumulativeApproval {
    id
    token {
      ...Token
    }
    spender {
      id
    }
    approvals
    revokes
  }
  ${TokenFragmentDoc}
`;
export const UserFragmentDoc = gql`
  fragment User on User {
    id
    approvals {
      ...Approval
    }
    sentApprovals {
      ...Approval
    }
    cumulativeApprovals {
      ...CumulativeApproval
    }
  }
  ${ApprovalFragmentDoc}
  ${CumulativeApprovalFragmentDoc}
`;
export const UserApprovalDayDataFragmentDoc = gql`
  fragment UserApprovalDayData on UserApprovalDayData {
    id
    timestamp
    spender {
      ...User
    }
    token {
      ...Token
    }
    approvals
    revokes
  }
  ${UserFragmentDoc}
  ${TokenFragmentDoc}
`;
export const ApprovalDayDatasDocument = gql`
  query ApprovalDayDatas(
    $first: Int
    $where: ApprovalDayData_filter
    $orderBy: ApprovalDayData_orderBy
    $orderDirection: OrderDirection
  ) {
    approvalDayDatas(
      first: $first
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...ApprovalDayData
    }
  }
  ${ApprovalDayDataFragmentDoc}
`;
export const ApprovalsDocument = gql`
  query Approvals(
    $first: Int
    $where: Approval_filter
    $orderBy: Approval_orderBy
    $orderDirection: OrderDirection
    $block: Block_height
  ) {
    approvals(
      first: $first
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...Approval
    }
  }
  ${ApprovalFragmentDoc}
`;
export const CumulativeApprovalsDocument = gql`
  query CumulativeApprovals(
    $first: Int
    $where: CumulativeApproval_filter
    $orderBy: CumulativeApproval_orderBy
    $orderDirection: OrderDirection
    $block: Block_height
  ) {
    cumulativeApprovals(
      first: $first
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...CumulativeApproval
    }
  }
  ${CumulativeApprovalFragmentDoc}
`;
export const UserApprovalDayDatasDocument = gql`
  query UserApprovalDayDatas(
    $first: Int
    $where: UserApprovalDayData_filter
    $orderBy: UserApprovalDayData_orderBy
    $orderDirection: OrderDirection
  ) {
    userApprovalDayDatas(
      first: $first
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      ...UserApprovalDayData
    }
  }
  ${UserApprovalDayDataFragmentDoc}
`;
export const UserDocument = gql`
  query User($id: ID!) {
    user(id: $id) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    ApprovalDayDatas(
      variables?: ApprovalDayDatasQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<ApprovalDayDatasQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ApprovalDayDatasQuery>(
            ApprovalDayDatasDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'ApprovalDayDatas',
      );
    },
    Approvals(
      variables?: ApprovalsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<ApprovalsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ApprovalsQuery>(ApprovalsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Approvals',
      );
    },
    CumulativeApprovals(
      variables?: CumulativeApprovalsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<CumulativeApprovalsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CumulativeApprovalsQuery>(
            CumulativeApprovalsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'CumulativeApprovals',
      );
    },
    UserApprovalDayDatas(
      variables?: UserApprovalDayDatasQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UserApprovalDayDatasQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UserApprovalDayDatasQuery>(
            UserApprovalDayDatasDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'UserApprovalDayDatas',
      );
    },
    User(
      variables: UserQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<UserQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UserQuery>(UserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'User',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type ApprovalDayDataFragment = {
  __typename?: 'ApprovalDayData';
  id: string;
  timestamp: number;
  approvals: any;
  revokes: any;
  token: {
    __typename?: 'Token';
    id: string;
    name: string;
    symbol: string;
    decimals: any;
    totalSupply: any;
  };
};

export type ApprovalFragment = {
  __typename?: 'Approval';
  id: string;
  transactionId: any;
  timestamp: number;
  amount: any;
  token: {
    __typename?: 'Token';
    id: string;
    name: string;
    symbol: string;
    decimals: any;
    totalSupply: any;
  };
  owner: { __typename?: 'User'; id: string };
  spender: { __typename?: 'User'; id: string };
};

export type CumulativeApprovalFragment = {
  __typename?: 'CumulativeApproval';
  id: string;
  approvals: any;
  revokes: any;
  token: {
    __typename?: 'Token';
    id: string;
    name: string;
    symbol: string;
    decimals: any;
    totalSupply: any;
  };
  spender: { __typename?: 'User'; id: string };
};

export type TokenFragment = {
  __typename?: 'Token';
  id: string;
  name: string;
  symbol: string;
  decimals: any;
  totalSupply: any;
};

export type UserApprovalDayDataFragment = {
  __typename?: 'UserApprovalDayData';
  id: string;
  timestamp: number;
  approvals: any;
  revokes: any;
  spender: {
    __typename?: 'User';
    id: string;
    approvals: Array<{
      __typename?: 'Approval';
      id: string;
      transactionId: any;
      timestamp: number;
      amount: any;
      token: {
        __typename?: 'Token';
        id: string;
        name: string;
        symbol: string;
        decimals: any;
        totalSupply: any;
      };
      owner: { __typename?: 'User'; id: string };
      spender: { __typename?: 'User'; id: string };
    }>;
    sentApprovals: Array<{
      __typename?: 'Approval';
      id: string;
      transactionId: any;
      timestamp: number;
      amount: any;
      token: {
        __typename?: 'Token';
        id: string;
        name: string;
        symbol: string;
        decimals: any;
        totalSupply: any;
      };
      owner: { __typename?: 'User'; id: string };
      spender: { __typename?: 'User'; id: string };
    }>;
    cumulativeApprovals: Array<{
      __typename?: 'CumulativeApproval';
      id: string;
      approvals: any;
      revokes: any;
      token: {
        __typename?: 'Token';
        id: string;
        name: string;
        symbol: string;
        decimals: any;
        totalSupply: any;
      };
      spender: { __typename?: 'User'; id: string };
    }>;
  };
  token: {
    __typename?: 'Token';
    id: string;
    name: string;
    symbol: string;
    decimals: any;
    totalSupply: any;
  };
};

export type UserFragment = {
  __typename?: 'User';
  id: string;
  approvals: Array<{
    __typename?: 'Approval';
    id: string;
    transactionId: any;
    timestamp: number;
    amount: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
    owner: { __typename?: 'User'; id: string };
    spender: { __typename?: 'User'; id: string };
  }>;
  sentApprovals: Array<{
    __typename?: 'Approval';
    id: string;
    transactionId: any;
    timestamp: number;
    amount: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
    owner: { __typename?: 'User'; id: string };
    spender: { __typename?: 'User'; id: string };
  }>;
  cumulativeApprovals: Array<{
    __typename?: 'CumulativeApproval';
    id: string;
    approvals: any;
    revokes: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
    spender: { __typename?: 'User'; id: string };
  }>;
};

export type ApprovalDayDatasQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApprovalDayData_Filter>;
  orderBy?: InputMaybe<ApprovalDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;

export type ApprovalDayDatasQuery = {
  __typename?: 'Query';
  approvalDayDatas: Array<{
    __typename?: 'ApprovalDayData';
    id: string;
    timestamp: number;
    approvals: any;
    revokes: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
  }>;
};

export type ApprovalsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Approval_Filter>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  block?: InputMaybe<Block_Height>;
}>;

export type ApprovalsQuery = {
  __typename?: 'Query';
  approvals: Array<{
    __typename?: 'Approval';
    id: string;
    transactionId: any;
    timestamp: number;
    amount: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
    owner: { __typename?: 'User'; id: string };
    spender: { __typename?: 'User'; id: string };
  }>;
};

export type CumulativeApprovalsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CumulativeApproval_Filter>;
  orderBy?: InputMaybe<CumulativeApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  block?: InputMaybe<Block_Height>;
}>;

export type CumulativeApprovalsQuery = {
  __typename?: 'Query';
  cumulativeApprovals: Array<{
    __typename?: 'CumulativeApproval';
    id: string;
    approvals: any;
    revokes: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
    spender: { __typename?: 'User'; id: string };
  }>;
};

export type UserApprovalDayDatasQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserApprovalDayData_Filter>;
  orderBy?: InputMaybe<UserApprovalDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;

export type UserApprovalDayDatasQuery = {
  __typename?: 'Query';
  userApprovalDayDatas: Array<{
    __typename?: 'UserApprovalDayData';
    id: string;
    timestamp: number;
    approvals: any;
    revokes: any;
    spender: {
      __typename?: 'User';
      id: string;
      approvals: Array<{
        __typename?: 'Approval';
        id: string;
        transactionId: any;
        timestamp: number;
        amount: any;
        token: {
          __typename?: 'Token';
          id: string;
          name: string;
          symbol: string;
          decimals: any;
          totalSupply: any;
        };
        owner: { __typename?: 'User'; id: string };
        spender: { __typename?: 'User'; id: string };
      }>;
      sentApprovals: Array<{
        __typename?: 'Approval';
        id: string;
        transactionId: any;
        timestamp: number;
        amount: any;
        token: {
          __typename?: 'Token';
          id: string;
          name: string;
          symbol: string;
          decimals: any;
          totalSupply: any;
        };
        owner: { __typename?: 'User'; id: string };
        spender: { __typename?: 'User'; id: string };
      }>;
      cumulativeApprovals: Array<{
        __typename?: 'CumulativeApproval';
        id: string;
        approvals: any;
        revokes: any;
        token: {
          __typename?: 'Token';
          id: string;
          name: string;
          symbol: string;
          decimals: any;
          totalSupply: any;
        };
        spender: { __typename?: 'User'; id: string };
      }>;
    };
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      decimals: any;
      totalSupply: any;
    };
  }>;
};

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type UserQuery = {
  __typename?: 'Query';
  user?:
    | {
        __typename?: 'User';
        id: string;
        approvals: Array<{
          __typename?: 'Approval';
          id: string;
          transactionId: any;
          timestamp: number;
          amount: any;
          token: {
            __typename?: 'Token';
            id: string;
            name: string;
            symbol: string;
            decimals: any;
            totalSupply: any;
          };
          owner: { __typename?: 'User'; id: string };
          spender: { __typename?: 'User'; id: string };
        }>;
        sentApprovals: Array<{
          __typename?: 'Approval';
          id: string;
          transactionId: any;
          timestamp: number;
          amount: any;
          token: {
            __typename?: 'Token';
            id: string;
            name: string;
            symbol: string;
            decimals: any;
            totalSupply: any;
          };
          owner: { __typename?: 'User'; id: string };
          spender: { __typename?: 'User'; id: string };
        }>;
        cumulativeApprovals: Array<{
          __typename?: 'CumulativeApproval';
          id: string;
          approvals: any;
          revokes: any;
          token: {
            __typename?: 'Token';
            id: string;
            name: string;
            symbol: string;
            decimals: any;
            totalSupply: any;
          };
          spender: { __typename?: 'User'; id: string };
        }>;
      }
    | null
    | undefined;
};
