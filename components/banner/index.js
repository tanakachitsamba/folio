import React from 'react'
import Link from 'next/link'

import { Sub, Name, Placeholder, Banner as Wrapper, Img } from './styles'

const Banner = ({ name, sub, bannerImg, href }) => (
    <Wrapper>
        <Link prefetch href={href}>
            <div>
                {bannerImg ? <Img src={'static/images/' + bannerImg} /> : <Placeholder />}

                <Name>{name}</Name>

                <Sub>{sub}</Sub>
            </div>
        </Link>
    </Wrapper>
)

Banner.defaultProps = {
    name: 'Open Banking App',
    sub: 'A banking app experience that focuses on the needs of the users.',
    href: '/',
}

export default Banner
