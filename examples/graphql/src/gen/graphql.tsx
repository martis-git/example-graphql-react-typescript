import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  readonly _: Maybe<Scalars['Int']>;
  readonly albums: Maybe<AlbumsPage>;
  readonly album: Maybe<Album>;
  readonly comments: Maybe<CommentsPage>;
  readonly comment: Maybe<Comment>;
  readonly photos: Maybe<PhotosPage>;
  readonly photo: Maybe<Photo>;
  readonly posts: Maybe<PostsPage>;
  readonly post: Maybe<Post>;
  readonly todos: Maybe<TodosPage>;
  readonly todo: Maybe<Todo>;
  readonly users: Maybe<UsersPage>;
  readonly user: Maybe<User>;
};


export type QueryAlbumsArgs = {
  options: Maybe<PageQueryOptions>;
};


export type QueryAlbumArgs = {
  id: Scalars['ID'];
};


export type QueryCommentsArgs = {
  options: Maybe<PageQueryOptions>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryPhotosArgs = {
  options: Maybe<PageQueryOptions>;
};


export type QueryPhotoArgs = {
  id: Scalars['ID'];
};


export type QueryPostsArgs = {
  options: Maybe<PageQueryOptions>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryTodosArgs = {
  options: Maybe<PageQueryOptions>;
};


export type QueryTodoArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  options: Maybe<PageQueryOptions>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type PageQueryOptions = {
  readonly paginate: Maybe<PaginateOptions>;
  readonly slice: Maybe<SliceOptions>;
  readonly sort: Maybe<ReadonlyArray<Maybe<SortOptions>>>;
  readonly operators: Maybe<ReadonlyArray<Maybe<OperatorOptions>>>;
  readonly search: Maybe<SearchOptions>;
};

export type PaginateOptions = {
  readonly page: Maybe<Scalars['Int']>;
  readonly limit: Maybe<Scalars['Int']>;
};

export type SliceOptions = {
  readonly start: Maybe<Scalars['Int']>;
  readonly end: Maybe<Scalars['Int']>;
  readonly limit: Maybe<Scalars['Int']>;
};

export type SortOptions = {
  readonly field: Maybe<Scalars['String']>;
  readonly order: Maybe<SortOrderEnum>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OperatorOptions = {
  readonly kind: Maybe<OperatorKindEnum>;
  readonly field: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
};

export enum OperatorKindEnum {
  Gte = 'GTE',
  Lte = 'LTE',
  Ne = 'NE',
  Like = 'LIKE'
}

export type SearchOptions = {
  readonly q: Maybe<Scalars['String']>;
};

export type AlbumsPage = {
  readonly data: Maybe<ReadonlyArray<Maybe<Album>>>;
  readonly links: Maybe<PaginationLinks>;
  readonly meta: Maybe<PageMetadata>;
};

export type Album = {
  readonly id: Maybe<Scalars['ID']>;
  readonly title: Maybe<Scalars['String']>;
  readonly user: Maybe<User>;
  readonly photos: Maybe<PhotosPage>;
};


export type AlbumPhotosArgs = {
  options: Maybe<PageQueryOptions>;
};

export type User = {
  readonly id: Maybe<Scalars['ID']>;
  readonly name: Maybe<Scalars['String']>;
  readonly username: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly address: Maybe<Address>;
  readonly phone: Maybe<Scalars['String']>;
  readonly website: Maybe<Scalars['String']>;
  readonly company: Maybe<Company>;
  readonly posts: Maybe<PostsPage>;
  readonly albums: Maybe<AlbumsPage>;
  readonly todos: Maybe<TodosPage>;
};


export type UserPostsArgs = {
  options: Maybe<PageQueryOptions>;
};


export type UserAlbumsArgs = {
  options: Maybe<PageQueryOptions>;
};


export type UserTodosArgs = {
  options: Maybe<PageQueryOptions>;
};

export type Address = {
  readonly street: Maybe<Scalars['String']>;
  readonly suite: Maybe<Scalars['String']>;
  readonly city: Maybe<Scalars['String']>;
  readonly zipcode: Maybe<Scalars['String']>;
  readonly geo: Maybe<Geo>;
};

export type Geo = {
  readonly lat: Maybe<Scalars['Float']>;
  readonly lng: Maybe<Scalars['Float']>;
};

export type Company = {
  readonly name: Maybe<Scalars['String']>;
  readonly catchPhrase: Maybe<Scalars['String']>;
  readonly bs: Maybe<Scalars['String']>;
};

export type PostsPage = {
  readonly data: Maybe<ReadonlyArray<Maybe<Post>>>;
  readonly links: Maybe<PaginationLinks>;
  readonly meta: Maybe<PageMetadata>;
};

export type Post = {
  readonly id: Maybe<Scalars['ID']>;
  readonly title: Maybe<Scalars['String']>;
  readonly body: Maybe<Scalars['String']>;
  readonly user: Maybe<User>;
  readonly comments: Maybe<CommentsPage>;
};


export type PostCommentsArgs = {
  options: Maybe<PageQueryOptions>;
};

export type CommentsPage = {
  readonly data: Maybe<ReadonlyArray<Maybe<Comment>>>;
  readonly links: Maybe<PaginationLinks>;
  readonly meta: Maybe<PageMetadata>;
};

export type Comment = {
  readonly id: Maybe<Scalars['ID']>;
  readonly name: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly body: Maybe<Scalars['String']>;
  readonly post: Maybe<Post>;
};

export type PaginationLinks = {
  readonly first: Maybe<PageLimitPair>;
  readonly prev: Maybe<PageLimitPair>;
  readonly next: Maybe<PageLimitPair>;
  readonly last: Maybe<PageLimitPair>;
};

export type PageLimitPair = {
  readonly page: Maybe<Scalars['Int']>;
  readonly limit: Maybe<Scalars['Int']>;
};

export type PageMetadata = {
  readonly totalCount: Maybe<Scalars['Int']>;
};

export type TodosPage = {
  readonly data: Maybe<ReadonlyArray<Maybe<Todo>>>;
  readonly links: Maybe<PaginationLinks>;
  readonly meta: Maybe<PageMetadata>;
};

export type Todo = {
  readonly id: Maybe<Scalars['ID']>;
  readonly title: Maybe<Scalars['String']>;
  readonly completed: Maybe<Scalars['Boolean']>;
  readonly user: Maybe<User>;
};

export type PhotosPage = {
  readonly data: Maybe<ReadonlyArray<Maybe<Photo>>>;
  readonly links: Maybe<PaginationLinks>;
  readonly meta: Maybe<PageMetadata>;
};

export type Photo = {
  readonly id: Maybe<Scalars['ID']>;
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly thumbnailUrl: Maybe<Scalars['String']>;
  readonly album: Maybe<Album>;
};

export type UsersPage = {
  readonly data: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly links: Maybe<PaginationLinks>;
  readonly meta: Maybe<PageMetadata>;
};

export type Mutation = {
  readonly _: Maybe<Scalars['Int']>;
  readonly createAlbum: Maybe<Album>;
  readonly updateAlbum: Maybe<Album>;
  readonly deleteAlbum: Maybe<Scalars['Boolean']>;
  readonly createComment: Maybe<Comment>;
  readonly updateComment: Maybe<Comment>;
  readonly deleteComment: Maybe<Scalars['Boolean']>;
  readonly createPhoto: Maybe<Photo>;
  readonly updatePhoto: Maybe<Photo>;
  readonly deletePhoto: Maybe<Scalars['Boolean']>;
  readonly createPost: Maybe<Post>;
  readonly updatePost: Maybe<Post>;
  readonly deletePost: Maybe<Scalars['Boolean']>;
  readonly createTodo: Maybe<Todo>;
  readonly updateTodo: Maybe<Todo>;
  readonly deleteTodo: Maybe<Scalars['Boolean']>;
  readonly createUser: Maybe<User>;
  readonly updateUser: Maybe<User>;
  readonly deleteUser: Maybe<Scalars['Boolean']>;
};


export type MutationCreateAlbumArgs = {
  input: CreateAlbumInput;
};


export type MutationUpdateAlbumArgs = {
  id: Scalars['ID'];
  input: UpdateAlbumInput;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID'];
  input: UpdateCommentInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePhotoArgs = {
  input: CreatePhotoInput;
};


export type MutationUpdatePhotoArgs = {
  id: Scalars['ID'];
  input: UpdatePhotoInput;
};


export type MutationDeletePhotoArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  input: UpdatePostInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  input: UpdateTodoInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type CreateAlbumInput = {
  readonly title: Scalars['String'];
  readonly userId: Scalars['ID'];
};

export type UpdateAlbumInput = {
  readonly title: Maybe<Scalars['String']>;
  readonly userId: Maybe<Scalars['ID']>;
};

export type CreateCommentInput = {
  readonly name: Scalars['String'];
  readonly email: Scalars['String'];
  readonly body: Scalars['String'];
};

export type UpdateCommentInput = {
  readonly name: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly body: Maybe<Scalars['String']>;
};

export type CreatePhotoInput = {
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
  readonly thumbnailUrl: Scalars['String'];
};

export type UpdatePhotoInput = {
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly thumbnailUrl: Maybe<Scalars['String']>;
};

export type CreatePostInput = {
  readonly title: Scalars['String'];
  readonly body: Scalars['String'];
};

export type UpdatePostInput = {
  readonly title: Maybe<Scalars['String']>;
  readonly body: Maybe<Scalars['String']>;
};

export type CreateTodoInput = {
  readonly title: Scalars['String'];
  readonly completed: Scalars['Boolean'];
};

export type UpdateTodoInput = {
  readonly title: Maybe<Scalars['String']>;
  readonly completed: Maybe<Scalars['Boolean']>;
};

export type CreateUserInput = {
  readonly name: Scalars['String'];
  readonly username: Scalars['String'];
  readonly email: Scalars['String'];
  readonly address: Maybe<AddressInput>;
  readonly phone: Maybe<Scalars['String']>;
  readonly website: Maybe<Scalars['String']>;
  readonly company: Maybe<CompanyInput>;
};

export type AddressInput = {
  readonly street: Maybe<Scalars['String']>;
  readonly suite: Maybe<Scalars['String']>;
  readonly city: Maybe<Scalars['String']>;
  readonly zipcode: Maybe<Scalars['String']>;
  readonly geo: Maybe<GeoInput>;
};

export type GeoInput = {
  readonly lat: Maybe<Scalars['Float']>;
  readonly lng: Maybe<Scalars['Float']>;
};

export type CompanyInput = {
  readonly name: Maybe<Scalars['String']>;
  readonly catchPhrase: Maybe<Scalars['String']>;
  readonly bs: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  readonly name: Maybe<Scalars['String']>;
  readonly username: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly address: Maybe<AddressInput>;
  readonly phone: Maybe<Scalars['String']>;
  readonly website: Maybe<Scalars['String']>;
  readonly company: Maybe<CompanyInput>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type GetTodosListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosListQuery = { readonly todos: Maybe<{ readonly data: Maybe<ReadonlyArray<Maybe<{ readonly id: Maybe<string>, readonly title: Maybe<string>, readonly user: Maybe<{ readonly name: Maybe<string> }> }>>> }> };


export const GetTodosListDocument = gql`
    query getTodosList {
  todos {
    data {
      id
      title
      user {
        name
      }
    }
  }
}
    `;

/**
 * __useGetTodosListQuery__
 *
 * To run a query within a React component, call `useGetTodosListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodosListQuery(baseOptions?: Apollo.QueryHookOptions<GetTodosListQuery, GetTodosListQueryVariables>) {
        return Apollo.useQuery<GetTodosListQuery, GetTodosListQueryVariables>(GetTodosListDocument, baseOptions);
      }
export function useGetTodosListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosListQuery, GetTodosListQueryVariables>) {
          return Apollo.useLazyQuery<GetTodosListQuery, GetTodosListQueryVariables>(GetTodosListDocument, baseOptions);
        }
export type GetTodosListQueryHookResult = ReturnType<typeof useGetTodosListQuery>;
export type GetTodosListLazyQueryHookResult = ReturnType<typeof useGetTodosListLazyQuery>;
export type GetTodosListQueryResult = Apollo.QueryResult<GetTodosListQuery, GetTodosListQueryVariables>;