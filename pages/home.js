import React from 'react'
import styled from 'styled-components'

import { Nav, About, SelectedWork, Footer, Banner, Title } from '../components'

import { caseStudies, blogPosts } from '../data'

const Home = styled.div(({ theme }) => ({
    ...theme.page,
}))

export default () => (
    <Home>
        <Nav />
        <About />

        <Title>Recent Case Studies</Title>
        {caseStudies.map((item, index) => (
            <Banner key={index} {...item} />
        ))}

        <Title>My Selected Work</Title>
        <SelectedWork />

        <Title>Latest Blogposts</Title>
        {blogPosts.map((item, index) => (
            <Banner key={index} {...item} />
        ))}
        <Footer />
    </Home>
)
