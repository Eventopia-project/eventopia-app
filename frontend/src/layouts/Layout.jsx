import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
function Layout() {
  const location = useLocation();
  const hideOnRoutes = ['/login', '/signup'];
  return (
    <>
      {!hideOnRoutes.includes(location.pathname) && <Header />}
      <Outlet />
      {!hideOnRoutes.includes(location.pathname) && <Footer />}
    </>
  )
}

export default Layout
