import React from "react"
import SEO from '../components/seo';
import Layout from '../containers/layout/layout'
import Banner from '../containers/projects/banner'
import Project from '../containers/projects/project'

export default () => (
    <Layout>
        <SEO title="Project"/>
        <Banner/>
        <Project/>
    </Layout>
)
