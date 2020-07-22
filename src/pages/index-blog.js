import React from "react"
import SEO from '../components/seo';
import Layout from '../containers/layout/layout'
import Hero from '../containers/home-blog/hero'
import FeatureBlogSection from '../containers/home-blog/feature-blog'
import BlogSection from '../containers/home-blog/blog'

export default () => (
    <Layout headerLayout={2}>
        <SEO title="Home - Blog"/>
        <Hero/>
        <FeatureBlogSection/>
        <BlogSection/>
    </Layout>
)
 