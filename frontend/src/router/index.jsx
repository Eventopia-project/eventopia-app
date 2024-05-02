import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home';
import Layout from '../layouts/Layout'
import LoginView from '../pages/LoginView/LoginView';
import SignUp from '../pages/SignUp/SignUp';

const router = createBrowserRouter([
    {

        path: '/',
        element: <Layout />,
        //errorElement: <NotFound />,por ahora no*/
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <LoginView />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            

        ]
    }
])

export default router;