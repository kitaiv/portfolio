import React, { useContext, useCallback } from 'react'
import ProjectsComponent from '../components/Projects/ProjectsComponent'
import Context from '../Context'
import WithAnimation from '../components/withAnimation'

const Projects = () => {

    const context = useContext(Context)
    // @ts-expect-error
    const { animationPlayed, setAnimationPlayed } = context

    const cacheAnimation = useCallback(() => {
        setAnimationPlayed((prevState: any) => ({ ...prevState, projectsAnimation: true }))
    }, [setAnimationPlayed])

    React.useEffect(() => {
        return () => cacheAnimation()
    }, [cacheAnimation])

    return (
        <ProjectsComponent isAnimated={animationPlayed.projectsAnimation} />
    )
}

export default WithAnimation(Projects);