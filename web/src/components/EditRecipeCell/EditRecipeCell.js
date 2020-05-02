import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RecipeForm from 'src/components/RecipeForm'

export const QUERY = gql`
  query FIND_RECIPE_BY_ID($id: Int!) {
    recipe: recipe(id: $id) {
      id
      title
      ingredients
      instructions
      yield
      source
      author
      notes
      isFavorite
      createdAt
      updatedAt
    }
  }
`
const UPDATE_RECIPE_MUTATION = gql`
  mutation UpdateRecipeMutation($id: Int!, $input: UpdateRecipeInput!) {
    updateRecipe(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ recipe }) => {
  const [updateRecipe, { loading, error }] = useMutation(UPDATE_RECIPE_MUTATION, {
    onCompleted: () => {
      navigate(routes.recipes())
    },
  })

  const onSave = (input, id) => {
    updateRecipe({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Recipe {recipe.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <RecipeForm recipe={recipe} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
