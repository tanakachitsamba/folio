import styled from 'styled-components'

export const Title = styled.div(({ theme }) => ({
    ...theme.fontBold,
    ...theme.wrapper,
    letterSpacing: '0.1em',
    fontSize: '2rem',
    marginBottom: '2rem',
    marginTop: '1rem',
    textAlign: 'center',
    ...theme.centerHorizontal,
}))
