import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <main style={{ padding: '1rem', textAlign: 'center' }}>
      <h1>Noodles 3</h1>
      <p>Keep, cook, & share your favorite recipes. Now built with Redwood.</p>
      <p>
        <Link to={routes.recipes()}>Open Recipes</Link>
      </p>
    </main>
  )
}

export default HomePage
