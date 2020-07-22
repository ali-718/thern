import React from 'react';
import Slider from "react-slick";
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from "gatsby"
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import Button from '../../../components/shared/button'
import { 
  HeroArea, 
  SlideContent,
  SlideBg} from './hero.style';

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
        <i className="ti-arrow-right"></i>
    </button>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
        <i className="ti-arrow-left"></i>
    </button>
  );
}

const Hero = (props) => {
  const heroQueryData = useStaticQuery(graphql `
    query BlogHomeLatestBlogQuery {
      allMarkdownRemark( 
        limit: 3, sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              categories
              image {
                childImageSharp {
                  fluid(maxWidth: 1920, maxHeight: 750, quality: 100) {
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
  const blogs = heroQueryData.allMarkdownRemark.edges;
  const {descStyle, headingStyle} = props
  
  const mainSliderOpt = {
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
      <HeroArea>
        <Slider {...mainSliderOpt}>
          {blogs && blogs.map((blog, i) => (
            <div className="item" key={`main-slide-${i}`}>
              <SlideContent>
                <SlideBg fluid={blog.node.frontmatter.image.childImageSharp.fluid}/>
                <div className="col-3 offset-1">
                    {blog.node.frontmatter.categories && <Text className="date" {...descStyle}>{blog.node.frontmatter.categories}</Text>}
                    {blog.node.frontmatter.title && <Heading className="title" {...headingStyle}>{blog.node.frontmatter.title}</Heading>}
                    {blog.node.fields.slug && <Button className="button" as={Link} to={blog.node.fields.slug} layout={2}>Read More <i className="ti-arrow-right"></i></Button>}
                </div>
              </SlideContent>
            </div>
          ))}
        </Slider>
      </HeroArea>
  )
}

Hero.propTypes = {
  descStyle: PropTypes.object,
  headingStyle: PropTypes.object,
  buttonStyle: PropTypes.object
}

Hero.defaultProps = {
  descStyle: {
    color: '#fff',
    fontweight: 300,
    fonSize: '16px',
    texttransform: 'uppercase',
    letterspacing: '2px',
    mb: '12px'
  },
  headingStyle: {
    as: 'h1',
    color: '#fff',
    fontSize: '48px',
    lineHeight: 1.5,
    mb: '55px',
    responsive: {
      xlarge: {
        fontSize: '33px',
        mb: '30px'
      },
      large: {
        fontSize: '25px',
        mb: '20px'
      },
      medium: {
        fontSize: '20px',
      }
    }
  }
}

export default Hero
 