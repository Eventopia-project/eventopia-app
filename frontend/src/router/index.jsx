import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home';
import Layout from '../layouts/Layout'

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
          
        ]
    }
])

export default router;