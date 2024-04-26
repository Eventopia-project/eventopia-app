import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Layout from '../layouts/Layout'
import NotFound from '../pages/NotFound/NotFound'

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
    ],
  },
])

export default router
