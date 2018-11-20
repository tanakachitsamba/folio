import styled from 'styled-components'
import { media } from '../../styles/style-utils'

const { phone } = media

export const Work = styled.div(
    {
        width: '29%',
        marginBottom: '4rem',
    },
    () =>
        phone({
            width: '100%',
        })
)

export const Img = styled.img({
    width: '100%',
    marginBottom: '1rem',
})

export const Title = styled.div(({ theme }) => ({
    ...theme.fontBold,
    fontSize: '1.2rem',
    marginBottom: '1rem',
    letterSpacing: '0.05rem',
    fontSize: '1.2rem',
}))

export const Role = styled(Title)(({ theme }) => ({
    ...theme.fontItalic,
    fontSize: '1rem',
}))

export const Brief = styled(Role)(({ theme }) => ({
    ...theme.fontNormal,
    fontSize: '1.2rem',
}))

export const StyledLink = styled.a`
    :link,
    :visited,
    :hover,
    :active {
        ${({ theme }) => ({ ...theme.fontColor, ...theme.fontNormal })};
    }

    :hover {
        font-size: 1.2rem;
        ${({ theme }) => ({ ...theme.fontBold })};
    }
`

export const CallToAction = styled(StyledLink)({
    color: 'white',
    textDecoration: 'underline',
    cursor: 'pointer',
    letterSpacing: '0.05em',
    marginBottom: '1rem',
    fontSize: '1.2rem',
})
