import React from 'react'
import "./Home.css";
import Layout from '../../Layouts/Layout'
import Hero from '../../components/Hero/Hero';
import Flash from '../../components/Flash/Flash';

const Home = () => {
  return (
   <Layout>
     <Hero />
     <Flash />
   </Layout>
  )
}

export default Home
