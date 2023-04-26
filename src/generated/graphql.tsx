import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type EditPlantInput = {
  _id: Scalars['ID'];
  img?: InputMaybe<SvgUsed>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PlantTypes>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPlant: PlantType;
  deletePlant: Scalars['Boolean'];
  editPlant: PlantType;
  turnOnFan: Scalars['Boolean'];
  turnOnLightning: Scalars['Boolean'];
  waterPlant: Scalars['Boolean'];
};


export type MutationAddPlantArgs = {
  input: PlantInput;
};


export type MutationDeletePlantArgs = {
  id: Scalars['String'];
};


export type MutationEditPlantArgs = {
  input: EditPlantInput;
};


export type MutationTurnOnFanArgs = {
  id: Scalars['String'];
};


export type MutationTurnOnLightningArgs = {
  id: Scalars['String'];
};


export type MutationWaterPlantArgs = {
  id: Scalars['String'];
};

export type PlantInput = {
  brightness?: InputMaybe<Scalars['Float']>;
  fan?: InputMaybe<Scalars['Boolean']>;
  humidity?: InputMaybe<Scalars['Float']>;
  img?: InputMaybe<SvgUsed>;
  lighting?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  temperature?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<PlantTypes>;
  watering?: InputMaybe<Scalars['Boolean']>;
};

export type PlantType = {
  __typename?: 'PlantType';
  _id: Scalars['ID'];
  brightness?: Maybe<Scalars['Float']>;
  fan?: Maybe<Scalars['Boolean']>;
  humidity?: Maybe<Scalars['Float']>;
  img: SvgUsed;
  lighting?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  temperature?: Maybe<Scalars['Float']>;
  type: PlantTypes;
  watering?: Maybe<Scalars['Boolean']>;
};

/** Types of plants */
export enum PlantTypes {
  Berry = 'Berry',
  Fruit = 'Fruit',
  Herb = 'Herb',
  Vegetable = 'Vegetable'
}

export type Query = {
  __typename?: 'Query';
  findAllPlants: Array<PlantType>;
  findPlantById: PlantType;
};


export type QueryFindPlantByIdArgs = {
  id: Scalars['String'];
};

/** SVG in collection used to represent the plant. */
export enum SvgUsed {
  Apple = 'apple',
  Artichoke = 'artichoke',
  Avocado = 'avocado',
  Banana = 'banana',
  Broccoli = 'broccoli',
  Cabbage = 'cabbage',
  Carrot = 'carrot',
  Cherries = 'cherries',
  Corn = 'corn',
  Eggplant = 'eggplant',
  Grapes = 'grapes',
  Herb = 'herb',
  Kiwi = 'kiwi',
  Olives = 'olives',
  Onion = 'onion',
  Orange = 'orange',
  Pear = 'pear',
  Peas = 'peas',
  Pepper = 'pepper',
  Pineapple = 'pineapple',
  Pomegranate = 'pomegranate',
  Pumpkin = 'pumpkin',
  Raspberry = 'raspberry',
  Strawberry = 'strawberry',
  Tomato = 'tomato',
  Turnip = 'turnip',
  Watermelon = 'watermelon'
}

export type PlantFragment = { __typename?: 'PlantType', _id: string, type: PlantTypes, name: string, img: SvgUsed, humidity?: number | null, brightness?: number | null, temperature?: number | null, watering?: boolean | null, lighting?: boolean | null, fan?: boolean | null };

export type AddPlantMutationVariables = Exact<{
  input: PlantInput;
}>;


export type AddPlantMutation = { __typename?: 'Mutation', addPlant: { __typename?: 'PlantType', _id: string, type: PlantTypes, name: string, img: SvgUsed, humidity?: number | null, brightness?: number | null, temperature?: number | null, watering?: boolean | null, lighting?: boolean | null, fan?: boolean | null } };

export type DeletePlantMutationVariables = Exact<{
  deletePlantId: Scalars['String'];
}>;


export type DeletePlantMutation = { __typename?: 'Mutation', deletePlant: boolean };

export type EditPlantMutationVariables = Exact<{
  input: EditPlantInput;
}>;


export type EditPlantMutation = { __typename?: 'Mutation', editPlant: { __typename?: 'PlantType', _id: string, type: PlantTypes, name: string, img: SvgUsed, humidity?: number | null, brightness?: number | null, temperature?: number | null, watering?: boolean | null, lighting?: boolean | null, fan?: boolean | null } };

export type TurnOnFanMutationVariables = Exact<{
  turnOnFanId: Scalars['String'];
}>;


export type TurnOnFanMutation = { __typename?: 'Mutation', turnOnFan: boolean };

export type TurnOnLightningMutationVariables = Exact<{
  turnOnLightningId: Scalars['String'];
}>;


export type TurnOnLightningMutation = { __typename?: 'Mutation', turnOnLightning: boolean };

export type WaterPlantMutationVariables = Exact<{
  waterPlantId: Scalars['String'];
}>;


export type WaterPlantMutation = { __typename?: 'Mutation', waterPlant: boolean };

