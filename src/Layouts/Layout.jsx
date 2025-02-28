import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HeaderTopbar from '../components/HeaderTopbar/HeaderTopbar'

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderTopbar/>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
