import React from 'react'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <div>
      <div>header</div>
      <Outlet />


    </div>
  )
}

export default Layout
