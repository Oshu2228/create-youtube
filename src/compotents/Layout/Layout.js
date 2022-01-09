import React from 'react'
import Header from '../Header/Header'
import  Style   from "./Layout.module.scss"

const Layout = ({children}) => {
  return (
    <div className={Style.wrappter}>
      <Header />
      <div className={Style.main}>
        {children}
      </div>
      {children}
    </div>
  )
}

export default Layout
