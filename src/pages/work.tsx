import React, { useContext, useCallback } from 'react'
import WorkComponent from '../components/Work/WorkComponent'
import Context from '../Context'
import WithAnimation from '../components/withAnimation'


const Stack = () => {

    const context = useContext(Context)
    //@ts-expect-error
    const { animationPlayed, setAnimationPlayed } = context

    const cacheAnimation = useCallback(() => {
        setAnimationPlayed((prevState: any) => ({ ...prevState, workAnimation: true }))
    }, [setAnimationPlayed])

    React.useEffect(() => {
        return () => cacheAnimation()
    }, [cacheAnimation])


    //location.pathname === animateTab.activeTab ? 
    return (
        <WorkComponent isAnimated={animationPlayed.workAnimation} />
    )
}

export default WithAnimation(Stack)