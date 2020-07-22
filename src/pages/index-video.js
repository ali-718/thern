import React from "react"
import SEO from '../components/seo';
import Layout from '../containers/layout/layout'
import Hero from '../containers/home-video/hero'
import Story from '../containers/home-video/story'
import ProjectSection from '../containers/home-video/project'
import TestimonialSection from '../containers/home-video/testimonial'
import ClientSection from '../containers/home-video/clients'
import VideoSection from '../containers/home-video/video'
import BlogSection from '../containers/home-video/blog'

export default () => (
    <Layout headerLayout={2}>
        <SEO title="Home - Video"/>
        <Hero/>
        <Story/>
        <ProjectSection/>
        <TestimonialSection/>
        <ClientSection/>
        <VideoSection/>
        <BlogSection/>
    </Layout>
)
  