import React, {useContext, useCallback} from 'react'
import StackComponent from '../components/Stack/StackComponent'
import { AnimationTab } from '../types'
import { motion } from 'framer-motion'
import Context from '../Context'

type PropTypes = {
    animateTab: AnimationTab
}
const Stack = ({animateTab}: PropTypes) => {

    const context = useContext(Context)
    // @ts-expect-error
    const {animationPlayed, setAnimationPlayed} = context

    const {initialX, animateX} = animateTab

    const cacheAnimation = useCallback(() => {
        setAnimationPlayed((prevState: any) => ({ ...prevState, stackAnimation: true }))
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
        >
            <StackComponent isAnimated={animationPlayed.stackAnimation}/>
        </motion.div>
    )
}

export default Stack