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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AllOfficersPaginationDto = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

export enum AwardEnum {
  BestEcommercePlatform = 'BestEcommercePlatform',
  EcommerceChampionOfTheYear = 'EcommerceChampionOfTheYear',
  MostInnovativeDigitalTradeSolution = 'MostInnovativeDigitalTradeSolution'
}

export type CreateActivityLogDto = {
  action: Scalars['String']['input'];
  activity_type: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['Int']['input'];
};

export type CreateApplicationFormInput = {
  createAwardInput: CreateAwardInput;
  createBusinessInput: CreateBusinessInput;
  file_urls: Array<Scalars['String']['input']>;
};

export type CreateAwardInput = {
  award_data: Scalars['JSON']['input'];
  award_type: AwardEnum;
};

export type CreateBusinessInput = {
  brief_description: Scalars['String']['input'];
  business_address: Scalars['String']['input'];
  business_name: Scalars['String']['input'];
  contact_email: Scalars['String']['input'];
  contact_name: Scalars['String']['input'];
  contact_phone: Scalars['String']['input'];
};

export type CreateExampleDto = {
  example_desc: Scalars['String']['input'];
  example_title: Scalars['String']['input'];
  is_active: Scalars['Boolean']['input'];
};

export type UpdateExampleDto = {
  example_desc?: InputMaybe<Scalars['String']['input']>;
  example_title?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MultipleUploadFilesMutationMutationVariables = Exact<{
  files: Array<Scalars['Upload']['input']> | Scalars['Upload']['input'];
}>;


export type MultipleUploadFilesMutationMutation = { __typename?: 'Mutation', multipleUploadFilesMutation: { __typename?: 'MultiUploadsResponse', status_code: number, message: string, data: Array<{ __typename?: 'FileResponse', filename: string, url: string, file_type: string, file_size: string }> } };


export const MultipleUploadFilesMutationDocument = {"__meta__":{"hash":"455dc53c7a4e862ad7eae9d548940d18bab78cc6"},"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MultipleUploadFilesMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"files"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"multipleUploadFilesMutation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"files"},"value":{"kind":"Variable","name":{"kind":"Name","value":"files"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status_code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"file_type"}},{"kind":"Field","name":{"kind":"Name","value":"file_size"}}]}}]}}]}}]} as unknown as DocumentNode<MultipleUploadFilesMutationMutation, MultipleUploadFilesMutationMutationVariables>;