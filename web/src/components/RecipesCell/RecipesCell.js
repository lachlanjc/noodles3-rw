import { Link, routes } from '@redwoodjs/router'

import Recipes from 'src/components/Recipes'

export const QUERY = gql`
  query RECIPES {
    recipes {
      id
      description
      title
      ingredients
      instructions
      yield
      source
      author
      notes
      image
      isFavorite
      cooksCount
      lastCookedAt
      createdAt
      updatedAt
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No recipes yet. '}
      <Link
        to={routes.newRecipe()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ recipes }) => {
  return <Recipes recipes={recipes} />
}
