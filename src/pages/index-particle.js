import React from "react"
import SEO from '../components/seo';
import Layout from '../containers/layout/layout'
import Hero from '../containers/home-particle/hero'
import Story from '../containers/home-particle/story'
import ProjectSection from '../containers/home-particle/project'
import TestimonialSection from '../containers/home-particle/testimonial'
import ClientSection from '../containers/home-particle/clients'
import VideoSection from '../containers/home-particle/video'
import BlogSection from '../containers/home-particle/blog'

export default () => (
    <Layout>
        <SEO title="Home - Particle"/>
        <Hero/>
        <Story/>
        <ProjectSection/>
        <TestimonialSection/>
        <ClientSection/>
        <VideoSection/>
        <BlogSection/>
    </Layout>
)
 