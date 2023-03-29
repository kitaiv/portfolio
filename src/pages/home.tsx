import React, { useEffect } from 'react';
import HomeComponent from '../components/Home/HomeComponent';
import { AnimationStates, AnimationTab } from '../types';
import { motion } from 'framer-motion';

type PropTypes = {
    isAnimated: boolean,
    setAnimationPlayed: React.Dispatch<React.SetStateAction<AnimationStates>>
    animateTab: AnimationTab
}

const Home = ({ isAnimated, setAnimationPlayed, animateTab }: PropTypes) => {

    const { initialX, animateX } = animateTab

    useEffect(() => {
        return () => setAnimationPlayed((prevState) => ({ ...prevState, homeAnimation: true }))
    }, [setAnimationPlayed])

    return (
        <motion.div
            transition={{ type: "spring", duration: 1 }}
            initial={initialX}
            animate={animateX}
        >
            <HomeComponent isAnimated={isAnimated} />
        </motion.div>
    )
}

export default Home;