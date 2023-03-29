import React from 'react'
import { AnimationStates, AnimationTab } from '../types'
import { motion } from 'framer-motion'
import WorkComponent from '../components/Work/WorkComponent'

type PropTypes = {
    isAnimated: boolean,
    setAnimationPlayed: React.Dispatch<React.SetStateAction<AnimationStates>>,
    animateTab: AnimationTab
}

const Stack = ({isAnimated, setAnimationPlayed, animateTab}: PropTypes) => {

    const {initialX, animateX} = animateTab

    React.useEffect(() => {
        return () => setAnimationPlayed((prevState) => ({ ...prevState, workAnimation: true }))
    }, [setAnimationPlayed])


    //location.pathname === animateTab.activeTab ? 
    return (
        <motion.div
            transition={{ type: "spring", duration: 1 }}
            initial={initialX}
            animate={animateX}
        >
            <WorkComponent isAnimated={isAnimated} />
        </motion.div>
    )
}

export default Stack