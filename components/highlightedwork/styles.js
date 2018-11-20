import styled from 'styled-components'

import {
    Title as OldTitle,
    Role as OldRole,
    Brief as OldBrief,
    CallToAction as OldCallToAction,
} from '../workitem/styles'

export const Title = styled(OldTitle)({
    textAlign: 'center',
    fontSize: '1.4rem',
    textDecoration: 'underline',
})

export const Role = styled(OldRole)({ textAlign: 'center' })

export const Brief = styled(OldBrief)({ clear: 'both', textAlign: 'center', fontSize: '1.4rem' })

export const CallToAction = styled(OldCallToAction)(({ theme }) => ({
    textAlign: 'center',
    ...theme.flex.centerHorizontal,
}))

export const Wrapper = styled.div(({ theme }) => ({ marginBottom: '4rem' }))

export const Placeholder = styled.div({
    width: '100%',
    background: 'white',
    height: '400px',
    marginBottom: '1rem',
})
