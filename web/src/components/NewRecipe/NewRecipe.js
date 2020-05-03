import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RecipeForm from 'src/components/RecipeForm'

const CREATE_RECIPE_MUTATION = gql`
  mutation CreateRecipeMutation($input: CreateRecipeInput!) {
    createRecipe(input: $input) {
      id
    }
  }
`

const NewRecipe = () => {
  const [createRecipe, { loading, error }] = useMutation(CREATE_RECIPE_MUTATION, {
    onCompleted: () => {
      navigate(routes.recipes())
    },
  })

  const onSave = (input) => {
    createRecipe({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Recipe</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <RecipeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRecipe
