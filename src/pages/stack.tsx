import React, { useContext, useCallback } from 'react'
import StackComponent from '../components/Stack/StackComponent'
import Context from '../Context'
import WithAnimation from '../components/withAnimation'


const Stack = () => {

    const context = useContext(Context)
    // @ts-expect-error
    const { animationPlayed, setAnimationPlayed } = context

    const cacheAnimation = useCallback(() => {
        setAnimationPlayed((prevState: any) => ({ ...prevState, stackAnimation: true }))
    }, [setAnimationPlayed])

    React.useEffect(() => {
        return () => cacheAnimation()
    }, [cacheAnimation])


    //location.pathname === animateTab.activeTab ? 
    return (
        <StackComponent isAnimated={animationPlayed.stackAnimation} />
    )
}

export default WithAnimation(Stack)