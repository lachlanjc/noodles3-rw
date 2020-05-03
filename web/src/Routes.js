import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/recipes/new" page={NewRecipePage} name="newRecipe" />
      <Route path="/recipes/{id:Int}/edit" page={EditRecipePage} name="editRecipe" />
      <Route path="/recipes/{id:Int}" page={RecipePage} name="recipe" />
      <Route path="/recipes" page={RecipesPage} name="recipes" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
