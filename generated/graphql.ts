import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Continent: any;
  Status: any;
  float8: any;
  timestamp: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "Category" */
export type Category = {
  __typename?: 'Category';
  /** An array relationship */
  StockItems: Array<StockItem>;
  /** An aggregate relationship */
  StockItems_aggregate: StockItem_Aggregate;
  createdAt: Scalars['timestamp'];
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamp'];
};


/** columns and relationships of "Category" */
export type CategoryStockItemsArgs = {
  distinct_on?: InputMaybe<Array<StockItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StockItem_Order_By>>;
  where?: InputMaybe<StockItem_Bool_Exp>;
};


/** columns and relationships of "Category" */
export type CategoryStockItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<StockItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StockItem_Order_By>>;
  where?: InputMaybe<StockItem_Bool_Exp>;
};

/** aggregated selection of "Category" */
export type Category_Aggregate = {
  __typename?: 'Category_aggregate';
  aggregate?: Maybe<Category_Aggregate_Fields>;
  nodes: Array<Category>;
};

/** aggregate fields of "Category" */
export type Category_Aggregate_Fields = {
  __typename?: 'Category_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Category_Max_Fields>;
  min?: Maybe<Category_Min_Fields>;
};


/** aggregate fields of "Category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  StockItems?: InputMaybe<StockItem_Bool_Exp>;
  _and?: InputMaybe<Array<Category_Bool_Exp>>;
  _not?: InputMaybe<Category_Bool_Exp>;
  _or?: InputMaybe<Array<Category_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Category" */
export enum Category_Constraint {
  /** unique or primary key constraint */
  CategoryIdKey = 'Category_id_key',
  /** unique or primary key constraint */
  CategoryPkey = 'Category_pkey'
}

/** input type for inserting data into table "Category" */
export type Category_Insert_Input = {
  StockItems?: InputMaybe<StockItem_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: 'Category_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: 'Category_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "Category" */
export type Category_Mutation_Response = {
  __typename?: 'Category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "Category" */
export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Category_On_Conflict>;
};

/** on_conflict condition type for table "Category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns?: Array<Category_Update_Column>;
  where?: InputMaybe<Category_Bool_Exp>;
};

/** Ordering options when selecting data from "Category". */
export type Category_Order_By = {
  StockItems_aggregate?: InputMaybe<StockItem_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Category */
export type Category_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Category" */
export enum Category_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "Category" */
export type Category_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "Category" */
export enum Category_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Boolean expression to compare columns of type "Continent". All fields are combined with logical 'AND'. */
export type Continent_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Continent']>;
  _gt?: InputMaybe<Scalars['Continent']>;
  _gte?: InputMaybe<Scalars['Continent']>;
  _in?: InputMaybe<Array<Scalars['Continent']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Continent']>;
  _lte?: InputMaybe<Scalars['Continent']>;
  _neq?: InputMaybe<Scalars['Continent']>;
  _nin?: InputMaybe<Array<Scalars['Continent']>>;
};

/** columns and relationships of "Country" */
export type Country = {
  __typename?: 'Country';
  /** An array relationship */
  CountryRegions: Array<CountryRegion>;
  /** An aggregate relationship */
  CountryRegions_aggregate: CountryRegion_Aggregate;
  /** An array relationship */
  Orders: Array<Order>;
  /** An aggregate relationship */
  Orders_aggregate: Order_Aggregate;
  /** An array relationship */
  Suppliers: Array<Supplier>;
  /** An aggregate relationship */
  Suppliers_aggregate: Supplier_Aggregate;
  code: Scalars['String'];
  continent: Scalars['Continent'];
  createdAt: Scalars['timestamp'];
  currency: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  phoneCode: Scalars['String'];
  taxRate?: Maybe<Scalars['float8']>;
  updatedAt: Scalars['timestamp'];
};


/** columns and relationships of "Country" */
export type CountryCountryRegionsArgs = {
  distinct_on?: InputMaybe<Array<CountryRegion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CountryRegion_Order_By>>;
  where?: InputMaybe<CountryRegion_Bool_Exp>;
};


/** columns and relationships of "Country" */
export type CountryCountryRegions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CountryRegion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CountryRegion_Order_By>>;
  where?: InputMaybe<CountryRegion_Bool_Exp>;
};


/** columns and relationships of "Country" */
export type CountryOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** columns and relationships of "Country" */
export type CountryOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** columns and relationships of "Country" */
export type CountrySuppliersArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supplier_Order_By>>;
  where?: InputMaybe<Supplier_Bool_Exp>;
};


/** columns and relationships of "Country" */
export type CountrySuppliers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supplier_Order_By>>;
  where?: InputMaybe<Supplier_Bool_Exp>;
};

