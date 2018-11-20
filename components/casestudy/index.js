import styled from 'styled-components'
import { media } from '../../styles/style-utils'

const { phone } = media

export const CaseStudy = styled.section(({ theme }) => ({
    ...theme.page,
}))

export const Wrapper = styled.section(
    () =>
        phone({
            marginTop: '10rem',
        }),
    ({ theme }) => ({
        ...theme.wrapper,
        maxWidth: '60%',
    })
)

export const Title = styled.h1(({ theme }) => ({
    fontSize: '2.6rem',
    ...theme.fontNormal,
    marginBottom: '1rem',
    lineHeight: '3.8rem',
}))

export const LinkAnimation = styled.div`
    :hover {
        font-size: 1.4rem;
        cursor: pointer;
    }
`

export const StyledLink = styled(LinkAnimation)(({ theme }) => ({
    ...theme.fontNormal,
    textDecoration: 'underline',
    lineHeight: '3.8rem',
    fontSize: '1.2rem',
}))

export const Placeholder = styled.div({
    backgroundColor: 'grey',
    width: '100%',
    height: '15em',
    marginBottom: '1.5rem',
})

export const IMG = styled.img({
    width: '100%',
    marginBottom: '1.5rem',
})

export const Paragragh = styled.div(({ theme }) => ({
    fontSize: '1.6rem',
    ...theme.fontNormal,
    lineHeight: '2.2rem',
    letterSpacing: '0.05rem',
    marginBottom: '1.5rem',
}))

export const Sub = styled(Paragragh)(({ theme }) => ({
    ...theme.fontBold,
    fontSize: '1.8rem',
}))