export type FindAllPlantsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllPlantsQuery = { __typename?: 'Query', findAllPlants: Array<{ __typename?: 'PlantType', _id: string, type: PlantTypes, name: string, img: SvgUsed, humidity?: number | null, brightness?: number | null, temperature?: number | null, watering?: boolean | null, lighting?: boolean | null, fan?: boolean | null }> };

export type FindPlantByIdQueryVariables = Exact<{
  findPlantByIdId: Scalars['String'];
}>;


export type FindPlantByIdQuery = { __typename?: 'Query', findPlantById: { __typename?: 'PlantType', _id: string, type: PlantTypes, name: string, img: SvgUsed, humidity?: number | null, brightness?: number | null, temperature?: number | null, watering?: boolean | null, lighting?: boolean | null, fan?: boolean | null } };

export const PlantFragmentDoc = gql`
    fragment Plant on PlantType {
  _id
  type
  name
  img
  humidity
  brightness
  temperature
  watering
  lighting
  fan
}
    `;
export const AddPlantDocument = gql`
    mutation AddPlant($input: PlantInput!) {
  addPlant(input: $input) {
    ...Plant
  }
}
    ${PlantFragmentDoc}`;
export type AddPlantMutationFn = Apollo.MutationFunction<AddPlantMutation, AddPlantMutationVariables>;

/**
 * __useAddPlantMutation__
 *
 * To run a mutation, you first call `useAddPlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPlantMutation, { data, loading, error }] = useAddPlantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPlantMutation(baseOptions?: Apollo.MutationHookOptions<AddPlantMutation, AddPlantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPlantMutation, AddPlantMutationVariables>(AddPlantDocument, options);
      }
export type AddPlantMutationHookResult = ReturnType<typeof useAddPlantMutation>;
export type AddPlantMutationResult = Apollo.MutationResult<AddPlantMutation>;
export type AddPlantMutationOptions = Apollo.BaseMutationOptions<AddPlantMutation, AddPlantMutationVariables>;
export const DeletePlantDocument = gql`
    mutation DeletePlant($deletePlantId: String!) {
  deletePlant(id: $deletePlantId)
}
    `;
export type DeletePlantMutationFn = Apollo.MutationFunction<DeletePlantMutation, DeletePlantMutationVariables>;

/**
 * __useDeletePlantMutation__
 *
 * To run a mutation, you first call `useDeletePlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlantMutation, { data, loading, error }] = useDeletePlantMutation({
 *   variables: {
 *      deletePlantId: // value for 'deletePlantId'
 *   },
 * });
 */
export function useDeletePlantMutation(baseOptions?: Apollo.MutationHookOptions<DeletePlantMutation, DeletePlantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePlantMutation, DeletePlantMutationVariables>(DeletePlantDocument, options);
      }
export type DeletePlantMutationHookResult = ReturnType<typeof useDeletePlantMutation>;
export type DeletePlantMutationResult = Apollo.MutationResult<DeletePlantMutation>;
export type DeletePlantMutationOptions = Apollo.BaseMutationOptions<DeletePlantMutation, DeletePlantMutationVariables>;
export const EditPlantDocument = gql`
    mutation EditPlant($input: EditPlantInput!) {
  editPlant(input: $input) {
    ...Plant
  }
}
    ${PlantFragmentDoc}`;
export type EditPlantMutationFn = Apollo.MutationFunction<EditPlantMutation, EditPlantMutationVariables>;

/**
 * __useEditPlantMutation__
 *
 * To run a mutation, you first call `useEditPlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPlantMutation, { data, loading, error }] = useEditPlantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditPlantMutation(baseOptions?: Apollo.MutationHookOptions<EditPlantMutation, EditPlantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPlantMutation, EditPlantMutationVariables>(EditPlantDocument, options);
      }
export type EditPlantMutationHookResult = ReturnType<typeof useEditPlantMutation>;
export type EditPlantMutationResult = Apollo.MutationResult<EditPlantMutation>;
export type EditPlantMutationOptions = Apollo.BaseMutationOptions<EditPlantMutation, EditPlantMutationVariables>;
export const TurnOnFanDocument = gql`
    mutation TurnOnFan($turnOnFanId: String!) {
  turnOnFan(id: $turnOnFanId)
}
    `;
export type TurnOnFanMutationFn = Apollo.MutationFunction<TurnOnFanMutation, TurnOnFanMutationVariables>;

/**
 * __useTurnOnFanMutation__
 *
 * To run a mutation, you first call `useTurnOnFanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTurnOnFanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [turnOnFanMutation, { data, loading, error }] = useTurnOnFanMutation({
 *   variables: {
 *      turnOnFanId: // value for 'turnOnFanId'
 *   },
 * });
 */
export function useTurnOnFanMutation(baseOptions?: Apollo.MutationHookOptions<TurnOnFanMutation, TurnOnFanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TurnOnFanMutation, TurnOnFanMutationVariables>(TurnOnFanDocument, options);
      }
