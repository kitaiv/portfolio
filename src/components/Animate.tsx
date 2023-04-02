import React from 'react'
import { motion  } from 'framer-motion'
import { AnimationDataType } from '../types'
import { JsxElement } from 'typescript'

type PropTypes = {
    children: string | JSX.Element | JSX.Element[]
    animationData: AnimationDataType['stackAnimation']
}

const Animate = ({children, animationData}: PropTypes) => {
    const {initial, animate, transition, tag} = animationData

    // @ts-expect-error
    const MotionComponent = motion[tag];

    return (
        <MotionComponent
            className="box"
            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */
            initial={initial}
            animate={animate}
            transition={transition}
        >
            {children}
        </MotionComponent>
    )
}

export default Animate