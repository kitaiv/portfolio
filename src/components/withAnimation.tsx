import React, { useLayoutEffect, useCallback, useState, useContext } from "react";
import { motion } from "framer-motion";
import { AnimationTab, AnimationStates } from "../types";
import { useLocation } from "react-router-dom";
import Context from "../Context";

type PropTypes = {
    animateTab: AnimationTab,
}

type CacheAnimation = () => void;
type MemoizeAnimationStateValue = (key: keyof AnimationStates) => void;


function withAnimation(Component: React.ElementType) {
    return function WithAnimation(props: PropTypes) {
        const location = useLocation()

        const context = useContext(Context)

        // @ts-expect-error
        const {animationPlayed, setAnimationPlayed, handlePageTitleChange} = context

        const [animationStateValue, setAnimationStateValue] = useState<string>('')

        const cacheAnimation: CacheAnimation = useCallback(() => {
            setAnimationPlayed((prevState: AnimationStates) => (
                { 
                    ...prevState, 
                    [animationStateValue]: true
                }
                ))
        }, [animationStateValue, setAnimationPlayed])

        const memoizeAnimationStateValue: MemoizeAnimationStateValue = useCallback((value: string) => setAnimationStateValue(value), [])

        useLayoutEffect((): undefined | (() => void) => {
            switch (location.pathname) {
                case '/':
                    memoizeAnimationStateValue('homeAnimation')
                    handlePageTitleChange('Home')
                    break;
                case '/stack':
                    memoizeAnimationStateValue('stackAnimation')
                    handlePageTitleChange('Stack')
                    break;
                case '/projects':
                    memoizeAnimationStateValue('projectsAnimation')
                    handlePageTitleChange('Projects')
                    break;
                case '/work':
                    memoizeAnimationStateValue('workAnimation')
                    handlePageTitleChange('Work Experience')
                    break;
                default:
                    handlePageTitleChange('Not Found')
                    return;
            }

            return () => cacheAnimation()

        }, [cacheAnimation, location.pathname, memoizeAnimationStateValue])
        
        return (
            <motion.div
                transition={{ type: "spring", duration: 0.8 }}
                initial={props.animateTab.initialX}
                animate={props.animateTab.animateX}
                style={{ willChange: "transform" }}
            >
                <Component {...props} isAnimated={animationPlayed[animationStateValue]} />
            </motion.div>
        )
    }
}

export default withAnimation