export type TurnOnFanMutationHookResult = ReturnType<typeof useTurnOnFanMutation>;
export type TurnOnFanMutationResult = Apollo.MutationResult<TurnOnFanMutation>;
export type TurnOnFanMutationOptions = Apollo.BaseMutationOptions<TurnOnFanMutation, TurnOnFanMutationVariables>;
export const TurnOnLightningDocument = gql`
    mutation TurnOnLightning($turnOnLightningId: String!) {
  turnOnLightning(id: $turnOnLightningId)
}
    `;
export type TurnOnLightningMutationFn = Apollo.MutationFunction<TurnOnLightningMutation, TurnOnLightningMutationVariables>;

/**
 * __useTurnOnLightningMutation__
 *
 * To run a mutation, you first call `useTurnOnLightningMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTurnOnLightningMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [turnOnLightningMutation, { data, loading, error }] = useTurnOnLightningMutation({
 *   variables: {
 *      turnOnLightningId: // value for 'turnOnLightningId'
 *   },
 * });
 */
export function useTurnOnLightningMutation(baseOptions?: Apollo.MutationHookOptions<TurnOnLightningMutation, TurnOnLightningMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TurnOnLightningMutation, TurnOnLightningMutationVariables>(TurnOnLightningDocument, options);
      }
export type TurnOnLightningMutationHookResult = ReturnType<typeof useTurnOnLightningMutation>;
export type TurnOnLightningMutationResult = Apollo.MutationResult<TurnOnLightningMutation>;
export type TurnOnLightningMutationOptions = Apollo.BaseMutationOptions<TurnOnLightningMutation, TurnOnLightningMutationVariables>;
export const WaterPlantDocument = gql`
    mutation WaterPlant($waterPlantId: String!) {
  waterPlant(id: $waterPlantId)
}
    `;
export type WaterPlantMutationFn = Apollo.MutationFunction<WaterPlantMutation, WaterPlantMutationVariables>;

/**
 * __useWaterPlantMutation__
 *
 * To run a mutation, you first call `useWaterPlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWaterPlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [waterPlantMutation, { data, loading, error }] = useWaterPlantMutation({
 *   variables: {
 *      waterPlantId: // value for 'waterPlantId'
 *   },
 * });
 */
export function useWaterPlantMutation(baseOptions?: Apollo.MutationHookOptions<WaterPlantMutation, WaterPlantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WaterPlantMutation, WaterPlantMutationVariables>(WaterPlantDocument, options);
      }
export type WaterPlantMutationHookResult = ReturnType<typeof useWaterPlantMutation>;
export type WaterPlantMutationResult = Apollo.MutationResult<WaterPlantMutation>;
export type WaterPlantMutationOptions = Apollo.BaseMutationOptions<WaterPlantMutation, WaterPlantMutationVariables>;
export const FindAllPlantsDocument = gql`
    query FindAllPlants {
  findAllPlants {
    ...Plant
  }
}
    ${PlantFragmentDoc}`;

/**
 * __useFindAllPlantsQuery__
 *
 * To run a query within a React component, call `useFindAllPlantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllPlantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllPlantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllPlantsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllPlantsQuery, FindAllPlantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllPlantsQuery, FindAllPlantsQueryVariables>(FindAllPlantsDocument, options);
      }
export function useFindAllPlantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllPlantsQuery, FindAllPlantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllPlantsQuery, FindAllPlantsQueryVariables>(FindAllPlantsDocument, options);
        }
export type FindAllPlantsQueryHookResult = ReturnType<typeof useFindAllPlantsQuery>;
export type FindAllPlantsLazyQueryHookResult = ReturnType<typeof useFindAllPlantsLazyQuery>;
export type FindAllPlantsQueryResult = Apollo.QueryResult<FindAllPlantsQuery, FindAllPlantsQueryVariables>;
export const FindPlantByIdDocument = gql`
    query FindPlantById($findPlantByIdId: String!) {
  findPlantById(id: $findPlantByIdId) {
    ...Plant
  }
}
    ${PlantFragmentDoc}`;

/**
 * __useFindPlantByIdQuery__
 *
 * To run a query within a React component, call `useFindPlantByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPlantByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPlantByIdQuery({
 *   variables: {
 *      findPlantByIdId: // value for 'findPlantByIdId'
 *   },
 * });
 */
export function useFindPlantByIdQuery(baseOptions: Apollo.QueryHookOptions<FindPlantByIdQuery, FindPlantByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPlantByIdQuery, FindPlantByIdQueryVariables>(FindPlantByIdDocument, options);
      }
export function useFindPlantByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPlantByIdQuery, FindPlantByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPlantByIdQuery, FindPlantByIdQueryVariables>(FindPlantByIdDocument, options);
        }
export type FindPlantByIdQueryHookResult = ReturnType<typeof useFindPlantByIdQuery>;
export type FindPlantByIdLazyQueryHookResult = ReturnType<typeof useFindPlantByIdLazyQuery>;
export type FindPlantByIdQueryResult = Apollo.QueryResult<FindPlantByIdQuery, FindPlantByIdQueryVariables>;