import React from 'react'
import Link from 'next/link'

import { Nav, NavFont, WorkTitle, AbsolutePosition } from './styles'

export default () => (
    <Nav>
        <Link href="/">
            <NavFont>Tanaka.</NavFont>
        </Link>

        <AbsolutePosition>
            <WorkTitle>UX/UI Designer</WorkTitle>
        </AbsolutePosition>
        <NavFont>Hire Me</NavFont>
    </Nav>
)
