import React, {useContext, useCallback} from 'react'
import { AnimationTab } from '../types'
import { motion } from 'framer-motion'
import WorkComponent from '../components/Work/WorkComponent'
import Context from '../Context'

type PropTypes = {
    // isAnimated: boolean,
    // setAnimationPlayed: React.Dispatch<React.SetStateAction<AnimationStates>>,
    animateTab: AnimationTab
}

const Stack = ({animateTab}: PropTypes) => {

    const context = useContext(Context)
    //@ts-expect-error
    const {animationPlayed, setAnimationPlayed} = context

    const {initialX, animateX} = animateTab

    const cacheAnimation = useCallback(() => {
        setAnimationPlayed((prevState: any) => ({ ...prevState, workAnimation: true }))
    }, [setAnimationPlayed])

    React.useEffect(() => {
        return () => cacheAnimation()
    }, [cacheAnimation])


    //location.pathname === animateTab.activeTab ? 
    return (
        <motion.div
            transition={{ type: "spring", duration: 1 }}
            initial={initialX}
            animate={animateX}
            style={{willChange: "transform"}}
        >
            <WorkComponent isAnimated={animationPlayed.workAnimation} />
        </motion.div>
    )
}

export default Stack