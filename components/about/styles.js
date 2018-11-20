import styled from 'styled-components'
import { media } from '../../styles/style-utils'

const { phone } = media

export const About = styled.section(
    ({ theme }) => ({
        ...theme.wrapper,
        marginTop: '6rem',
        marginBottom: '8rem',
        fontSize: '2.3rem',
    }),
    () =>
        phone({
            padding: 0,
            marginTop: '9rem',
            marginBottom: '4rem',
        })
)

export const AboutText = styled.div(
    ({ theme }) => ({
        ...theme.fontNormal,
        fontSize: '2rem',
        lineHeight: '3rem',
        letterSpacing: '0.2em',
        marginBottom: '0.8em',
    }),
    () =>
        phone({
            fontSize: '1.5rem',
            lineHeight: '2.8rem',
        })
)
