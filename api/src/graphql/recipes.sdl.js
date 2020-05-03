export const schema = gql`
  type Recipe {
    id: Int!
    description: String!
    title: String!
    ingredients: String!
    instructions: String!
    yield: String!
    source: String!
    author: String!
    notes: String!
    image: String
    isFavorite: Boolean!
    cooksCount: Int!
    lastCookedAt: DateTime
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    recipes: [Recipe!]!
    recipe(id: Int!): Recipe!
  }

  input CreateRecipeInput {
    description: String!
    title: String!
    ingredients: String!
    instructions: String!
    yield: String!
    source: String!
    author: String!
    notes: String!
    image: String
    isFavorite: Boolean!
    cooksCount: Int!
    lastCookedAt: DateTime
    updatedAt: DateTime!
  }

  input UpdateRecipeInput {
    description: String
    title: String
    ingredients: String
    instructions: String
    yield: String
    source: String
    author: String
    notes: String
    image: String
    isFavorite: Boolean
    cooksCount: Int
    lastCookedAt: DateTime
    updatedAt: DateTime
  }

  type Mutation {
    createRecipe(input: CreateRecipeInput!): Recipe!
    updateRecipe(id: Int!, input: UpdateRecipeInput!): Recipe!
    deleteRecipe(id: Int!): Recipe!
  }
`
