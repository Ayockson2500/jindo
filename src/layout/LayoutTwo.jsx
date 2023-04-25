import React, { Fragment } from 'react'
import Footer from './footer'
import { Link } from 'react-router-dom'

const LayoutTwo = ({children}) => {
  return (
    <Fragment>
        <nav className='flex items-center justify-between px-16 py-10'>
        <Link to={'/'} className="logo uppercase border-[5px] border-jdNavy p-2 font-bold text-5xl">
            Jindo
          </Link>
          <Link className='bg-jdBlue2 hover:bg-jdBlue p-5 w-[350px] text-center text-jdLight text-2xl'>Try Jimdo free</Link>
        </nav>
        <main>{children}</main>
        <Footer />
    </Fragment>
  )
}

export default LayoutTwo