import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Layout from '../layouts/Layout'

import NotFound from '../pages/NotFound/NotFound'
import About from '../pages/About/About'
import Categories from '../pages/Categories/Categories'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/categories',
        element: <Categories />,
      },
    ],
  },
])

export default router
