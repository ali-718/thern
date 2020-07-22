import React from "react"
import SEO from '../components/seo';
import Layout from '../containers/preview/layout'
import Header from '../containers/preview/header'
import Footer from '../containers/preview/footer'
import Hero from '../containers/preview/hero'
import Demo from '../containers/preview/demo'

export default () => (
    <Layout>
        <SEO title="Home"/>
        <Header/>
        <main className="page-content">
            <Hero/>
            <Demo/>
        </main>
        <Footer/>
    </Layout>
)
 