/** columns and relationships of "CountryRegion" */
export type CountryRegion = {
  __typename?: 'CountryRegion';
  /** An object relationship */
  Country: Country;
  code: Scalars['String'];
  countryId: Scalars['String'];
  createdAt: Scalars['timestamp'];
  id: Scalars['String'];
  name: Scalars['String'];
  taxRate?: Maybe<Scalars['float8']>;
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "CountryRegion" */
export type CountryRegion_Aggregate = {
  __typename?: 'CountryRegion_aggregate';
  aggregate?: Maybe<CountryRegion_Aggregate_Fields>;
  nodes: Array<CountryRegion>;
};

/** aggregate fields of "CountryRegion" */
export type CountryRegion_Aggregate_Fields = {
  __typename?: 'CountryRegion_aggregate_fields';
  avg?: Maybe<CountryRegion_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<CountryRegion_Max_Fields>;
  min?: Maybe<CountryRegion_Min_Fields>;
  stddev?: Maybe<CountryRegion_Stddev_Fields>;
  stddev_pop?: Maybe<CountryRegion_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<CountryRegion_Stddev_Samp_Fields>;
  sum?: Maybe<CountryRegion_Sum_Fields>;
  var_pop?: Maybe<CountryRegion_Var_Pop_Fields>;
  var_samp?: Maybe<CountryRegion_Var_Samp_Fields>;
  variance?: Maybe<CountryRegion_Variance_Fields>;
};


/** aggregate fields of "CountryRegion" */
export type CountryRegion_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CountryRegion_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "CountryRegion" */
export type CountryRegion_Aggregate_Order_By = {
  avg?: InputMaybe<CountryRegion_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<CountryRegion_Max_Order_By>;
  min?: InputMaybe<CountryRegion_Min_Order_By>;
  stddev?: InputMaybe<CountryRegion_Stddev_Order_By>;
  stddev_pop?: InputMaybe<CountryRegion_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<CountryRegion_Stddev_Samp_Order_By>;
  sum?: InputMaybe<CountryRegion_Sum_Order_By>;
  var_pop?: InputMaybe<CountryRegion_Var_Pop_Order_By>;
  var_samp?: InputMaybe<CountryRegion_Var_Samp_Order_By>;
  variance?: InputMaybe<CountryRegion_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "CountryRegion" */
export type CountryRegion_Arr_Rel_Insert_Input = {
  data: Array<CountryRegion_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<CountryRegion_On_Conflict>;
};

/** aggregate avg on columns */
export type CountryRegion_Avg_Fields = {
  __typename?: 'CountryRegion_avg_fields';
  taxRate?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "CountryRegion" */
export type CountryRegion_Avg_Order_By = {
  taxRate?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "CountryRegion". All fields are combined with a logical 'AND'. */
export type CountryRegion_Bool_Exp = {
  Country?: InputMaybe<Country_Bool_Exp>;
  _and?: InputMaybe<Array<CountryRegion_Bool_Exp>>;
  _not?: InputMaybe<CountryRegion_Bool_Exp>;
  _or?: InputMaybe<Array<CountryRegion_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  countryId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  taxRate?: InputMaybe<Float8_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "CountryRegion" */
export enum CountryRegion_Constraint {
  /** unique or primary key constraint */
  CountryRegionIdKey = 'CountryRegion_id_key',
  /** unique or primary key constraint */
  CountryRegionPkey = 'CountryRegion_pkey'
}

/** input type for incrementing numeric columns in table "CountryRegion" */
export type CountryRegion_Inc_Input = {
  taxRate?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "CountryRegion" */
export type CountryRegion_Insert_Input = {
  Country?: InputMaybe<Country_Obj_Rel_Insert_Input>;
  code?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  taxRate?: InputMaybe<Scalars['float8']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type CountryRegion_Max_Fields = {
  __typename?: 'CountryRegion_max_fields';
  code?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  taxRate?: Maybe<Scalars['float8']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "CountryRegion" */
export type CountryRegion_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  countryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type CountryRegion_Min_Fields = {
  __typename?: 'CountryRegion_min_fields';
  code?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  taxRate?: Maybe<Scalars['float8']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "CountryRegion" */
export type CountryRegion_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  countryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "CountryRegion" */
export type CountryRegion_Mutation_Response = {
  __typename?: 'CountryRegion_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CountryRegion>;
};

/** on_conflict condition type for table "CountryRegion" */
export type CountryRegion_On_Conflict = {
  constraint: CountryRegion_Constraint;
  update_columns?: Array<CountryRegion_Update_Column>;
  where?: InputMaybe<CountryRegion_Bool_Exp>;
};

/** Ordering options when selecting data from "CountryRegion". */
export type CountryRegion_Order_By = {
  Country?: InputMaybe<Country_Order_By>;
  code?: InputMaybe<Order_By>;
  countryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: CountryRegion */
export type CountryRegion_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "CountryRegion" */
export enum CountryRegion_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CountryId = 'countryId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TaxRate = 'taxRate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "CountryRegion" */
export type CountryRegion_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  taxRate?: InputMaybe<Scalars['float8']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type CountryRegion_Stddev_Fields = {
  __typename?: 'CountryRegion_stddev_fields';
  taxRate?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "CountryRegion" */
export type CountryRegion_Stddev_Order_By = {
  taxRate?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type CountryRegion_Stddev_Pop_Fields = {
  __typename?: 'CountryRegion_stddev_pop_fields';
  taxRate?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "CountryRegion" */
export type CountryRegion_Stddev_Pop_Order_By = {
  taxRate?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type CountryRegion_Stddev_Samp_Fields = {
  __typename?: 'CountryRegion_stddev_samp_fields';
  taxRate?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "CountryRegion" */
export type CountryRegion_Stddev_Samp_Order_By = {
  taxRate?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type CountryRegion_Sum_Fields = {
  __typename?: 'CountryRegion_sum_fields';
  taxRate?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "CountryRegion" */
export type CountryRegion_Sum_Order_By = {
  taxRate?: InputMaybe<Order_By>;
};

/** update columns of table "CountryRegion" */
export enum CountryRegion_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CountryId = 'countryId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TaxRate = 'taxRate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type CountryRegion_Var_Pop_Fields = {
  __typename?: 'CountryRegion_var_pop_fields';
  taxRate?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "CountryRegion" */
export type CountryRegion_Var_Pop_Order_By = {
  taxRate?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type CountryRegion_Var_Samp_Fields = {
  __typename?: 'CountryRegion_var_samp_fields';
  taxRate?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "CountryRegion" */
export type CountryRegion_Var_Samp_Order_By = {
  taxRate?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type CountryRegion_Variance_Fields = {
  __typename?: 'CountryRegion_variance_fields';
  taxRate?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "CountryRegion" */
export type CountryRegion_Variance_Order_By = {
  taxRate?: InputMaybe<Order_By>;
};

/** aggregated selection of "Country" */
export type Country_Aggregate = {
  __typename?: 'Country_aggregate';
  aggregate?: Maybe<Country_Aggregate_Fields>;
  nodes: Array<Country>;
};

/** aggregate fields of "Country" */
export type Country_Aggregate_Fields = {
  __typename?: 'Country_aggregate_fields';
  avg?: Maybe<Country_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Country_Max_Fields>;
  min?: Maybe<Country_Min_Fields>;
  stddev?: Maybe<Country_Stddev_Fields>;
  stddev_pop?: Maybe<Country_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Country_Stddev_Samp_Fields>;
  sum?: Maybe<Country_Sum_Fields>;
  var_pop?: Maybe<Country_Var_Pop_Fields>;
  var_samp?: Maybe<Country_Var_Samp_Fields>;
  variance?: Maybe<Country_Variance_Fields>;
};


/** aggregate fields of "Country" */
export type Country_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Country_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Country_Avg_Fields = {
  __typename?: 'Country_avg_fields';
  taxRate?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Country". All fields are combined with a logical 'AND'. */
export type Country_Bool_Exp = {
  CountryRegions?: InputMaybe<CountryRegion_Bool_Exp>;
  Orders?: InputMaybe<Order_Bool_Exp>;
  Suppliers?: InputMaybe<Supplier_Bool_Exp>;
  _and?: InputMaybe<Array<Country_Bool_Exp>>;
  _not?: InputMaybe<Country_Bool_Exp>;
  _or?: InputMaybe<Array<Country_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  continent?: InputMaybe<Continent_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phoneCode?: InputMaybe<String_Comparison_Exp>;
  taxRate?: InputMaybe<Float8_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Country" */
export enum Country_Constraint {
  /** unique or primary key constraint */
  CountryIdKey = 'Country_id_key',
  /** unique or primary key constraint */
  CountryPkey = 'Country_pkey'
}

/** input type for incrementing numeric columns in table "Country" */
export type Country_Inc_Input = {
  taxRate?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "Country" */
export type Country_Insert_Input = {
  CountryRegions?: InputMaybe<CountryRegion_Arr_Rel_Insert_Input>;
  Orders?: InputMaybe<Order_Arr_Rel_Insert_Input>;
  Suppliers?: InputMaybe<Supplier_Arr_Rel_Insert_Input>;
  code?: InputMaybe<Scalars['String']>;
  continent?: InputMaybe<Scalars['Continent']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  currency?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneCode?: InputMaybe<Scalars['String']>;
  taxRate?: InputMaybe<Scalars['float8']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Country_Max_Fields = {
  __typename?: 'Country_max_fields';
  code?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['Continent']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  taxRate?: Maybe<Scalars['float8']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Country_Min_Fields = {
  __typename?: 'Country_min_fields';
  code?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['Continent']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  taxRate?: Maybe<Scalars['float8']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "Country" */
export type Country_Mutation_Response = {
  __typename?: 'Country_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Country>;
};

/** input type for inserting object relation for remote table "Country" */
export type Country_Obj_Rel_Insert_Input = {
  data: Country_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Country_On_Conflict>;
};

/** on_conflict condition type for table "Country" */
export type Country_On_Conflict = {
  constraint: Country_Constraint;
  update_columns?: Array<Country_Update_Column>;
  where?: InputMaybe<Country_Bool_Exp>;
};

/** Ordering options when selecting data from "Country". */
export type Country_Order_By = {
  CountryRegions_aggregate?: InputMaybe<CountryRegion_Aggregate_Order_By>;
  Orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>;
  Suppliers_aggregate?: InputMaybe<Supplier_Aggregate_Order_By>;
  code?: InputMaybe<Order_By>;
  continent?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phoneCode?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Country */
export type Country_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Country" */
export enum Country_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Continent = 'continent',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Currency = 'currency',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneCode = 'phoneCode',
  /** column name */
  TaxRate = 'taxRate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "Country" */
export type Country_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  continent?: InputMaybe<Scalars['Continent']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  currency?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneCode?: InputMaybe<Scalars['String']>;
  taxRate?: InputMaybe<Scalars['float8']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Country_Stddev_Fields = {
  __typename?: 'Country_stddev_fields';
  taxRate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Country_Stddev_Pop_Fields = {
  __typename?: 'Country_stddev_pop_fields';
  taxRate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Country_Stddev_Samp_Fields = {
  __typename?: 'Country_stddev_samp_fields';
  taxRate?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Country_Sum_Fields = {
  __typename?: 'Country_sum_fields';
  taxRate?: Maybe<Scalars['float8']>;
};

/** update columns of table "Country" */
export enum Country_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Continent = 'continent',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Currency = 'currency',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneCode = 'phoneCode',
  /** column name */
  TaxRate = 'taxRate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Country_Var_Pop_Fields = {
  __typename?: 'Country_var_pop_fields';
  taxRate?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Country_Var_Samp_Fields = {
  __typename?: 'Country_var_samp_fields';
  taxRate?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Country_Variance_Fields = {
  __typename?: 'Country_variance_fields';
  taxRate?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Order" */
export type Order = {
  __typename?: 'Order';
  /** An object relationship */
  Country: Country;
  /** An array relationship */
  OrderItems: Array<OrderItem>;
  /** An aggregate relationship */
  OrderItems_aggregate: OrderItem_Aggregate;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  countryId: Scalars['String'];
  createdAt: Scalars['timestamp'];
  createdBy?: Maybe<Scalars['String']>;
  currency: Scalars['String'];
  dipatchBy: Scalars['timestamp'];
  emailAddress: Scalars['String'];
  externalReferenceNumber: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['String'];
  orderDate: Scalars['timestamp'];
  orderId: Scalars['Int'];
  /** An array relationship */
  orderNotes: Array<OrderNotes>;
  /** An aggregate relationship */
  orderNotes_aggregate: OrderNotes_Aggregate;
  phoneNumber?: Maybe<Scalars['String']>;
  postCode: Scalars['String'];
  postageCost: Scalars['float8'];
  postalServiceId: Scalars['String'];
  postalTrackingNumber: Scalars['String'];
  processed: Scalars['Boolean'];
  referenceNumber: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  shippingAddress: Scalars['String'];
  source: Scalars['String'];
  status: Scalars['Status'];
  subSource: Scalars['String'];
  tax: Scalars['float8'];
  totalCost: Scalars['float8'];
  town?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamp'];
};


/** columns and relationships of "Order" */
export type OrderOrderItemsArgs = {
  distinct_on?: InputMaybe<Array<OrderItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItem_Order_By>>;
  where?: InputMaybe<OrderItem_Bool_Exp>;
};


/** columns and relationships of "Order" */
export type OrderOrderItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItem_Order_By>>;
  where?: InputMaybe<OrderItem_Bool_Exp>;
};


/** columns and relationships of "Order" */
export type OrderOrderNotesArgs = {
  distinct_on?: InputMaybe<Array<OrderNotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderNotes_Order_By>>;
  where?: InputMaybe<OrderNotes_Bool_Exp>;
};


/** columns and relationships of "Order" */
export type OrderOrderNotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderNotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderNotes_Order_By>>;
  where?: InputMaybe<OrderNotes_Bool_Exp>;
};

/** columns and relationships of "OrderFolder" */
export type OrderFolder = {
  __typename?: 'OrderFolder';
  createdAt: Scalars['timestamp'];
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "OrderFolder" */
export type OrderFolder_Aggregate = {
  __typename?: 'OrderFolder_aggregate';
  aggregate?: Maybe<OrderFolder_Aggregate_Fields>;
  nodes: Array<OrderFolder>;
};

/** aggregate fields of "OrderFolder" */
export type OrderFolder_Aggregate_Fields = {
  __typename?: 'OrderFolder_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<OrderFolder_Max_Fields>;
  min?: Maybe<OrderFolder_Min_Fields>;
};


/** aggregate fields of "OrderFolder" */
export type OrderFolder_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<OrderFolder_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "OrderFolder". All fields are combined with a logical 'AND'. */
export type OrderFolder_Bool_Exp = {
  _and?: InputMaybe<Array<OrderFolder_Bool_Exp>>;
  _not?: InputMaybe<OrderFolder_Bool_Exp>;
  _or?: InputMaybe<Array<OrderFolder_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "OrderFolder" */
export enum OrderFolder_Constraint {
  /** unique or primary key constraint */
  OrderFolderIdKey = 'OrderFolder_id_key',
  /** unique or primary key constraint */
  OrderFolderPkey = 'OrderFolder_pkey'
}

/** input type for inserting data into table "OrderFolder" */
export type OrderFolder_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type OrderFolder_Max_Fields = {
  __typename?: 'OrderFolder_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type OrderFolder_Min_Fields = {
  __typename?: 'OrderFolder_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "OrderFolder" */
export type OrderFolder_Mutation_Response = {
  __typename?: 'OrderFolder_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OrderFolder>;
};

/** on_conflict condition type for table "OrderFolder" */
export type OrderFolder_On_Conflict = {
  constraint: OrderFolder_Constraint;
  update_columns?: Array<OrderFolder_Update_Column>;
  where?: InputMaybe<OrderFolder_Bool_Exp>;
};

/** Ordering options when selecting data from "OrderFolder". */
export type OrderFolder_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: OrderFolder */
export type OrderFolder_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "OrderFolder" */
export enum OrderFolder_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "OrderFolder" */
export type OrderFolder_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "OrderFolder" */
export enum OrderFolder_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "OrderItem" */
export type OrderItem = {
  __typename?: 'OrderItem';
  /** An object relationship */
  Order: Order;
  createdAt: Scalars['timestamp'];
  id: Scalars['String'];
  isService: Scalars['Boolean'];
  lineDiscount: Scalars['float8'];
  orderId: Scalars['String'];
  price: Scalars['float8'];
  priceIncTax: Scalars['float8'];
  productId: Scalars['String'];
  productName: Scalars['String'];
  quantity: Scalars['Int'];
  salesTax: Scalars['float8'];
  taxCostInclusive: Scalars['Boolean'];
  taxRate: Scalars['float8'];
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "OrderItem" */
export type OrderItem_Aggregate = {
  __typename?: 'OrderItem_aggregate';
  aggregate?: Maybe<OrderItem_Aggregate_Fields>;
  nodes: Array<OrderItem>;
};

/** aggregate fields of "OrderItem" */
export type OrderItem_Aggregate_Fields = {
  __typename?: 'OrderItem_aggregate_fields';
  avg?: Maybe<OrderItem_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<OrderItem_Max_Fields>;
  min?: Maybe<OrderItem_Min_Fields>;
  stddev?: Maybe<OrderItem_Stddev_Fields>;
  stddev_pop?: Maybe<OrderItem_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<OrderItem_Stddev_Samp_Fields>;
  sum?: Maybe<OrderItem_Sum_Fields>;
  var_pop?: Maybe<OrderItem_Var_Pop_Fields>;
  var_samp?: Maybe<OrderItem_Var_Samp_Fields>;
  variance?: Maybe<OrderItem_Variance_Fields>;
};


/** aggregate fields of "OrderItem" */
export type OrderItem_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<OrderItem_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "OrderItem" */
export type OrderItem_Aggregate_Order_By = {
  avg?: InputMaybe<OrderItem_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<OrderItem_Max_Order_By>;
  min?: InputMaybe<OrderItem_Min_Order_By>;
  stddev?: InputMaybe<OrderItem_Stddev_Order_By>;
  stddev_pop?: InputMaybe<OrderItem_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<OrderItem_Stddev_Samp_Order_By>;
  sum?: InputMaybe<OrderItem_Sum_Order_By>;
  var_pop?: InputMaybe<OrderItem_Var_Pop_Order_By>;
  var_samp?: InputMaybe<OrderItem_Var_Samp_Order_By>;
  variance?: InputMaybe<OrderItem_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "OrderItem" */
export type OrderItem_Arr_Rel_Insert_Input = {
  data: Array<OrderItem_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<OrderItem_On_Conflict>;
};

/** aggregate avg on columns */
export type OrderItem_Avg_Fields = {
  __typename?: 'OrderItem_avg_fields';
  lineDiscount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceIncTax?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  salesTax?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "OrderItem" */
export type OrderItem_Avg_Order_By = {
  lineDiscount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  priceIncTax?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  salesTax?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "OrderItem". All fields are combined with a logical 'AND'. */
export type OrderItem_Bool_Exp = {
  Order?: InputMaybe<Order_Bool_Exp>;
  _and?: InputMaybe<Array<OrderItem_Bool_Exp>>;
  _not?: InputMaybe<OrderItem_Bool_Exp>;
  _or?: InputMaybe<Array<OrderItem_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  isService?: InputMaybe<Boolean_Comparison_Exp>;
  lineDiscount?: InputMaybe<Float8_Comparison_Exp>;
  orderId?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Float8_Comparison_Exp>;
  priceIncTax?: InputMaybe<Float8_Comparison_Exp>;
  productId?: InputMaybe<String_Comparison_Exp>;
  productName?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  salesTax?: InputMaybe<Float8_Comparison_Exp>;
  taxCostInclusive?: InputMaybe<Boolean_Comparison_Exp>;
  taxRate?: InputMaybe<Float8_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "OrderItem" */
export enum OrderItem_Constraint {
  /** unique or primary key constraint */
  OrderItemIdKey = 'OrderItem_id_key',
  /** unique or primary key constraint */
  OrderItemPkey = 'OrderItem_pkey'
}

/** input type for incrementing numeric columns in table "OrderItem" */
export type OrderItem_Inc_Input = {
  lineDiscount?: InputMaybe<Scalars['float8']>;
  price?: InputMaybe<Scalars['float8']>;
  priceIncTax?: InputMaybe<Scalars['float8']>;
  quantity?: InputMaybe<Scalars['Int']>;
  salesTax?: InputMaybe<Scalars['float8']>;
  taxRate?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "OrderItem" */
export type OrderItem_Insert_Input = {
  Order?: InputMaybe<Order_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  isService?: InputMaybe<Scalars['Boolean']>;
  lineDiscount?: InputMaybe<Scalars['float8']>;
  orderId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['float8']>;
  priceIncTax?: InputMaybe<Scalars['float8']>;
  productId?: InputMaybe<Scalars['String']>;
  productName?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  salesTax?: InputMaybe<Scalars['float8']>;
  taxCostInclusive?: InputMaybe<Scalars['Boolean']>;
  taxRate?: InputMaybe<Scalars['float8']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type OrderItem_Max_Fields = {
  __typename?: 'OrderItem_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  lineDiscount?: Maybe<Scalars['float8']>;
  orderId?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  priceIncTax?: Maybe<Scalars['float8']>;
  productId?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  salesTax?: Maybe<Scalars['float8']>;
  taxRate?: Maybe<Scalars['float8']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "OrderItem" */
export type OrderItem_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lineDiscount?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  priceIncTax?: InputMaybe<Order_By>;
  productId?: InputMaybe<Order_By>;
  productName?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  salesTax?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type OrderItem_Min_Fields = {
  __typename?: 'OrderItem_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  lineDiscount?: Maybe<Scalars['float8']>;
  orderId?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  priceIncTax?: Maybe<Scalars['float8']>;
  productId?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  salesTax?: Maybe<Scalars['float8']>;
  taxRate?: Maybe<Scalars['float8']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "OrderItem" */
export type OrderItem_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lineDiscount?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  priceIncTax?: InputMaybe<Order_By>;
  productId?: InputMaybe<Order_By>;
  productName?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  salesTax?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "OrderItem" */
export type OrderItem_Mutation_Response = {
  __typename?: 'OrderItem_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OrderItem>;
};

/** on_conflict condition type for table "OrderItem" */
export type OrderItem_On_Conflict = {
  constraint: OrderItem_Constraint;
  update_columns?: Array<OrderItem_Update_Column>;
  where?: InputMaybe<OrderItem_Bool_Exp>;
};

/** Ordering options when selecting data from "OrderItem". */
export type OrderItem_Order_By = {
  Order?: InputMaybe<Order_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isService?: InputMaybe<Order_By>;
  lineDiscount?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  priceIncTax?: InputMaybe<Order_By>;
  productId?: InputMaybe<Order_By>;
  productName?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  salesTax?: InputMaybe<Order_By>;
  taxCostInclusive?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: OrderItem */
export type OrderItem_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "OrderItem" */
export enum OrderItem_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsService = 'isService',
  /** column name */
  LineDiscount = 'lineDiscount',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  Price = 'price',
  /** column name */
  PriceIncTax = 'priceIncTax',
  /** column name */
  ProductId = 'productId',
  /** column name */
  ProductName = 'productName',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  SalesTax = 'salesTax',
  /** column name */
  TaxCostInclusive = 'taxCostInclusive',
  /** column name */
  TaxRate = 'taxRate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "OrderItem" */
export type OrderItem_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  isService?: InputMaybe<Scalars['Boolean']>;
  lineDiscount?: InputMaybe<Scalars['float8']>;
  orderId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['float8']>;
  priceIncTax?: InputMaybe<Scalars['float8']>;
  productId?: InputMaybe<Scalars['String']>;
  productName?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  salesTax?: InputMaybe<Scalars['float8']>;
  taxCostInclusive?: InputMaybe<Scalars['Boolean']>;
  taxRate?: InputMaybe<Scalars['float8']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type OrderItem_Stddev_Fields = {
  __typename?: 'OrderItem_stddev_fields';
  lineDiscount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceIncTax?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  salesTax?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "OrderItem" */
export type OrderItem_Stddev_Order_By = {
  lineDiscount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  priceIncTax?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  salesTax?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type OrderItem_Stddev_Pop_Fields = {
  __typename?: 'OrderItem_stddev_pop_fields';
  lineDiscount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceIncTax?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  salesTax?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "OrderItem" */
export type OrderItem_Stddev_Pop_Order_By = {
  lineDiscount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  priceIncTax?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  salesTax?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type OrderItem_Stddev_Samp_Fields = {
  __typename?: 'OrderItem_stddev_samp_fields';
  lineDiscount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceIncTax?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  salesTax?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "OrderItem" */
export type OrderItem_Stddev_Samp_Order_By = {
  lineDiscount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  priceIncTax?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  salesTax?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type OrderItem_Sum_Fields = {
  __typename?: 'OrderItem_sum_fields';
  lineDiscount?: Maybe<Scalars['float8']>;
  price?: Maybe<Scalars['float8']>;
  priceIncTax?: Maybe<Scalars['float8']>;
  quantity?: Maybe<Scalars['Int']>;
  salesTax?: Maybe<Scalars['float8']>;
  taxRate?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "OrderItem" */
export type OrderItem_Sum_Order_By = {
  lineDiscount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  priceIncTax?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  salesTax?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
};

/** update columns of table "OrderItem" */
export enum OrderItem_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsService = 'isService',
  /** column name */
  LineDiscount = 'lineDiscount',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  Price = 'price',
  /** column name */
  PriceIncTax = 'priceIncTax',
  /** column name */
  ProductId = 'productId',
  /** column name */
  ProductName = 'productName',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  SalesTax = 'salesTax',
  /** column name */
  TaxCostInclusive = 'taxCostInclusive',
  /** column name */
  TaxRate = 'taxRate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type OrderItem_Var_Pop_Fields = {
  __typename?: 'OrderItem_var_pop_fields';
  lineDiscount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceIncTax?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  salesTax?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "OrderItem" */
export type OrderItem_Var_Pop_Order_By = {
  lineDiscount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  priceIncTax?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  salesTax?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type OrderItem_Var_Samp_Fields = {
  __typename?: 'OrderItem_var_samp_fields';
  lineDiscount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceIncTax?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  salesTax?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "OrderItem" */
export type OrderItem_Var_Samp_Order_By = {
  lineDiscount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  priceIncTax?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  salesTax?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type OrderItem_Variance_Fields = {
  __typename?: 'OrderItem_variance_fields';
  lineDiscount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceIncTax?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  salesTax?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "OrderItem" */
export type OrderItem_Variance_Order_By = {
  lineDiscount?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  priceIncTax?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  salesTax?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
};

/** aggregated selection of "Order" */
export type Order_Aggregate = {
  __typename?: 'Order_aggregate';
  aggregate?: Maybe<Order_Aggregate_Fields>;
  nodes: Array<Order>;
};

/** aggregate fields of "Order" */
export type Order_Aggregate_Fields = {
  __typename?: 'Order_aggregate_fields';
  avg?: Maybe<Order_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Max_Fields>;
  min?: Maybe<Order_Min_Fields>;
  stddev?: Maybe<Order_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Sum_Fields>;
  var_pop?: Maybe<Order_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Var_Samp_Fields>;
  variance?: Maybe<Order_Variance_Fields>;
};


/** aggregate fields of "Order" */
export type Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Order" */
export type Order_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Max_Order_By>;
  min?: InputMaybe<Order_Min_Order_By>;
  stddev?: InputMaybe<Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Order" */
export type Order_Arr_Rel_Insert_Input = {
  data: Array<Order_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Avg_Fields = {
  __typename?: 'Order_avg_fields';
  orderId?: Maybe<Scalars['Float']>;
  postageCost?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Order" */
export type Order_Avg_Order_By = {
  orderId?: InputMaybe<Order_By>;
  postageCost?: InputMaybe<Order_By>;
  tax?: InputMaybe<Order_By>;
  totalCost?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  Country?: InputMaybe<Country_Bool_Exp>;
  OrderItems?: InputMaybe<OrderItem_Bool_Exp>;
  _and?: InputMaybe<Array<Order_Bool_Exp>>;
  _not?: InputMaybe<Order_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Bool_Exp>>;
  address1?: InputMaybe<String_Comparison_Exp>;
  address2?: InputMaybe<String_Comparison_Exp>;
  address3?: InputMaybe<String_Comparison_Exp>;
  company?: InputMaybe<String_Comparison_Exp>;
  countryId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  createdBy?: InputMaybe<String_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  dipatchBy?: InputMaybe<Timestamp_Comparison_Exp>;
  emailAddress?: InputMaybe<String_Comparison_Exp>;
  externalReferenceNumber?: InputMaybe<String_Comparison_Exp>;
  fullName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  orderDate?: InputMaybe<Timestamp_Comparison_Exp>;
  orderId?: InputMaybe<Int_Comparison_Exp>;
  orderNotes?: InputMaybe<OrderNotes_Bool_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  postCode?: InputMaybe<String_Comparison_Exp>;
  postageCost?: InputMaybe<Float8_Comparison_Exp>;
  postalServiceId?: InputMaybe<String_Comparison_Exp>;
  postalTrackingNumber?: InputMaybe<String_Comparison_Exp>;
  processed?: InputMaybe<Boolean_Comparison_Exp>;
  referenceNumber?: InputMaybe<String_Comparison_Exp>;
  region?: InputMaybe<String_Comparison_Exp>;
  shippingAddress?: InputMaybe<String_Comparison_Exp>;
  source?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Status_Comparison_Exp>;
  subSource?: InputMaybe<String_Comparison_Exp>;
  tax?: InputMaybe<Float8_Comparison_Exp>;
  totalCost?: InputMaybe<Float8_Comparison_Exp>;
  town?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Order" */
export enum Order_Constraint {
  /** unique or primary key constraint */
  OrderIdKey = 'Order_id_key',
  /** unique or primary key constraint */
  OrderOrderIdKey = 'Order_orderId_key',
  /** unique or primary key constraint */
  OrderPkey = 'Order_pkey'
}

/** input type for incrementing numeric columns in table "Order" */
export type Order_Inc_Input = {
  orderId?: InputMaybe<Scalars['Int']>;
  postageCost?: InputMaybe<Scalars['float8']>;
  tax?: InputMaybe<Scalars['float8']>;
  totalCost?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "Order" */
export type Order_Insert_Input = {
  Country?: InputMaybe<Country_Obj_Rel_Insert_Input>;
  OrderItems?: InputMaybe<OrderItem_Arr_Rel_Insert_Input>;
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  address3?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  createdBy?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  dipatchBy?: InputMaybe<Scalars['timestamp']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  externalReferenceNumber?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  orderDate?: InputMaybe<Scalars['timestamp']>;
  orderId?: InputMaybe<Scalars['Int']>;
  orderNotes?: InputMaybe<OrderNotes_Arr_Rel_Insert_Input>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  postageCost?: InputMaybe<Scalars['float8']>;
  postalServiceId?: InputMaybe<Scalars['String']>;
  postalTrackingNumber?: InputMaybe<Scalars['String']>;
  processed?: InputMaybe<Scalars['Boolean']>;
  referenceNumber?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  shippingAddress?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Status']>;
  subSource?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<Scalars['float8']>;
  totalCost?: InputMaybe<Scalars['float8']>;
  town?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Order_Max_Fields = {
  __typename?: 'Order_max_fields';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  createdBy?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  dipatchBy?: Maybe<Scalars['timestamp']>;
  emailAddress?: Maybe<Scalars['String']>;
  externalReferenceNumber?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['timestamp']>;
  orderId?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  postageCost?: Maybe<Scalars['float8']>;
  postalServiceId?: Maybe<Scalars['String']>;
  postalTrackingNumber?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  shippingAddress?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Status']>;
  subSource?: Maybe<Scalars['String']>;
  tax?: Maybe<Scalars['float8']>;
  totalCost?: Maybe<Scalars['float8']>;
  town?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "Order" */
export type Order_Max_Order_By = {
  address1?: InputMaybe<Order_By>;
  address2?: InputMaybe<Order_By>;
  address3?: InputMaybe<Order_By>;
  company?: InputMaybe<Order_By>;
  countryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  dipatchBy?: InputMaybe<Order_By>;
  emailAddress?: InputMaybe<Order_By>;
  externalReferenceNumber?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderDate?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  postCode?: InputMaybe<Order_By>;
  postageCost?: InputMaybe<Order_By>;
  postalServiceId?: InputMaybe<Order_By>;
  postalTrackingNumber?: InputMaybe<Order_By>;
  referenceNumber?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  shippingAddress?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  subSource?: InputMaybe<Order_By>;
  tax?: InputMaybe<Order_By>;
  totalCost?: InputMaybe<Order_By>;
  town?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
  __typename?: 'Order_min_fields';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  createdBy?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  dipatchBy?: Maybe<Scalars['timestamp']>;
  emailAddress?: Maybe<Scalars['String']>;
  externalReferenceNumber?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['timestamp']>;
  orderId?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  postageCost?: Maybe<Scalars['float8']>;
  postalServiceId?: Maybe<Scalars['String']>;
  postalTrackingNumber?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  shippingAddress?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Status']>;
  subSource?: Maybe<Scalars['String']>;
  tax?: Maybe<Scalars['float8']>;
  totalCost?: Maybe<Scalars['float8']>;
  town?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "Order" */
export type Order_Min_Order_By = {
  address1?: InputMaybe<Order_By>;
  address2?: InputMaybe<Order_By>;
  address3?: InputMaybe<Order_By>;
  company?: InputMaybe<Order_By>;
  countryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  dipatchBy?: InputMaybe<Order_By>;
  emailAddress?: InputMaybe<Order_By>;
  externalReferenceNumber?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderDate?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  postCode?: InputMaybe<Order_By>;
  postageCost?: InputMaybe<Order_By>;
  postalServiceId?: InputMaybe<Order_By>;
  postalTrackingNumber?: InputMaybe<Order_By>;
  referenceNumber?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  shippingAddress?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  subSource?: InputMaybe<Order_By>;
  tax?: InputMaybe<Order_By>;
  totalCost?: InputMaybe<Order_By>;
  town?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Order" */
export type Order_Mutation_Response = {
  __typename?: 'Order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order>;
};

/** input type for inserting object relation for remote table "Order" */
export type Order_Obj_Rel_Insert_Input = {
  data: Order_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_On_Conflict>;
};

/** on_conflict condition type for table "Order" */
export type Order_On_Conflict = {
  constraint: Order_Constraint;
  update_columns?: Array<Order_Update_Column>;
  where?: InputMaybe<Order_Bool_Exp>;
};

/** Ordering options when selecting data from "Order". */
export type Order_Order_By = {
  Country?: InputMaybe<Country_Order_By>;
  OrderItems_aggregate?: InputMaybe<OrderItem_Aggregate_Order_By>;
  address1?: InputMaybe<Order_By>;
  address2?: InputMaybe<Order_By>;
  address3?: InputMaybe<Order_By>;
  company?: InputMaybe<Order_By>;
  countryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  dipatchBy?: InputMaybe<Order_By>;
  emailAddress?: InputMaybe<Order_By>;
  externalReferenceNumber?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderDate?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  orderNotes_aggregate?: InputMaybe<OrderNotes_Aggregate_Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  postCode?: InputMaybe<Order_By>;
  postageCost?: InputMaybe<Order_By>;
  postalServiceId?: InputMaybe<Order_By>;
  postalTrackingNumber?: InputMaybe<Order_By>;
  processed?: InputMaybe<Order_By>;
  referenceNumber?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  shippingAddress?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  subSource?: InputMaybe<Order_By>;
  tax?: InputMaybe<Order_By>;
  totalCost?: InputMaybe<Order_By>;
  town?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Order */
export type Order_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Order" */
export enum Order_Select_Column {
  /** column name */
  Address1 = 'address1',
  /** column name */
  Address2 = 'address2',
  /** column name */
  Address3 = 'address3',
  /** column name */
  Company = 'company',
  /** column name */
  CountryId = 'countryId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Currency = 'currency',
  /** column name */
  DipatchBy = 'dipatchBy',
  /** column name */
  EmailAddress = 'emailAddress',
  /** column name */
  ExternalReferenceNumber = 'externalReferenceNumber',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'orderDate',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PostCode = 'postCode',
  /** column name */
  PostageCost = 'postageCost',
  /** column name */
  PostalServiceId = 'postalServiceId',
  /** column name */
  PostalTrackingNumber = 'postalTrackingNumber',
  /** column name */
  Processed = 'processed',
  /** column name */
  ReferenceNumber = 'referenceNumber',
  /** column name */
  Region = 'region',
  /** column name */
  ShippingAddress = 'shippingAddress',
  /** column name */
  Source = 'source',
  /** column name */
  Status = 'status',
  /** column name */
  SubSource = 'subSource',
  /** column name */
  Tax = 'tax',
  /** column name */
  TotalCost = 'totalCost',
  /** column name */
  Town = 'town',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "Order" */
export type Order_Set_Input = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  address3?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  createdBy?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  dipatchBy?: InputMaybe<Scalars['timestamp']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  externalReferenceNumber?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  orderDate?: InputMaybe<Scalars['timestamp']>;
  orderId?: InputMaybe<Scalars['Int']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  postageCost?: InputMaybe<Scalars['float8']>;
  postalServiceId?: InputMaybe<Scalars['String']>;
  postalTrackingNumber?: InputMaybe<Scalars['String']>;
  processed?: InputMaybe<Scalars['Boolean']>;
  referenceNumber?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  shippingAddress?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Status']>;
  subSource?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<Scalars['float8']>;
  totalCost?: InputMaybe<Scalars['float8']>;
  town?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
  __typename?: 'Order_stddev_fields';
  orderId?: Maybe<Scalars['Float']>;
  postageCost?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Order" */
export type Order_Stddev_Order_By = {
  orderId?: InputMaybe<Order_By>;
  postageCost?: InputMaybe<Order_By>;
  tax?: InputMaybe<Order_By>;
  totalCost?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
  __typename?: 'Order_stddev_pop_fields';
  orderId?: Maybe<Scalars['Float']>;
  postageCost?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Order" */
export type Order_Stddev_Pop_Order_By = {
  orderId?: InputMaybe<Order_By>;
  postageCost?: InputMaybe<Order_By>;
  tax?: InputMaybe<Order_By>;
  totalCost?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
  __typename?: 'Order_stddev_samp_fields';
  orderId?: Maybe<Scalars['Float']>;
  postageCost?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Order" */
export type Order_Stddev_Samp_Order_By = {
  orderId?: InputMaybe<Order_By>;
  postageCost?: InputMaybe<Order_By>;
  tax?: InputMaybe<Order_By>;
  totalCost?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Sum_Fields = {
  __typename?: 'Order_sum_fields';
  orderId?: Maybe<Scalars['Int']>;
  postageCost?: Maybe<Scalars['float8']>;
  tax?: Maybe<Scalars['float8']>;
  totalCost?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "Order" */
export type Order_Sum_Order_By = {
  orderId?: InputMaybe<Order_By>;
  postageCost?: InputMaybe<Order_By>;
  tax?: InputMaybe<Order_By>;
  totalCost?: InputMaybe<Order_By>;
};

/** update columns of table "Order" */
export enum Order_Update_Column {
  /** column name */
  Address1 = 'address1',
  /** column name */
  Address2 = 'address2',
  /** column name */
  Address3 = 'address3',
  /** column name */
  Company = 'company',
  /** column name */
  CountryId = 'countryId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Currency = 'currency',
  /** column name */
  DipatchBy = 'dipatchBy',
  /** column name */
  EmailAddress = 'emailAddress',
  /** column name */
  ExternalReferenceNumber = 'externalReferenceNumber',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'orderDate',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PostCode = 'postCode',
  /** column name */
  PostageCost = 'postageCost',
  /** column name */
  PostalServiceId = 'postalServiceId',
  /** column name */
  PostalTrackingNumber = 'postalTrackingNumber',
  /** column name */
  Processed = 'processed',
  /** column name */
  ReferenceNumber = 'referenceNumber',
  /** column name */
  Region = 'region',
  /** column name */
  ShippingAddress = 'shippingAddress',
  /** column name */
  Source = 'source',
  /** column name */
  Status = 'status',
  /** column name */
  SubSource = 'subSource',
  /** column name */
  Tax = 'tax',
  /** column name */
  TotalCost = 'totalCost',
  /** column name */
  Town = 'town',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Order_Var_Pop_Fields = {
  __typename?: 'Order_var_pop_fields';
  orderId?: Maybe<Scalars['Float']>;
  postageCost?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Order" */
export type Order_Var_Pop_Order_By = {
  orderId?: InputMaybe<Order_By>;
  postageCost?: InputMaybe<Order_By>;
  tax?: InputMaybe<Order_By>;
  totalCost?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
  __typename?: 'Order_var_samp_fields';
  orderId?: Maybe<Scalars['Float']>;
  postageCost?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Order" */
export type Order_Var_Samp_Order_By = {
  orderId?: InputMaybe<Order_By>;
  postageCost?: InputMaybe<Order_By>;
  tax?: InputMaybe<Order_By>;
  totalCost?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Variance_Fields = {
  __typename?: 'Order_variance_fields';
  orderId?: Maybe<Scalars['Float']>;
  postageCost?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Order" */
export type Order_Variance_Order_By = {
  orderId?: InputMaybe<Order_By>;
  postageCost?: InputMaybe<Order_By>;
  tax?: InputMaybe<Order_By>;
  totalCost?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "Status". All fields are combined with logical 'AND'. */
export type Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Status']>;
  _gt?: InputMaybe<Scalars['Status']>;
  _gte?: InputMaybe<Scalars['Status']>;
  _in?: InputMaybe<Array<Scalars['Status']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Status']>;
  _lte?: InputMaybe<Scalars['Status']>;
  _neq?: InputMaybe<Scalars['Status']>;
  _nin?: InputMaybe<Array<Scalars['Status']>>;
};

/** columns and relationships of "Stock" */
export type Stock = {
  __typename?: 'Stock';
  createdAt: Scalars['timestamp'];
  id: Scalars['String'];
  productId: Scalars['String'];
  productName: Scalars['String'];
  quantity: Scalars['Int'];
  updatedAt: Scalars['timestamp'];
};

/** columns and relationships of "StockItem" */
export type StockItem = {
  __typename?: 'StockItem';
  /** An object relationship */
  Category: Category;
  available: Scalars['Int'];
  barcodeNumber: Scalars['String'];
  categoryId: Scalars['String'];
  createdAt: Scalars['timestamp'];
  depth: Scalars['float8'];
  description: Scalars['String'];
  due: Scalars['Int'];
  height: Scalars['float8'];
  id: Scalars['String'];
  inOrder: Scalars['Int'];
  metaData: Scalars['String'];
  minimumLevel: Scalars['Int'];
  productId: Scalars['String'];
  productName: Scalars['String'];
  purchasePrice: Scalars['float8'];
  quantity: Scalars['Int'];
  retailPrice: Scalars['float8'];
  taxRate: Scalars['float8'];
  updatedAt: Scalars['timestamp'];
  weight: Scalars['float8'];
  width: Scalars['float8'];
};

/** aggregated selection of "StockItem" */
export type StockItem_Aggregate = {
  __typename?: 'StockItem_aggregate';
  aggregate?: Maybe<StockItem_Aggregate_Fields>;
  nodes: Array<StockItem>;
};

/** aggregate fields of "StockItem" */
export type StockItem_Aggregate_Fields = {
  __typename?: 'StockItem_aggregate_fields';
  avg?: Maybe<StockItem_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<StockItem_Max_Fields>;
  min?: Maybe<StockItem_Min_Fields>;
  stddev?: Maybe<StockItem_Stddev_Fields>;
  stddev_pop?: Maybe<StockItem_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<StockItem_Stddev_Samp_Fields>;
  sum?: Maybe<StockItem_Sum_Fields>;
  var_pop?: Maybe<StockItem_Var_Pop_Fields>;
  var_samp?: Maybe<StockItem_Var_Samp_Fields>;
  variance?: Maybe<StockItem_Variance_Fields>;
};


/** aggregate fields of "StockItem" */
export type StockItem_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<StockItem_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "StockItem" */
export type StockItem_Aggregate_Order_By = {
  avg?: InputMaybe<StockItem_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<StockItem_Max_Order_By>;
  min?: InputMaybe<StockItem_Min_Order_By>;
  stddev?: InputMaybe<StockItem_Stddev_Order_By>;
  stddev_pop?: InputMaybe<StockItem_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<StockItem_Stddev_Samp_Order_By>;
  sum?: InputMaybe<StockItem_Sum_Order_By>;
  var_pop?: InputMaybe<StockItem_Var_Pop_Order_By>;
  var_samp?: InputMaybe<StockItem_Var_Samp_Order_By>;
  variance?: InputMaybe<StockItem_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "StockItem" */
export type StockItem_Arr_Rel_Insert_Input = {
  data: Array<StockItem_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<StockItem_On_Conflict>;
};

/** aggregate avg on columns */
export type StockItem_Avg_Fields = {
  __typename?: 'StockItem_avg_fields';
  available?: Maybe<Scalars['Float']>;
  depth?: Maybe<Scalars['Float']>;
  due?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  inOrder?: Maybe<Scalars['Float']>;
  minimumLevel?: Maybe<Scalars['Float']>;
  purchasePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  retailPrice?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "StockItem" */
export type StockItem_Avg_Order_By = {
  available?: InputMaybe<Order_By>;
  depth?: InputMaybe<Order_By>;
  due?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  inOrder?: InputMaybe<Order_By>;
  minimumLevel?: InputMaybe<Order_By>;
  purchasePrice?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  retailPrice?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "StockItem". All fields are combined with a logical 'AND'. */
export type StockItem_Bool_Exp = {
  Category?: InputMaybe<Category_Bool_Exp>;
  _and?: InputMaybe<Array<StockItem_Bool_Exp>>;
  _not?: InputMaybe<StockItem_Bool_Exp>;
  _or?: InputMaybe<Array<StockItem_Bool_Exp>>;
  available?: InputMaybe<Int_Comparison_Exp>;
  barcodeNumber?: InputMaybe<String_Comparison_Exp>;
  categoryId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  depth?: InputMaybe<Float8_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  due?: InputMaybe<Int_Comparison_Exp>;
  height?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  inOrder?: InputMaybe<Int_Comparison_Exp>;
  metaData?: InputMaybe<String_Comparison_Exp>;
  minimumLevel?: InputMaybe<Int_Comparison_Exp>;
  productId?: InputMaybe<String_Comparison_Exp>;
  productName?: InputMaybe<String_Comparison_Exp>;
  purchasePrice?: InputMaybe<Float8_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  retailPrice?: InputMaybe<Float8_Comparison_Exp>;
  taxRate?: InputMaybe<Float8_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  weight?: InputMaybe<Float8_Comparison_Exp>;
  width?: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "StockItem" */
export enum StockItem_Constraint {
  /** unique or primary key constraint */
  StockItemIdKey = 'StockItem_id_key',
  /** unique or primary key constraint */
  StockItemPkey = 'StockItem_pkey'
}

/** input type for incrementing numeric columns in table "StockItem" */
export type StockItem_Inc_Input = {
  available?: InputMaybe<Scalars['Int']>;
  depth?: InputMaybe<Scalars['float8']>;
  due?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['float8']>;
  inOrder?: InputMaybe<Scalars['Int']>;
  minimumLevel?: InputMaybe<Scalars['Int']>;
  purchasePrice?: InputMaybe<Scalars['float8']>;
  quantity?: InputMaybe<Scalars['Int']>;
  retailPrice?: InputMaybe<Scalars['float8']>;
  taxRate?: InputMaybe<Scalars['float8']>;
  weight?: InputMaybe<Scalars['float8']>;
  width?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "StockItem" */
export type StockItem_Insert_Input = {
  Category?: InputMaybe<Category_Obj_Rel_Insert_Input>;
  available?: InputMaybe<Scalars['Int']>;
  barcodeNumber?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  depth?: InputMaybe<Scalars['float8']>;
  description?: InputMaybe<Scalars['String']>;
  due?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['String']>;
  inOrder?: InputMaybe<Scalars['Int']>;
  metaData?: InputMaybe<Scalars['String']>;
  minimumLevel?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['String']>;
  productName?: InputMaybe<Scalars['String']>;
  purchasePrice?: InputMaybe<Scalars['float8']>;
  quantity?: InputMaybe<Scalars['Int']>;
  retailPrice?: InputMaybe<Scalars['float8']>;
  taxRate?: InputMaybe<Scalars['float8']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  weight?: InputMaybe<Scalars['float8']>;
  width?: InputMaybe<Scalars['float8']>;
};

/** aggregate max on columns */
export type StockItem_Max_Fields = {
  __typename?: 'StockItem_max_fields';
  available?: Maybe<Scalars['Int']>;
  barcodeNumber?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  depth?: Maybe<Scalars['float8']>;
  description?: Maybe<Scalars['String']>;
  due?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['String']>;
  inOrder?: Maybe<Scalars['Int']>;
  metaData?: Maybe<Scalars['String']>;
  minimumLevel?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  purchasePrice?: Maybe<Scalars['float8']>;
  quantity?: Maybe<Scalars['Int']>;
  retailPrice?: Maybe<Scalars['float8']>;
  taxRate?: Maybe<Scalars['float8']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  weight?: Maybe<Scalars['float8']>;
  width?: Maybe<Scalars['float8']>;
};

/** order by max() on columns of table "StockItem" */
export type StockItem_Max_Order_By = {
  available?: InputMaybe<Order_By>;
  barcodeNumber?: InputMaybe<Order_By>;
  categoryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  depth?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  due?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inOrder?: InputMaybe<Order_By>;
  metaData?: InputMaybe<Order_By>;
  minimumLevel?: InputMaybe<Order_By>;
  productId?: InputMaybe<Order_By>;
  productName?: InputMaybe<Order_By>;
  purchasePrice?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  retailPrice?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type StockItem_Min_Fields = {
  __typename?: 'StockItem_min_fields';
  available?: Maybe<Scalars['Int']>;
  barcodeNumber?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  depth?: Maybe<Scalars['float8']>;
  description?: Maybe<Scalars['String']>;
  due?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['String']>;
  inOrder?: Maybe<Scalars['Int']>;
  metaData?: Maybe<Scalars['String']>;
  minimumLevel?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  purchasePrice?: Maybe<Scalars['float8']>;
  quantity?: Maybe<Scalars['Int']>;
  retailPrice?: Maybe<Scalars['float8']>;
  taxRate?: Maybe<Scalars['float8']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  weight?: Maybe<Scalars['float8']>;
  width?: Maybe<Scalars['float8']>;
};

/** order by min() on columns of table "StockItem" */
export type StockItem_Min_Order_By = {
  available?: InputMaybe<Order_By>;
  barcodeNumber?: InputMaybe<Order_By>;
  categoryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  depth?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  due?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inOrder?: InputMaybe<Order_By>;
  metaData?: InputMaybe<Order_By>;
  minimumLevel?: InputMaybe<Order_By>;
  productId?: InputMaybe<Order_By>;
  productName?: InputMaybe<Order_By>;
  purchasePrice?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  retailPrice?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "StockItem" */
export type StockItem_Mutation_Response = {
  __typename?: 'StockItem_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<StockItem>;
};

/** on_conflict condition type for table "StockItem" */
export type StockItem_On_Conflict = {
  constraint: StockItem_Constraint;
  update_columns?: Array<StockItem_Update_Column>;
  where?: InputMaybe<StockItem_Bool_Exp>;
};

/** Ordering options when selecting data from "StockItem". */
export type StockItem_Order_By = {
  Category?: InputMaybe<Category_Order_By>;
  available?: InputMaybe<Order_By>;
  barcodeNumber?: InputMaybe<Order_By>;
  categoryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  depth?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  due?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inOrder?: InputMaybe<Order_By>;
  metaData?: InputMaybe<Order_By>;
  minimumLevel?: InputMaybe<Order_By>;
  productId?: InputMaybe<Order_By>;
  productName?: InputMaybe<Order_By>;
  purchasePrice?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  retailPrice?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** primary key columns input for table: StockItem */
export type StockItem_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "StockItem" */
export enum StockItem_Select_Column {
  /** column name */
  Available = 'available',
  /** column name */
  BarcodeNumber = 'barcodeNumber',
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Depth = 'depth',
  /** column name */
  Description = 'description',
  /** column name */
  Due = 'due',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  InOrder = 'inOrder',
  /** column name */
  MetaData = 'metaData',
  /** column name */
  MinimumLevel = 'minimumLevel',
  /** column name */
  ProductId = 'productId',
  /** column name */
  ProductName = 'productName',
  /** column name */
  PurchasePrice = 'purchasePrice',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RetailPrice = 'retailPrice',
  /** column name */
  TaxRate = 'taxRate',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Weight = 'weight',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "StockItem" */
export type StockItem_Set_Input = {
  available?: InputMaybe<Scalars['Int']>;
  barcodeNumber?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  depth?: InputMaybe<Scalars['float8']>;
  description?: InputMaybe<Scalars['String']>;
  due?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['String']>;
  inOrder?: InputMaybe<Scalars['Int']>;
  metaData?: InputMaybe<Scalars['String']>;
  minimumLevel?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['String']>;
  productName?: InputMaybe<Scalars['String']>;
  purchasePrice?: InputMaybe<Scalars['float8']>;
  quantity?: InputMaybe<Scalars['Int']>;
  retailPrice?: InputMaybe<Scalars['float8']>;
  taxRate?: InputMaybe<Scalars['float8']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  weight?: InputMaybe<Scalars['float8']>;
  width?: InputMaybe<Scalars['float8']>;
};

/** aggregate stddev on columns */
export type StockItem_Stddev_Fields = {
  __typename?: 'StockItem_stddev_fields';
  available?: Maybe<Scalars['Float']>;
  depth?: Maybe<Scalars['Float']>;
  due?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  inOrder?: Maybe<Scalars['Float']>;
  minimumLevel?: Maybe<Scalars['Float']>;
  purchasePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  retailPrice?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "StockItem" */
export type StockItem_Stddev_Order_By = {
  available?: InputMaybe<Order_By>;
  depth?: InputMaybe<Order_By>;
  due?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  inOrder?: InputMaybe<Order_By>;
  minimumLevel?: InputMaybe<Order_By>;
  purchasePrice?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  retailPrice?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type StockItem_Stddev_Pop_Fields = {
  __typename?: 'StockItem_stddev_pop_fields';
  available?: Maybe<Scalars['Float']>;
  depth?: Maybe<Scalars['Float']>;
  due?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  inOrder?: Maybe<Scalars['Float']>;
  minimumLevel?: Maybe<Scalars['Float']>;
  purchasePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  retailPrice?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "StockItem" */
export type StockItem_Stddev_Pop_Order_By = {
  available?: InputMaybe<Order_By>;
  depth?: InputMaybe<Order_By>;
  due?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  inOrder?: InputMaybe<Order_By>;
  minimumLevel?: InputMaybe<Order_By>;
  purchasePrice?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  retailPrice?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type StockItem_Stddev_Samp_Fields = {
  __typename?: 'StockItem_stddev_samp_fields';
  available?: Maybe<Scalars['Float']>;
  depth?: Maybe<Scalars['Float']>;
  due?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  inOrder?: Maybe<Scalars['Float']>;
  minimumLevel?: Maybe<Scalars['Float']>;
  purchasePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  retailPrice?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "StockItem" */
export type StockItem_Stddev_Samp_Order_By = {
  available?: InputMaybe<Order_By>;
  depth?: InputMaybe<Order_By>;
  due?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  inOrder?: InputMaybe<Order_By>;
  minimumLevel?: InputMaybe<Order_By>;
  purchasePrice?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  retailPrice?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type StockItem_Sum_Fields = {
  __typename?: 'StockItem_sum_fields';
  available?: Maybe<Scalars['Int']>;
  depth?: Maybe<Scalars['float8']>;
  due?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['float8']>;
  inOrder?: Maybe<Scalars['Int']>;
  minimumLevel?: Maybe<Scalars['Int']>;
  purchasePrice?: Maybe<Scalars['float8']>;
  quantity?: Maybe<Scalars['Int']>;
  retailPrice?: Maybe<Scalars['float8']>;
  taxRate?: Maybe<Scalars['float8']>;
  weight?: Maybe<Scalars['float8']>;
  width?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "StockItem" */
export type StockItem_Sum_Order_By = {
  available?: InputMaybe<Order_By>;
  depth?: InputMaybe<Order_By>;
  due?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  inOrder?: InputMaybe<Order_By>;
  minimumLevel?: InputMaybe<Order_By>;
  purchasePrice?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  retailPrice?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** update columns of table "StockItem" */
export enum StockItem_Update_Column {
  /** column name */
  Available = 'available',
  /** column name */
  BarcodeNumber = 'barcodeNumber',
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Depth = 'depth',
  /** column name */
  Description = 'description',
  /** column name */
  Due = 'due',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  InOrder = 'inOrder',
  /** column name */
  MetaData = 'metaData',
  /** column name */
  MinimumLevel = 'minimumLevel',
  /** column name */
  ProductId = 'productId',
  /** column name */
  ProductName = 'productName',
  /** column name */
  PurchasePrice = 'purchasePrice',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RetailPrice = 'retailPrice',
  /** column name */
  TaxRate = 'taxRate',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Weight = 'weight',
  /** column name */
  Width = 'width'
}

/** aggregate var_pop on columns */
export type StockItem_Var_Pop_Fields = {
  __typename?: 'StockItem_var_pop_fields';
  available?: Maybe<Scalars['Float']>;
  depth?: Maybe<Scalars['Float']>;
  due?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  inOrder?: Maybe<Scalars['Float']>;
  minimumLevel?: Maybe<Scalars['Float']>;
  purchasePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  retailPrice?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "StockItem" */
export type StockItem_Var_Pop_Order_By = {
  available?: InputMaybe<Order_By>;
  depth?: InputMaybe<Order_By>;
  due?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  inOrder?: InputMaybe<Order_By>;
  minimumLevel?: InputMaybe<Order_By>;
  purchasePrice?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  retailPrice?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type StockItem_Var_Samp_Fields = {
  __typename?: 'StockItem_var_samp_fields';
  available?: Maybe<Scalars['Float']>;
  depth?: Maybe<Scalars['Float']>;
  due?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  inOrder?: Maybe<Scalars['Float']>;
  minimumLevel?: Maybe<Scalars['Float']>;
  purchasePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  retailPrice?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "StockItem" */
export type StockItem_Var_Samp_Order_By = {
  available?: InputMaybe<Order_By>;
  depth?: InputMaybe<Order_By>;
  due?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  inOrder?: InputMaybe<Order_By>;
  minimumLevel?: InputMaybe<Order_By>;
  purchasePrice?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  retailPrice?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type StockItem_Variance_Fields = {
  __typename?: 'StockItem_variance_fields';
  available?: Maybe<Scalars['Float']>;
  depth?: Maybe<Scalars['Float']>;
  due?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  inOrder?: Maybe<Scalars['Float']>;
  minimumLevel?: Maybe<Scalars['Float']>;
  purchasePrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  retailPrice?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "StockItem" */
export type StockItem_Variance_Order_By = {
  available?: InputMaybe<Order_By>;
  depth?: InputMaybe<Order_By>;
  due?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  inOrder?: InputMaybe<Order_By>;
  minimumLevel?: InputMaybe<Order_By>;
  purchasePrice?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  retailPrice?: InputMaybe<Order_By>;
  taxRate?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** aggregated selection of "Stock" */
export type Stock_Aggregate = {
  __typename?: 'Stock_aggregate';
  aggregate?: Maybe<Stock_Aggregate_Fields>;
  nodes: Array<Stock>;
};

/** aggregate fields of "Stock" */
export type Stock_Aggregate_Fields = {
  __typename?: 'Stock_aggregate_fields';
  avg?: Maybe<Stock_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Stock_Max_Fields>;
  min?: Maybe<Stock_Min_Fields>;
  stddev?: Maybe<Stock_Stddev_Fields>;
  stddev_pop?: Maybe<Stock_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stock_Stddev_Samp_Fields>;
  sum?: Maybe<Stock_Sum_Fields>;
  var_pop?: Maybe<Stock_Var_Pop_Fields>;
  var_samp?: Maybe<Stock_Var_Samp_Fields>;
  variance?: Maybe<Stock_Variance_Fields>;
};


/** aggregate fields of "Stock" */
export type Stock_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stock_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Stock_Avg_Fields = {
  __typename?: 'Stock_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Stock". All fields are combined with a logical 'AND'. */
export type Stock_Bool_Exp = {
  _and?: InputMaybe<Array<Stock_Bool_Exp>>;
  _not?: InputMaybe<Stock_Bool_Exp>;
  _or?: InputMaybe<Array<Stock_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  productId?: InputMaybe<String_Comparison_Exp>;
  productName?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Stock" */
export enum Stock_Constraint {
  /** unique or primary key constraint */
  StockIdKey = 'Stock_id_key',
  /** unique or primary key constraint */
  StockPkey = 'Stock_pkey'
}

/** input type for incrementing numeric columns in table "Stock" */
export type Stock_Inc_Input = {
  quantity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Stock" */
export type Stock_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  productName?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Stock_Max_Fields = {
  __typename?: 'Stock_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Stock_Min_Fields = {
  __typename?: 'Stock_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "Stock" */
export type Stock_Mutation_Response = {
  __typename?: 'Stock_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Stock>;
};

/** on_conflict condition type for table "Stock" */
export type Stock_On_Conflict = {
  constraint: Stock_Constraint;
  update_columns?: Array<Stock_Update_Column>;
  where?: InputMaybe<Stock_Bool_Exp>;
};

/** Ordering options when selecting data from "Stock". */
export type Stock_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  productId?: InputMaybe<Order_By>;
  productName?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Stock */
export type Stock_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Stock" */
export enum Stock_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'productId',
  /** column name */
  ProductName = 'productName',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "Stock" */
export type Stock_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  productName?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Stock_Stddev_Fields = {
  __typename?: 'Stock_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Stock_Stddev_Pop_Fields = {
  __typename?: 'Stock_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Stock_Stddev_Samp_Fields = {
  __typename?: 'Stock_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Stock_Sum_Fields = {
  __typename?: 'Stock_sum_fields';
  quantity?: Maybe<Scalars['Int']>;
};

/** update columns of table "Stock" */
export enum Stock_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'productId',
  /** column name */
  ProductName = 'productName',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Stock_Var_Pop_Fields = {
  __typename?: 'Stock_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Stock_Var_Samp_Fields = {
  __typename?: 'Stock_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Stock_Variance_Fields = {
  __typename?: 'Stock_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "Supplier" */
export type Supplier = {
  __typename?: 'Supplier';
  /** An object relationship */
  Country: Country;
  address: Scalars['String'];
  alternateAddress: Scalars['String'];
  contactName: Scalars['String'];
  countryId: Scalars['String'];
  createdAt: Scalars['timestamp'];
  currency: Scalars['String'];
  description: Scalars['String'];
  emailAddress: Scalars['String'];
  faxNumber: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  postCode: Scalars['String'];
  secondaryPhoneNumber: Scalars['String'];
  updatedAt: Scalars['timestamp'];
  website: Scalars['String'];
};

/** aggregated selection of "Supplier" */
export type Supplier_Aggregate = {
  __typename?: 'Supplier_aggregate';
  aggregate?: Maybe<Supplier_Aggregate_Fields>;
  nodes: Array<Supplier>;
};

/** aggregate fields of "Supplier" */
export type Supplier_Aggregate_Fields = {
  __typename?: 'Supplier_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Supplier_Max_Fields>;
  min?: Maybe<Supplier_Min_Fields>;
};


/** aggregate fields of "Supplier" */
export type Supplier_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Supplier_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Supplier" */
export type Supplier_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Supplier_Max_Order_By>;
  min?: InputMaybe<Supplier_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Supplier" */
export type Supplier_Arr_Rel_Insert_Input = {
  data: Array<Supplier_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Supplier_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Supplier". All fields are combined with a logical 'AND'. */
export type Supplier_Bool_Exp = {
  Country?: InputMaybe<Country_Bool_Exp>;
  _and?: InputMaybe<Array<Supplier_Bool_Exp>>;
  _not?: InputMaybe<Supplier_Bool_Exp>;
  _or?: InputMaybe<Array<Supplier_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  alternateAddress?: InputMaybe<String_Comparison_Exp>;
  contactName?: InputMaybe<String_Comparison_Exp>;
  countryId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  emailAddress?: InputMaybe<String_Comparison_Exp>;
  faxNumber?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  postCode?: InputMaybe<String_Comparison_Exp>;
  secondaryPhoneNumber?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Supplier" */
export enum Supplier_Constraint {
  /** unique or primary key constraint */
  SupplierIdKey = 'Supplier_id_key',
  /** unique or primary key constraint */
  SupplierPkey = 'Supplier_pkey'
}

/** input type for inserting data into table "Supplier" */
export type Supplier_Insert_Input = {
  Country?: InputMaybe<Country_Obj_Rel_Insert_Input>;
  address?: InputMaybe<Scalars['String']>;
  alternateAddress?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  faxNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  secondaryPhoneNumber?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Supplier_Max_Fields = {
  __typename?: 'Supplier_max_fields';
  address?: Maybe<Scalars['String']>;
  alternateAddress?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  faxNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  secondaryPhoneNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Supplier" */
export type Supplier_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  alternateAddress?: InputMaybe<Order_By>;
  contactName?: InputMaybe<Order_By>;
  countryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  emailAddress?: InputMaybe<Order_By>;
  faxNumber?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  postCode?: InputMaybe<Order_By>;
  secondaryPhoneNumber?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Supplier_Min_Fields = {
  __typename?: 'Supplier_min_fields';
  address?: Maybe<Scalars['String']>;
  alternateAddress?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  faxNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  secondaryPhoneNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Supplier" */
export type Supplier_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  alternateAddress?: InputMaybe<Order_By>;
  contactName?: InputMaybe<Order_By>;
  countryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  emailAddress?: InputMaybe<Order_By>;
  faxNumber?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  postCode?: InputMaybe<Order_By>;
  secondaryPhoneNumber?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Supplier" */
export type Supplier_Mutation_Response = {
  __typename?: 'Supplier_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Supplier>;
};

/** on_conflict condition type for table "Supplier" */
export type Supplier_On_Conflict = {
  constraint: Supplier_Constraint;
  update_columns?: Array<Supplier_Update_Column>;
  where?: InputMaybe<Supplier_Bool_Exp>;
};

/** Ordering options when selecting data from "Supplier". */
export type Supplier_Order_By = {
  Country?: InputMaybe<Country_Order_By>;
  address?: InputMaybe<Order_By>;
  alternateAddress?: InputMaybe<Order_By>;
  contactName?: InputMaybe<Order_By>;
  countryId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  emailAddress?: InputMaybe<Order_By>;
  faxNumber?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  postCode?: InputMaybe<Order_By>;
  secondaryPhoneNumber?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Supplier */
export type Supplier_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Supplier" */
export enum Supplier_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AlternateAddress = 'alternateAddress',
  /** column name */
  ContactName = 'contactName',
  /** column name */
  CountryId = 'countryId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  EmailAddress = 'emailAddress',
  /** column name */
  FaxNumber = 'faxNumber',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PostCode = 'postCode',
  /** column name */
  SecondaryPhoneNumber = 'secondaryPhoneNumber',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "Supplier" */
export type Supplier_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  alternateAddress?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  faxNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  secondaryPhoneNumber?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  website?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Supplier" */
export enum Supplier_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AlternateAddress = 'alternateAddress',
  /** column name */
  ContactName = 'contactName',
  /** column name */
  CountryId = 'countryId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  EmailAddress = 'emailAddress',
  /** column name */
  FaxNumber = 'faxNumber',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PostCode = 'postCode',
  /** column name */
  SecondaryPhoneNumber = 'secondaryPhoneNumber',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Website = 'website'
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Category" */
  delete_Category?: Maybe<Category_Mutation_Response>;
  /** delete single row from the table: "Category" */
  delete_Category_by_pk?: Maybe<Category>;
  /** delete data from the table: "Country" */
  delete_Country?: Maybe<Country_Mutation_Response>;
  /** delete data from the table: "CountryRegion" */
  delete_CountryRegion?: Maybe<CountryRegion_Mutation_Response>;
  /** delete single row from the table: "CountryRegion" */
  delete_CountryRegion_by_pk?: Maybe<CountryRegion>;
  /** delete single row from the table: "Country" */
  delete_Country_by_pk?: Maybe<Country>;
  /** delete data from the table: "Order" */
  delete_Order?: Maybe<Order_Mutation_Response>;
  /** delete data from the table: "OrderFolder" */
  delete_OrderFolder?: Maybe<OrderFolder_Mutation_Response>;
  /** delete single row from the table: "OrderFolder" */
  delete_OrderFolder_by_pk?: Maybe<OrderFolder>;
  /** delete data from the table: "OrderItem" */
  delete_OrderItem?: Maybe<OrderItem_Mutation_Response>;
  /** delete single row from the table: "OrderItem" */
  delete_OrderItem_by_pk?: Maybe<OrderItem>;
  /** delete single row from the table: "Order" */
  delete_Order_by_pk?: Maybe<Order>;
  /** delete data from the table: "Stock" */
  delete_Stock?: Maybe<Stock_Mutation_Response>;
  /** delete data from the table: "StockItem" */
  delete_StockItem?: Maybe<StockItem_Mutation_Response>;
  /** delete single row from the table: "StockItem" */
  delete_StockItem_by_pk?: Maybe<StockItem>;
  /** delete single row from the table: "Stock" */
  delete_Stock_by_pk?: Maybe<Stock>;
  /** delete data from the table: "Supplier" */
  delete_Supplier?: Maybe<Supplier_Mutation_Response>;
  /** delete single row from the table: "Supplier" */
  delete_Supplier_by_pk?: Maybe<Supplier>;
  /** delete data from the table: "orderNotes" */
  delete_orderNotes?: Maybe<OrderNotes_Mutation_Response>;
  /** delete single row from the table: "orderNotes" */
  delete_orderNotes_by_pk?: Maybe<OrderNotes>;
  /** insert data into the table: "Category" */
  insert_Category?: Maybe<Category_Mutation_Response>;
  /** insert a single row into the table: "Category" */
  insert_Category_one?: Maybe<Category>;
  /** insert data into the table: "Country" */
  insert_Country?: Maybe<Country_Mutation_Response>;
  /** insert data into the table: "CountryRegion" */
  insert_CountryRegion?: Maybe<CountryRegion_Mutation_Response>;
  /** insert a single row into the table: "CountryRegion" */
  insert_CountryRegion_one?: Maybe<CountryRegion>;
  /** insert a single row into the table: "Country" */
  insert_Country_one?: Maybe<Country>;
  /** insert data into the table: "Order" */
  insert_Order?: Maybe<Order_Mutation_Response>;
  /** insert data into the table: "OrderFolder" */
  insert_OrderFolder?: Maybe<OrderFolder_Mutation_Response>;
  /** insert a single row into the table: "OrderFolder" */
  insert_OrderFolder_one?: Maybe<OrderFolder>;
  /** insert data into the table: "OrderItem" */
  insert_OrderItem?: Maybe<OrderItem_Mutation_Response>;
  /** insert a single row into the table: "OrderItem" */
  insert_OrderItem_one?: Maybe<OrderItem>;
  /** insert a single row into the table: "Order" */
  insert_Order_one?: Maybe<Order>;
  /** insert data into the table: "Stock" */
  insert_Stock?: Maybe<Stock_Mutation_Response>;
  /** insert data into the table: "StockItem" */
  insert_StockItem?: Maybe<StockItem_Mutation_Response>;
  /** insert a single row into the table: "StockItem" */
  insert_StockItem_one?: Maybe<StockItem>;
  /** insert a single row into the table: "Stock" */
  insert_Stock_one?: Maybe<Stock>;
  /** insert data into the table: "Supplier" */
  insert_Supplier?: Maybe<Supplier_Mutation_Response>;
  /** insert a single row into the table: "Supplier" */
  insert_Supplier_one?: Maybe<Supplier>;
  /** insert data into the table: "orderNotes" */
  insert_orderNotes?: Maybe<OrderNotes_Mutation_Response>;
  /** insert a single row into the table: "orderNotes" */
  insert_orderNotes_one?: Maybe<OrderNotes>;
  /** update data of the table: "Category" */
  update_Category?: Maybe<Category_Mutation_Response>;
  /** update single row of the table: "Category" */
  update_Category_by_pk?: Maybe<Category>;
  /** update data of the table: "Country" */
  update_Country?: Maybe<Country_Mutation_Response>;
  /** update data of the table: "CountryRegion" */
  update_CountryRegion?: Maybe<CountryRegion_Mutation_Response>;
  /** update single row of the table: "CountryRegion" */
  update_CountryRegion_by_pk?: Maybe<CountryRegion>;
  /** update single row of the table: "Country" */
  update_Country_by_pk?: Maybe<Country>;
  /** update data of the table: "Order" */
  update_Order?: Maybe<Order_Mutation_Response>;
  /** update data of the table: "OrderFolder" */
  update_OrderFolder?: Maybe<OrderFolder_Mutation_Response>;
  /** update single row of the table: "OrderFolder" */
  update_OrderFolder_by_pk?: Maybe<OrderFolder>;
  /** update data of the table: "OrderItem" */
  update_OrderItem?: Maybe<OrderItem_Mutation_Response>;
  /** update single row of the table: "OrderItem" */
  update_OrderItem_by_pk?: Maybe<OrderItem>;
  /** update single row of the table: "Order" */
  update_Order_by_pk?: Maybe<Order>;
  /** update data of the table: "Stock" */
  update_Stock?: Maybe<Stock_Mutation_Response>;
  /** update data of the table: "StockItem" */
  update_StockItem?: Maybe<StockItem_Mutation_Response>;
  /** update single row of the table: "StockItem" */
  update_StockItem_by_pk?: Maybe<StockItem>;
  /** update single row of the table: "Stock" */
  update_Stock_by_pk?: Maybe<Stock>;
  /** update data of the table: "Supplier" */
  update_Supplier?: Maybe<Supplier_Mutation_Response>;
  /** update single row of the table: "Supplier" */
  update_Supplier_by_pk?: Maybe<Supplier>;
  /** update data of the table: "orderNotes" */
  update_orderNotes?: Maybe<OrderNotes_Mutation_Response>;
  /** update single row of the table: "orderNotes" */
  update_orderNotes_by_pk?: Maybe<OrderNotes>;
};


/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CountryArgs = {
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CountryRegionArgs = {
  where: CountryRegion_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CountryRegion_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Country_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_OrderArgs = {
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_OrderFolderArgs = {
  where: OrderFolder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_OrderFolder_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_OrderItemArgs = {
  where: OrderItem_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_OrderItem_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Order_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_StockArgs = {
  where: Stock_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_StockItemArgs = {
  where: StockItem_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_StockItem_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Stock_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_SupplierArgs = {
  where: Supplier_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Supplier_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_OrderNotesArgs = {
  where: OrderNotes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_OrderNotes_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
  object: Category_Insert_Input;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CountryArgs = {
  objects: Array<Country_Insert_Input>;
  on_conflict?: InputMaybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CountryRegionArgs = {
  objects: Array<CountryRegion_Insert_Input>;
  on_conflict?: InputMaybe<CountryRegion_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CountryRegion_OneArgs = {
  object: CountryRegion_Insert_Input;
  on_conflict?: InputMaybe<CountryRegion_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Country_OneArgs = {
  object: Country_Insert_Input;
  on_conflict?: InputMaybe<Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderArgs = {
  objects: Array<Order_Insert_Input>;
  on_conflict?: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderFolderArgs = {
  objects: Array<OrderFolder_Insert_Input>;
  on_conflict?: InputMaybe<OrderFolder_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderFolder_OneArgs = {
  object: OrderFolder_Insert_Input;
  on_conflict?: InputMaybe<OrderFolder_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderItemArgs = {
  objects: Array<OrderItem_Insert_Input>;
  on_conflict?: InputMaybe<OrderItem_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderItem_OneArgs = {
  object: OrderItem_Insert_Input;
  on_conflict?: InputMaybe<OrderItem_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_OneArgs = {
  object: Order_Insert_Input;
  on_conflict?: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StockArgs = {
  objects: Array<Stock_Insert_Input>;
  on_conflict?: InputMaybe<Stock_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StockItemArgs = {
  objects: Array<StockItem_Insert_Input>;
  on_conflict?: InputMaybe<StockItem_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StockItem_OneArgs = {
  object: StockItem_Insert_Input;
  on_conflict?: InputMaybe<StockItem_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stock_OneArgs = {
  object: Stock_Insert_Input;
  on_conflict?: InputMaybe<Stock_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SupplierArgs = {
  objects: Array<Supplier_Insert_Input>;
  on_conflict?: InputMaybe<Supplier_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Supplier_OneArgs = {
  object: Supplier_Insert_Input;
  on_conflict?: InputMaybe<Supplier_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderNotesArgs = {
  objects: Array<OrderNotes_Insert_Input>;
  on_conflict?: InputMaybe<OrderNotes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderNotes_OneArgs = {
  object: OrderNotes_Insert_Input;
  on_conflict?: InputMaybe<OrderNotes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoryArgs = {
  _set?: InputMaybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
  _set?: InputMaybe<Category_Set_Input>;
  pk_columns: Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CountryArgs = {
  _inc?: InputMaybe<Country_Inc_Input>;
  _set?: InputMaybe<Country_Set_Input>;
  where: Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CountryRegionArgs = {
  _inc?: InputMaybe<CountryRegion_Inc_Input>;
  _set?: InputMaybe<CountryRegion_Set_Input>;
  where: CountryRegion_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CountryRegion_By_PkArgs = {
  _inc?: InputMaybe<CountryRegion_Inc_Input>;
  _set?: InputMaybe<CountryRegion_Set_Input>;
  pk_columns: CountryRegion_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Country_By_PkArgs = {
  _inc?: InputMaybe<Country_Inc_Input>;
  _set?: InputMaybe<Country_Set_Input>;
  pk_columns: Country_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrderArgs = {
  _inc?: InputMaybe<Order_Inc_Input>;
  _set?: InputMaybe<Order_Set_Input>;
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_OrderFolderArgs = {
  _set?: InputMaybe<OrderFolder_Set_Input>;
  where: OrderFolder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_OrderFolder_By_PkArgs = {
  _set?: InputMaybe<OrderFolder_Set_Input>;
  pk_columns: OrderFolder_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrderItemArgs = {
  _inc?: InputMaybe<OrderItem_Inc_Input>;
  _set?: InputMaybe<OrderItem_Set_Input>;
  where: OrderItem_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_OrderItem_By_PkArgs = {
  _inc?: InputMaybe<OrderItem_Inc_Input>;
  _set?: InputMaybe<OrderItem_Set_Input>;
  pk_columns: OrderItem_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_By_PkArgs = {
  _inc?: InputMaybe<Order_Inc_Input>;
  _set?: InputMaybe<Order_Set_Input>;
  pk_columns: Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StockArgs = {
  _inc?: InputMaybe<Stock_Inc_Input>;
  _set?: InputMaybe<Stock_Set_Input>;
  where: Stock_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_StockItemArgs = {
  _inc?: InputMaybe<StockItem_Inc_Input>;
  _set?: InputMaybe<StockItem_Set_Input>;
  where: StockItem_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_StockItem_By_PkArgs = {
  _inc?: InputMaybe<StockItem_Inc_Input>;
  _set?: InputMaybe<StockItem_Set_Input>;
  pk_columns: StockItem_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Stock_By_PkArgs = {
  _inc?: InputMaybe<Stock_Inc_Input>;
  _set?: InputMaybe<Stock_Set_Input>;
  pk_columns: Stock_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SupplierArgs = {
  _set?: InputMaybe<Supplier_Set_Input>;
  where: Supplier_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Supplier_By_PkArgs = {
  _set?: InputMaybe<Supplier_Set_Input>;
  pk_columns: Supplier_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrderNotesArgs = {
  _set?: InputMaybe<OrderNotes_Set_Input>;
  where: OrderNotes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_OrderNotes_By_PkArgs = {
  _set?: InputMaybe<OrderNotes_Set_Input>;
  pk_columns: OrderNotes_Pk_Columns_Input;
};

/** columns and relationships of "orderNotes" */
export type OrderNotes = {
  __typename?: 'orderNotes';
  /** An object relationship */
  Order: Order;
  createdAt: Scalars['timestamp'];
  createdBy: Scalars['String'];
  id: Scalars['String'];
  internal: Scalars['Boolean'];
  note: Scalars['String'];
  noteDate: Scalars['timestamp'];
  noteType: Scalars['String'];
  orderId: Scalars['String'];
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "orderNotes" */
export type OrderNotes_Aggregate = {
  __typename?: 'orderNotes_aggregate';
  aggregate?: Maybe<OrderNotes_Aggregate_Fields>;
  nodes: Array<OrderNotes>;
};

/** aggregate fields of "orderNotes" */
export type OrderNotes_Aggregate_Fields = {
  __typename?: 'orderNotes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<OrderNotes_Max_Fields>;
  min?: Maybe<OrderNotes_Min_Fields>;
};


/** aggregate fields of "orderNotes" */
export type OrderNotes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<OrderNotes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orderNotes" */
export type OrderNotes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<OrderNotes_Max_Order_By>;
  min?: InputMaybe<OrderNotes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "orderNotes" */
export type OrderNotes_Arr_Rel_Insert_Input = {
  data: Array<OrderNotes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<OrderNotes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "orderNotes". All fields are combined with a logical 'AND'. */
export type OrderNotes_Bool_Exp = {
  Order?: InputMaybe<Order_Bool_Exp>;
  _and?: InputMaybe<Array<OrderNotes_Bool_Exp>>;
  _not?: InputMaybe<OrderNotes_Bool_Exp>;
  _or?: InputMaybe<Array<OrderNotes_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  createdBy?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  internal?: InputMaybe<Boolean_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  noteDate?: InputMaybe<Timestamp_Comparison_Exp>;
  noteType?: InputMaybe<String_Comparison_Exp>;
  orderId?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "orderNotes" */
export enum OrderNotes_Constraint {
  /** unique or primary key constraint */
  OrderNotesIdKey = 'orderNotes_id_key',
  /** unique or primary key constraint */
  OrderNotesPkey = 'orderNotes_pkey'
}

/** input type for inserting data into table "orderNotes" */
export type OrderNotes_Insert_Input = {
  Order?: InputMaybe<Order_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  internal?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  noteDate?: InputMaybe<Scalars['timestamp']>;
  noteType?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type OrderNotes_Max_Fields = {
  __typename?: 'orderNotes_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  noteDate?: Maybe<Scalars['timestamp']>;
  noteType?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "orderNotes" */
export type OrderNotes_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  noteDate?: InputMaybe<Order_By>;
  noteType?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type OrderNotes_Min_Fields = {
  __typename?: 'orderNotes_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  createdBy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  noteDate?: Maybe<Scalars['timestamp']>;
  noteType?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "orderNotes" */
export type OrderNotes_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  noteDate?: InputMaybe<Order_By>;
  noteType?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orderNotes" */
export type OrderNotes_Mutation_Response = {
  __typename?: 'orderNotes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OrderNotes>;
};

/** on_conflict condition type for table "orderNotes" */
export type OrderNotes_On_Conflict = {
  constraint: OrderNotes_Constraint;
  update_columns?: Array<OrderNotes_Update_Column>;
  where?: InputMaybe<OrderNotes_Bool_Exp>;
};

/** Ordering options when selecting data from "orderNotes". */
export type OrderNotes_Order_By = {
  Order?: InputMaybe<Order_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  internal?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  noteDate?: InputMaybe<Order_By>;
  noteType?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orderNotes */
export type OrderNotes_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "orderNotes" */
export enum OrderNotes_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Internal = 'internal',
  /** column name */
  Note = 'note',
  /** column name */
  NoteDate = 'noteDate',
  /** column name */
  NoteType = 'noteType',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "orderNotes" */
export type OrderNotes_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  internal?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  noteDate?: InputMaybe<Scalars['timestamp']>;
  noteType?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "orderNotes" */
export enum OrderNotes_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Internal = 'internal',
  /** column name */
  Note = 'note',
  /** column name */
  NoteDate = 'noteDate',
  /** column name */
  NoteType = 'noteType',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Category" */
  Category: Array<Category>;
  /** fetch aggregated fields from the table: "Category" */
  Category_aggregate: Category_Aggregate;
  /** fetch data from the table: "Category" using primary key columns */
  Category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "Country" */
  Country: Array<Country>;
  /** fetch data from the table: "CountryRegion" */
  CountryRegion: Array<CountryRegion>;
  /** fetch aggregated fields from the table: "CountryRegion" */
  CountryRegion_aggregate: CountryRegion_Aggregate;
  /** fetch data from the table: "CountryRegion" using primary key columns */
  CountryRegion_by_pk?: Maybe<CountryRegion>;
  /** fetch aggregated fields from the table: "Country" */
  Country_aggregate: Country_Aggregate;
  /** fetch data from the table: "Country" using primary key columns */
  Country_by_pk?: Maybe<Country>;
  /** fetch data from the table: "Order" */
  Order: Array<Order>;
  /** fetch data from the table: "OrderFolder" */
  OrderFolder: Array<OrderFolder>;
  /** fetch aggregated fields from the table: "OrderFolder" */
  OrderFolder_aggregate: OrderFolder_Aggregate;
  /** fetch data from the table: "OrderFolder" using primary key columns */
  OrderFolder_by_pk?: Maybe<OrderFolder>;
  /** fetch data from the table: "OrderItem" */
  OrderItem: Array<OrderItem>;
  /** fetch aggregated fields from the table: "OrderItem" */
  OrderItem_aggregate: OrderItem_Aggregate;
  /** fetch data from the table: "OrderItem" using primary key columns */
  OrderItem_by_pk?: Maybe<OrderItem>;
  /** fetch aggregated fields from the table: "Order" */
  Order_aggregate: Order_Aggregate;
  /** fetch data from the table: "Order" using primary key columns */
  Order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "Stock" */
  Stock: Array<Stock>;
  /** fetch data from the table: "StockItem" */
  StockItem: Array<StockItem>;
  /** fetch aggregated fields from the table: "StockItem" */
  StockItem_aggregate: StockItem_Aggregate;
  /** fetch data from the table: "StockItem" using primary key columns */
  StockItem_by_pk?: Maybe<StockItem>;
  /** fetch aggregated fields from the table: "Stock" */
  Stock_aggregate: Stock_Aggregate;
  /** fetch data from the table: "Stock" using primary key columns */
  Stock_by_pk?: Maybe<Stock>;
  /** fetch data from the table: "Supplier" */
  Supplier: Array<Supplier>;
  /** fetch aggregated fields from the table: "Supplier" */
  Supplier_aggregate: Supplier_Aggregate;
  /** fetch data from the table: "Supplier" using primary key columns */
  Supplier_by_pk?: Maybe<Supplier>;
  /** An array relationship */
  orderNotes: Array<OrderNotes>;
  /** An aggregate relationship */
  orderNotes_aggregate: OrderNotes_Aggregate;
  /** fetch data from the table: "orderNotes" using primary key columns */
  orderNotes_by_pk?: Maybe<OrderNotes>;
};


export type Query_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootCountryArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Query_RootCountryRegionArgs = {
  distinct_on?: InputMaybe<Array<CountryRegion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CountryRegion_Order_By>>;
  where?: InputMaybe<CountryRegion_Bool_Exp>;
};


export type Query_RootCountryRegion_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CountryRegion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CountryRegion_Order_By>>;
  where?: InputMaybe<CountryRegion_Bool_Exp>;
};


export type Query_RootCountryRegion_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootCountry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Query_RootCountry_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrderFolderArgs = {
  distinct_on?: InputMaybe<Array<OrderFolder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderFolder_Order_By>>;
  where?: InputMaybe<OrderFolder_Bool_Exp>;
};


export type Query_RootOrderFolder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderFolder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderFolder_Order_By>>;
  where?: InputMaybe<OrderFolder_Bool_Exp>;
};


export type Query_RootOrderFolder_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootOrderItemArgs = {
  distinct_on?: InputMaybe<Array<OrderItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItem_Order_By>>;
  where?: InputMaybe<OrderItem_Bool_Exp>;
};


export type Query_RootOrderItem_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItem_Order_By>>;
  where?: InputMaybe<OrderItem_Bool_Exp>;
};


export type Query_RootOrderItem_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootStockArgs = {
  distinct_on?: InputMaybe<Array<Stock_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stock_Order_By>>;
  where?: InputMaybe<Stock_Bool_Exp>;
};


export type Query_RootStockItemArgs = {
  distinct_on?: InputMaybe<Array<StockItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StockItem_Order_By>>;
  where?: InputMaybe<StockItem_Bool_Exp>;
};


export type Query_RootStockItem_AggregateArgs = {
  distinct_on?: InputMaybe<Array<StockItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StockItem_Order_By>>;
  where?: InputMaybe<StockItem_Bool_Exp>;
};


export type Query_RootStockItem_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootStock_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stock_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stock_Order_By>>;
  where?: InputMaybe<Stock_Bool_Exp>;
};


export type Query_RootStock_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootSupplierArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supplier_Order_By>>;
  where?: InputMaybe<Supplier_Bool_Exp>;
};


export type Query_RootSupplier_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supplier_Order_By>>;
  where?: InputMaybe<Supplier_Bool_Exp>;
};


export type Query_RootSupplier_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootOrderNotesArgs = {
  distinct_on?: InputMaybe<Array<OrderNotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderNotes_Order_By>>;
  where?: InputMaybe<OrderNotes_Bool_Exp>;
};


export type Query_RootOrderNotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderNotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderNotes_Order_By>>;
  where?: InputMaybe<OrderNotes_Bool_Exp>;
};


export type Query_RootOrderNotes_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Category" */
  Category: Array<Category>;
  /** fetch aggregated fields from the table: "Category" */
  Category_aggregate: Category_Aggregate;
  /** fetch data from the table: "Category" using primary key columns */
  Category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "Country" */
  Country: Array<Country>;
  /** fetch data from the table: "CountryRegion" */
  CountryRegion: Array<CountryRegion>;
  /** fetch aggregated fields from the table: "CountryRegion" */
  CountryRegion_aggregate: CountryRegion_Aggregate;
  /** fetch data from the table: "CountryRegion" using primary key columns */
  CountryRegion_by_pk?: Maybe<CountryRegion>;
  /** fetch aggregated fields from the table: "Country" */
  Country_aggregate: Country_Aggregate;
  /** fetch data from the table: "Country" using primary key columns */
  Country_by_pk?: Maybe<Country>;
  /** fetch data from the table: "Order" */
  Order: Array<Order>;
  /** fetch data from the table: "OrderFolder" */
  OrderFolder: Array<OrderFolder>;
  /** fetch aggregated fields from the table: "OrderFolder" */
  OrderFolder_aggregate: OrderFolder_Aggregate;
  /** fetch data from the table: "OrderFolder" using primary key columns */
  OrderFolder_by_pk?: Maybe<OrderFolder>;
  /** fetch data from the table: "OrderItem" */
  OrderItem: Array<OrderItem>;
  /** fetch aggregated fields from the table: "OrderItem" */
  OrderItem_aggregate: OrderItem_Aggregate;
  /** fetch data from the table: "OrderItem" using primary key columns */
  OrderItem_by_pk?: Maybe<OrderItem>;
  /** fetch aggregated fields from the table: "Order" */
  Order_aggregate: Order_Aggregate;
  /** fetch data from the table: "Order" using primary key columns */
  Order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "Stock" */
  Stock: Array<Stock>;
  /** fetch data from the table: "StockItem" */
  StockItem: Array<StockItem>;
  /** fetch aggregated fields from the table: "StockItem" */
  StockItem_aggregate: StockItem_Aggregate;
  /** fetch data from the table: "StockItem" using primary key columns */
  StockItem_by_pk?: Maybe<StockItem>;
  /** fetch aggregated fields from the table: "Stock" */
  Stock_aggregate: Stock_Aggregate;
  /** fetch data from the table: "Stock" using primary key columns */
  Stock_by_pk?: Maybe<Stock>;
  /** fetch data from the table: "Supplier" */
  Supplier: Array<Supplier>;
  /** fetch aggregated fields from the table: "Supplier" */
  Supplier_aggregate: Supplier_Aggregate;
  /** fetch data from the table: "Supplier" using primary key columns */
  Supplier_by_pk?: Maybe<Supplier>;
  /** An array relationship */
  orderNotes: Array<OrderNotes>;
  /** An aggregate relationship */
  orderNotes_aggregate: OrderNotes_Aggregate;
  /** fetch data from the table: "orderNotes" using primary key columns */
  orderNotes_by_pk?: Maybe<OrderNotes>;
};


export type Subscription_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootCountryArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCountryRegionArgs = {
  distinct_on?: InputMaybe<Array<CountryRegion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CountryRegion_Order_By>>;
  where?: InputMaybe<CountryRegion_Bool_Exp>;
};


export type Subscription_RootCountryRegion_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CountryRegion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CountryRegion_Order_By>>;
  where?: InputMaybe<CountryRegion_Bool_Exp>;
};


export type Subscription_RootCountryRegion_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootCountry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Country_Order_By>>;
  where?: InputMaybe<Country_Bool_Exp>;
};


export type Subscription_RootCountry_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrderFolderArgs = {
  distinct_on?: InputMaybe<Array<OrderFolder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderFolder_Order_By>>;
  where?: InputMaybe<OrderFolder_Bool_Exp>;
};


export type Subscription_RootOrderFolder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderFolder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderFolder_Order_By>>;
  where?: InputMaybe<OrderFolder_Bool_Exp>;
};


export type Subscription_RootOrderFolder_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootOrderItemArgs = {
  distinct_on?: InputMaybe<Array<OrderItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItem_Order_By>>;
  where?: InputMaybe<OrderItem_Bool_Exp>;
};


export type Subscription_RootOrderItem_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItem_Order_By>>;
  where?: InputMaybe<OrderItem_Bool_Exp>;
};


export type Subscription_RootOrderItem_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootStockArgs = {
  distinct_on?: InputMaybe<Array<Stock_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stock_Order_By>>;
  where?: InputMaybe<Stock_Bool_Exp>;
};


export type Subscription_RootStockItemArgs = {
  distinct_on?: InputMaybe<Array<StockItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StockItem_Order_By>>;
  where?: InputMaybe<StockItem_Bool_Exp>;
};


export type Subscription_RootStockItem_AggregateArgs = {
  distinct_on?: InputMaybe<Array<StockItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StockItem_Order_By>>;
  where?: InputMaybe<StockItem_Bool_Exp>;
};


export type Subscription_RootStockItem_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootStock_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stock_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stock_Order_By>>;
  where?: InputMaybe<Stock_Bool_Exp>;
};


export type Subscription_RootStock_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootSupplierArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supplier_Order_By>>;
  where?: InputMaybe<Supplier_Bool_Exp>;
};


export type Subscription_RootSupplier_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supplier_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supplier_Order_By>>;
  where?: InputMaybe<Supplier_Bool_Exp>;
};


export type Subscription_RootSupplier_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootOrderNotesArgs = {
  distinct_on?: InputMaybe<Array<OrderNotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderNotes_Order_By>>;
  where?: InputMaybe<OrderNotes_Bool_Exp>;
};


export type Subscription_RootOrderNotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderNotes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderNotes_Order_By>>;
  where?: InputMaybe<OrderNotes_Bool_Exp>;
};


export type Subscription_RootOrderNotes_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'query_root', Category: Array<{ __typename?: 'Category', createdAt: any, description: string, id: string, name: string, updatedAt: any }> };

export const GetCategoriesDocument = gql`
    query GetCategories {
  Category {
    createdAt
    description
    id
    name
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCategoriesGQL extends Apollo.Query<GetCategoriesQuery, GetCategoriesQueryVariables> {
    document = GetCategoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }