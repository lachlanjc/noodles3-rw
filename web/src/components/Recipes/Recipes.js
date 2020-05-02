import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_RECIPE_MUTATION = gql`
  mutation DeleteRecipeMutation($id: Int!) {
    deleteRecipe(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const RecipesList = ({ recipes }) => {
  const [deleteRecipe] = useMutation(DELETE_RECIPE_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete recipe ' + id + '?')) {
      deleteRecipe({ variables: { id }, refetchQueries: ['POSTS'] })
    }
  }

  return (
    <div className="bg-white text-gray-900 border rounded-lg overflow-x-scroll">
      <table className="table-auto w-full min-w-3xl text-sm">
        <thead>
          <tr className="bg-gray-300 text-gray-700">
            <th className="font-semibold text-left p-3">id</th>
            <th className="font-semibold text-left p-3">title</th>
            <th className="font-semibold text-left p-3">ingredients</th>
            <th className="font-semibold text-left p-3">instructions</th>
            <th className="font-semibold text-left p-3">yield</th>
            <th className="font-semibold text-left p-3">source</th>
            <th className="font-semibold text-left p-3">author</th>
            <th className="font-semibold text-left p-3">notes</th>
            <th className="font-semibold text-left p-3">isFavorite</th>
            <th className="font-semibold text-left p-3">createdAt</th>
            <th className="font-semibold text-left p-3">updatedAt</th>
            <th className="font-semibold text-left p-3">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr
              key={recipe.id}
              className="odd:bg-gray-100 even:bg-white border-t"
            >
              <td className="p-3">{truncate(recipe.id)}</td>
              <td className="p-3">{truncate(recipe.title)}</td>
              <td className="p-3">{truncate(recipe.ingredients)}</td>
              <td className="p-3">{truncate(recipe.instructions)}</td>
              <td className="p-3">{truncate(recipe.yield)}</td>
              <td className="p-3">{truncate(recipe.source)}</td>
              <td className="p-3">{truncate(recipe.author)}</td>
              <td className="p-3">{truncate(recipe.notes)}</td>
              <td className="p-3">{truncate(recipe.isFavorite)}</td>
              <td className="p-3">{timeTag(recipe.createdAt)}</td>
              <td className="p-3">{timeTag(recipe.updatedAt)}</td>
              <td className="p-3 pr-4 text-right whitespace-no-wrap">
                <nav>
                  <ul>
                    <li className="inline-block">
                      <Link
                        to={routes.recipe({ id: recipe.id })}
                        title={'Show recipe ' + recipe.id + ' detail'}
                        className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Show
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link
                        to={routes.editRecipe({ id: recipe.id })}
                        title={'Edit recipe ' + recipe.id}
                        className="text-xs bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Edit
                      </Link>
                    </li>
                    <li className="inline-block">
                      <a
                        href="#"
                        title={'Delete recipe ' + recipe.id}
                        className="text-xs bg-gray-100 text-red-600 hover:bg-red-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                        onClick={() => onDeleteClick(recipe.id)}
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecipesList
