import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from "gatsby"
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import Button from '../../../components/shared/button'
import {JoinSectionWrap, SectionInner, SectionTitleWrap} from './join-our-team.stc'

const JoinOurTeam = ({headingStyle, textStyle, buttonStyle}) => {
    const joinTeamQueryData = useStaticQuery(graphql `
        query JoinDataQuery {
            aboutdataJson(id: {eq: "about-join-team-content"}) {
                title
                desc
                path
            }
        }      
    `);
    const {title, desc, path} = joinTeamQueryData.aboutdataJson;
    return(
        <JoinSectionWrap>
            <div className="row">
                <div className="col-2 offset-1">
                    <SectionInner>
                        <SectionTitleWrap>
                            {title && <Heading {...headingStyle}>{title}</Heading>}
                            {desc && <Text {...textStyle}>{desc}</Text>}
                            <Button as={Link} to={path} {...buttonStyle}>Join Now</Button>
                        </SectionTitleWrap>
                    </SectionInner>
                </div>
            </div>
        </JoinSectionWrap>
    )
}

JoinOurTeam.propTypes = {
    headingStyle: PropTypes.object,
    textStyle: PropTypes.object,
    buttonStyle: PropTypes.object
}

JoinOurTeam.defaultProps = {
    headingStyle: {
        as: 'h1',
        responsive: {
            small: {
                fontSize: '18px'
            }
        }
    },
    textStyle: {
        lineHeight: '26px'
    },
    buttonStyle: {
        mt: '34px'
    }
}

export default JoinOurTeam;