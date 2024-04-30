import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Layout from '../layouts/Layout'

import NotFound from '../pages/NotFound/NotFound'
import About from '../pages/About/About'
import Categories from '../pages/Categories/Categories'
import SignUp from '../pages/SignUp/SignUpView'
import Login from '../pages/Login/LoginView'
import Profile from '../pages/Profile/Profile'

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
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
])

export default router
