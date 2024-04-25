import { createbrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home';

const router = createbrowserRouter({
    routes: [
        {
            path: '/',
            element: <Home />,
        },
    ],
})

export default router;