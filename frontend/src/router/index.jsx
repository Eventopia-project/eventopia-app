import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Layout from '../layouts/Layout'

import NotFound from '../pages/NotFound/NotFound'
import AboutView from '../pages/AboutView/AboutView'
import Categories from '../pages/Categories/Categories'
import SignUp from '../pages/SignUp/SignUpView'
import LoginView from '../pages/LoginView/LoginView'
import Profile from '../pages/Profile/Profile'
import PrivacyView from '../pages/PrivacyView/PrivacyView'
import TermsView from '../pages/TermsView/TermsView'

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
        element: <AboutView />,
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
        element: <LoginView />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/privacy',
        element: <PrivacyView />,
      },
      {
        path: '/terms',
        element: <TermsView />,
      },
    ],
  },
])

export default router
