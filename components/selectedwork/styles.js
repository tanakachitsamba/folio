import styled from 'styled-components'
import { media } from '../../styles/style-utils'

const { phone } = media

export const SelectedWork = styled.section(
    ({ theme }) => ({
        ...theme.wrapper,
        marginTop: '2rem',
    }),
    () => phone({ marginTop: '2rem' })
)

export const Title = styled.div(
    ({ theme }) => ({
        ...theme.fontBold,
        textAlign: 'center',
        fontSize: '1.875em',
        marginBottom: '2rem',
    }),
    ({ theme }) =>
        phone({
            fontSize: '1.875em',
        })
)

export const Work = styled.div(
    ({ theme }) => ({
        ...theme.flex.spaceBetween,
    }),
    ({ theme }) =>
        phone({
            marginBottom: '2rem',
            flexDirection: 'column',
            justifyContent: 'center',
        })
)
