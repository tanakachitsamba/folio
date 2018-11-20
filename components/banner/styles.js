import styled from 'styled-components'
import { media } from '../../styles/style-utils'

const { phone } = media

export const Banner = styled.section(({ theme }) => ({
    ...theme.wrapper,
    letterSpacing: '0.1em',
    textAlign: 'center',
    ...theme.centerHorizontal,
    marginBottom: '4rem',
}))

export const Placeholder = styled.div(
    () =>
        phone({
            width: '100%',
        }),
    () => ({
        width: '100%',
        height: '400px',
        background: 'white',
        minWidth: '100%',
        marginBottom: '2rem',
    })
)

export const Img = styled.img({
    width: '100%',
    marginBottom: '2rem',
})

export const Title = styled.div(({ theme }) => ({
    ...theme.fontBold,
    ...theme.wrapper,
    letterSpacing: '0.1em',
    fontSize: '1.875em',
    marginBottom: '2rem',
    textAlign: 'center',
    ...theme.centerHorizontal,
}))

const LinkAnimation = styled(Title)`
    :hover {
        font-size: 2rem;
        cursor: pointer;
    }
`

export const Name = styled(LinkAnimation)(
    () => phone({ fontSize: '1.4rem' }),
    ({ theme }) => ({
        fontSize: '1.6rem',
        marginBottom: '12px',
        textDecoration: 'underline',
    })
)

export const Sub = styled.div(({ theme }) => ({
    fontSize: '1.4rem',
    marginBottom: '12px',
    ...theme.fontItalic,
}))
