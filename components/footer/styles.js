import styled from 'styled-components'
import { media } from '../../styles/style-utils'

const { phone } = media

//  need to change the width on the mobile version
export const Footer = styled.footer(({ theme }) => ({
    ...theme.flex.spaceBetween,
    ...theme.wrapper,
    positon: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    marginTop: '3rem',
    maxWidth: '90%',
}))

export const Text = styled.div(
    () =>
        phone({
            fontSize: '1rem',
        }),
    ({ theme }) => ({
        ...theme.fontBold,
        marginBottom: '1rem',
        letterSpacing: '0.2em',
        textAlign: 'center',
        fontSize: '1.4rem',
    })
)
