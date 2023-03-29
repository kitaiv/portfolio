import React from 'react'
import StackComponent from '../components/Stack/StackComponent'
import { AnimationStates, AnimationTab } from '../types'
import { motion } from 'framer-motion'

type PropTypes = {
    isAnimated: boolean,
    setAnimationPlayed: React.Dispatch<React.SetStateAction<AnimationStates>>,
    animateTab: AnimationTab
}
const Stack = ({isAnimated, setAnimationPlayed, animateTab}: PropTypes) => {

    const {initialX, animateX} = animateTab

    React.useEffect(() => {
        return () => setAnimationPlayed((prevState) => ({ ...prevState, stackAnimation: true }))
    }, [setAnimationPlayed])


    //location.pathname === animateTab.activeTab ? 
    return (
            <motion.div
            transition={{ type: "spring", duration: 1 }}
            initial={initialX}
            animate={animateX}
        >
            <StackComponent isAnimated={isAnimated}/>
        </motion.div>
    )
}

export default Stack