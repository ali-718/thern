import React, {Fragment} from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import SectionTitle from '../../../components/shared/section-title'
import Blog from '../../../components/blog/layout-one'
import {BlogSectionWrap, BlogInner} from './blog.stc'
import Pagination from '../../../components/pagination'

const BlogSection = ({section}) => {
    const blogQueryData = useStaticQuery(graphql `
        query BlogHomeBlogQuery {
            homeblogdataJson(id: {eq: "blog_latest_blog_section"}) {
                title
                subtitle
            }
            allMarkdownRemark(limit: 6, sort: {order: DESC, fields: frontmatter___date}, skip: 3) {
                totalCount
                edges {
                  node {
                    fields {
                        slug
                    }
                    frontmatter {
                      title
                      id
                      date(formatString: "MMM Do, YYYY")
                      author
                      shortDesc
                      image {
                        childImageSharp {
                          fluid(maxWidth: 600, maxHeight: 630, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                          }
                        }
                      }
                    }
                  }
                }
            }
        }
    `);
    const blogSecData = blogQueryData.homeblogdataJson;
    const blogs = blogQueryData.allMarkdownRemark.edges;
    const {totalCount} = blogQueryData.allMarkdownRemark;
    const postsPerPage = 4;
    const numberOfPages = Math.ceil(totalCount/postsPerPage);
    
    return (
        <Fragment>
            <BlogSectionWrap {...section}>
                <div className="col-1 offset-1">
                    <SectionTitle
                        title={blogSecData.title}
                        subtitle={blogSecData.subtitle}
                    />
                </div>
                <BlogInner className="col-4 offset-1">
                    <div className="row">
                        {blogs.map((blog, i) => (
                            <div className="col-2" key={`${blog.node.fields.slug}-${i}`}>
                                <Blog
                                    title={blog.node.frontmatter.title}
                                    date={blog.node.frontmatter.date}
                                    author={blog.node.frontmatter.author}
                                    id={blog.node.frontmatter.id}
                                    path={blog.node.fields.slug}
                                    excerpt={blog.node.frontmatter.shortDesc}
                                    image={blog.node.frontmatter.image.childImageSharp.fluid}
                                />
                            </div>
                        ))}
                    </div>
                </BlogInner>
                <Pagination
                    rootPage="/index-blog"
                    currentPage={1}
                    numberOfPages={numberOfPages}
                />
            </BlogSectionWrap>
        </Fragment>
    ) 
}

BlogSection.propTypes = {
    section: PropTypes.object
}

BlogSection.defaultProps = {
    section: {
        backgroundColor: '#f8f8f8'
    },
}

export default BlogSection;