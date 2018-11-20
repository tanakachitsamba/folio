import React from 'react'
import Link from 'next/link'

import { Wrapper, Placeholder, Title, Role, Brief, CallToAction } from './styles'

import styled from 'styled-components'

const Img = styled.img({
    width: '100%',
    marginBottom: '2rem',
})

const HighlightedWork = ({ title, typeOfCompany, role, brief, href, callToAction, bannerImg }) => (
    <Wrapper>
        {bannerImg ? <Img src={'static/images/' + bannerImg} /> : <Placeholder />}

        <Title>
            {title} - {typeOfCompany}
        </Title>
        <Role>{role}</Role>

        <Brief>{brief}</Brief>
        <CallToAction href={href} target="_blank">
            {callToAction}
        </CallToAction>
    </Wrapper>
)

HighlightedWork.defaultProps = {
    title: 'Haute-Elan',
    typeOfCompany: 'Ecommerce Store',
    role: 'UX/UI Design / Development',
    href: '/',
    brief: `I bring design thinking concepts to ERGO's innovation lab where we create new digital ideas for the insurance space and bring them to life.`,
    callToAction: 'Visit their Website',
}

export default HighlightedWork
