export const schema = gql`
  type Recipe {
    id: Int!
    title: String!
    ingredients: String!
    instructions: String!
    yield: String!
    source: String!
    author: String!
    notes: String!
    isFavorite: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    recipes: [Recipe!]!
    recipe(id: Int!): Recipe!
  }

  input CreateRecipeInput {
    title: String!
    ingredients: String!
    instructions: String!
    yield: String!
    source: String!
    author: String!
    notes: String!
    isFavorite: Boolean!
    updatedAt: DateTime!
  }

  input UpdateRecipeInput {
    title: String
    ingredients: String
    instructions: String
    yield: String
    source: String
    author: String
    notes: String
    isFavorite: Boolean
    updatedAt: DateTime
  }

  type Mutation {
    createRecipe(input: CreateRecipeInput!): Recipe!
    updateRecipe(id: Int!, input: UpdateRecipeInput!): Recipe!
    deleteRecipe(id: Int!): Recipe!
  }
`
