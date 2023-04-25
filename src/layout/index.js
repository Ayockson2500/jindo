import React, { Fragment } from 'react'
import NavBar from './navbar'
import Footer from './footer'

const Layout = ({children}) => {
  return (
    <Fragment>
        <NavBar />
        <main>{children}</main>
        <Footer />
    </Fragment>
  )
}

export default Layout