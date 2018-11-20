import styled from 'styled-components'
import { media } from '../../styles/style-utils'

const { phone } = media

export const Nav = styled.nav(
    ({ theme }) => ({
        paddingTop: '1.5rem',
        ...theme.flex.spaceBetween,
        ...theme.wrapper,
        maxWidth: '90%',
    }),
    () =>
        phone({
            maxWidth: '80%',
        })
)

export const NavFont = styled.div(
    ({ theme }) => ({
        ...theme.fontBold,
        fontSize: '1.55rem',
        letterSpacing: '0.2em',
    }),
    () => phone({ fontSize: '1.375rem' })
)

export const AbsolutePosition = styled.div(() =>
    phone({
        top: '5em',
        position: 'absolute',
    })
)

export const WorkTitle = styled.div(
    ({ theme }) => ({
        ...theme.fontBold,
        fontSize: '1.55rem',
        letterSpacing: '0.2em',
    }),
    () =>
        phone({
            fontSize: '2.5em',
            letterSpacing: '0.13em',
        })
)
