import React from 'react'
import { SelectedWork, Work } from './styles'
import HighlightedWork from '../highlightedwork'
import WorkItem from '../workitem'

import { work } from '../../data'

const zurpy = work[5]

export default () => (
    <SelectedWork>
        <HighlightedWork {...zurpy} />
        <Work>
            {work.map(
                (item, index) => work.indexOf(item) < 3 && <WorkItem key={index} {...item} />
            )}
        </Work>
    </SelectedWork>
)
