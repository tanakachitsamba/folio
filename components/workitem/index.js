import React from 'react'
import Link from 'next/link'

import { Work, Placeholder, Title, Role, Brief, CallToAction, Img } from './styles'

const WorkItem = ({ title, typeOfCompany, role, brief, href, callToAction, img }) => (
    <Work>
        <Img src={'static/images/' + img} />
        <Title>
            {title} - {typeOfCompany}
        </Title>
        <Role>{role}</Role>
        <Brief>{brief}</Brief>
        <CallToAction href={href} target="_blank">
            {callToAction}
        </CallToAction>
    </Work>
)

WorkItem.defaultProps = {
    title: 'Haute-Elan',
    typeOfCompany: 'Ecommerce Store',
    role: 'UX/UI Design / Development',
    href: '/give',
    brief: `I bring design thinking concepts to ERGO's innovation lab where we create new digital ideas for the insurance space and bring them to life.`,
    callToAction: 'Visit their Website',
}

export default WorkItem
