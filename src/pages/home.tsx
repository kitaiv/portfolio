import React, { useCallback, useContext, useEffect } from 'react';
import HomeComponent from '../components/Home/HomeComponent';
import { AnimationTab } from '../types';
import { motion, useReducedMotion } from 'framer-motion';
import Context from '../Context';

type PropTypes = {
    // isAnimated: boolean,
    // setAnimationPlayed: React.Dispatch<React.SetStateAction<AnimationStates>>
    animateTab: AnimationTab
}

const Home = ({ animateTab }: PropTypes) => {
    const context = useContext(Context)
    // @ts-expect-error
    const {animationPlayed, setAnimationPlayed} = context

    const { initialX, animateX } = animateTab

    const cacheAnimation = useCallback(() => {
        setAnimationPlayed((prevState: any) => ({ ...prevState, homeAnimation: true }))
    }, [setAnimationPlayed])

    useEffect(() => {
        return () => cacheAnimation()
    }, [cacheAnimation])

    return (
        <motion.div
            transition={{ type: "spring", duration: 1 }}
            initial={initialX}
            animate={animateX}
            layout='position'
            style={{willChange: "transform"}}
        >
            <HomeComponent isAnimated={animationPlayed.homeAnimation} />
        </motion.div>
    )
}

export default Home;