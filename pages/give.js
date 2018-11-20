import React from 'react'
import Link from 'next/link'

import WithTheme from '../styles/withtheme'

import {
    CaseStudy,
    Placeholder,
    Paragragh,
    Title,
    StyledLink,
    Wrapper,
    Sub,
    IMG,
} from '../components/casestudy'

import { Footer, Nav } from '../components'

const BackToHome = () => (
    <Link prefetch href="/">
        <StyledLink>Back to Home</StyledLink>
    </Link>
)

export default () => (
    <WithTheme>
        <CaseStudy theme={{ page: { color: 'black', background: 'white' } }}>
            <Nav />
            <Wrapper>
                <Title>What will happen to the homeless in a cashless society?</Title>
                <BackToHome />
                <IMG src="../../static/images/give-7.jpg" />
                <Paragragh>
                    I’ve been thinking about how we give money to people who are homeless, and the
                    friction we encounter when deciding to do this. We usually encounter people who
                    are homeless in passing and either make a simple decision or many more
                    complicated ones. It can be as easy as ‘Do I have money to give?’ or, it could
                    be as complicated as ‘How much money should I give?’, ‘What might they use the
                    money for?’ and ‘What about the next person I encounter?’.
                </Paragragh>

                <Paragragh>
                    In the simpler case, my assumption is that we are more likely to offer a
                    donation if we have coins in our pockets versus if we don’t. This begs the
                    question: How will people without homes be affected by a society that carries
                    less loose change, as we adopt contactless payments? What does ‘on the go’
                    charity look like 10 years from now?
                </Paragragh>

                <Paragragh>
                    I started thinking about a charitable banking system built on top of person to
                    person contactless payments.
                </Paragragh>

                <Sub>Solution</Sub>

                <Paragragh>
                    If eligible — meaning you’re without shelter, you’re able to apply for a
                    publicly funded current account. I haven’t given any serious thought as to what
                    this system would be called, but let’s call it ‘Give’. Visually ‘Give’ looks
                    something like this:
                </Paragragh>

                <IMG src="../../static/images/give-2.1.png" />

                <Paragragh>
                    After applying and successfully becoming a part of the ‘Give’ system, you’ll
                    receive a reader and two debit cards for spending. One will loudly exclaim the
                    ‘Give’ brand, and hopefully draw more awareness to the initiative, while the
                    second will be more conspicuous in appearance. Each will work in the same way.
                    The cards will utilise contactless technology and can be used to pay for travel,
                    food and other necessities. The cardholder can check their balance at ATMs.
                </Paragragh>

                <IMG src="../../static/images/give-3.png" />

                <Paragragh>
                    Ideally, the reader draws attention and evokes hopeful and positive emotions in
                    both the owners and potential givers. Passers-by will be able to donate to
                    members of the ‘Give’ system by a simple tap of their debit or credit cards.
                </Paragragh>

                <IMG src="../../static/images/give-4.png" />

                <Paragragh>
                    The system will be integrated with smartphones allowing givers to automate and
                    manage their spending by setting a weekly budget. In the case that we’re able to
                    eliminate the need to tap, and instead utilise Bluetooth or create some other
                    method for distancing the card to reader transaction, a passer-by will be able
                    to set up alerts which draw their attention to opportunities to donate without
                    needing to stop, accepting the opportunity using touch ID.
                </Paragragh>

                <IMG src="../../static/images/give-9.jpg" />

                <Paragragh>
                    The money donated to recipients will be funnelled and allocated in different
                    ways to maximise its use. Perhaps, a decided upon daily cap will allow the
                    spread of donations across multiple days, allowing the recipient ‘enough’ to
                    survive on for the day, and transferring any excess to the following day. On the
                    other hand, the giver will be able to spread their daily spend across multiple
                    recipients equally.
                </Paragragh>

                <IMG src="../../static/images/give-5.png" />

                <Paragragh>
                    There will be speciality convenience stores stocked for members of the ‘Give’
                    system, but open to everyone. The stores will optimise their stock to the needs
                    of the ‘Give’ system members. The store will also be available for general use
                    and provide opportunities to contribute to the system through tipping or
                    donating change (e.g. An item which costs £4.69 will donate 31p). Donations made
                    via a ‘Give’ store will be spread out across country-wide or local networks.
                </Paragragh>

                <IMG src="../../static/images/give-13.jpg" />

                <Sub>Questions</Sub>

                <Paragragh>
                    Other than the leading question there are a few other questions that are asked:
                </Paragragh>

                <Paragragh>
                    1. Can we design a system that makes it easier for us to share our money with
                    people who have much less?
                </Paragragh>
                <Paragragh>
                    2. Can we design an experience that makes giving feel rewarding?
                </Paragragh>

                <Paragragh>
                    3. Can we coax the public into giving by quietly inter-weaving the system into
                    society, or loudly communicating the presence of such an initiative?
                </Paragragh>
                <Paragragh>
                    4. How do you create a visual language that encourages people to take part?
                    Perhaps more inclusive iconography or a children-friendly colour palette.
                </Paragragh>

                <BackToHome />
            </Wrapper>
            <Footer />
        </CaseStudy>
    </WithTheme>
)
