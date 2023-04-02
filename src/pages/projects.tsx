import React, {useContext, useCallback} from 'react'
import { AnimationTab } from '../types'
import ProjectsComponent from '../components/Projects/ProjectsComponent'
import { motion } from 'framer-motion'
import Context from '../Context'


type PropTypes = {
    animateTab: AnimationTab
}

const Projects = ({animateTab}: PropTypes) => {

    const context = useContext(Context)
    // @ts-expect-error
    const {animationPlayed, setAnimationPlayed} = context

    const { initialX, animateX } = animateTab
    
    const cacheAnimation = useCallback(() => {
        setAnimationPlayed((prevState: any) => ({ ...prevState, projectsAnimation: true }))
    }, [setAnimationPlayed])

    React.useEffect(() => {
        return () => cacheAnimation()
    }, [cacheAnimation])

    return (
        <motion.div
            transition={{ type: "spring", duration: 1 }}
            initial={initialX}
            animate={animateX}
        >
            <ProjectsComponent isAnimated={animationPlayed.projectsAnimation}/>
        </motion.div>
    )
}

export default Projects;