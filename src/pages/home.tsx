import React, {useContext, useCallback, useEffect} from 'react';
import HomeComponent from '../components/Home/HomeComponent';
import WithAnimation from '../components/withAnimation';
import Context from '../Context';


const Home = () => {
    const context = useContext(Context)
    // @ts-expect-error
    const { animationPlayed, setAnimationPlayed } = context

    const cacheAnimation = useCallback(() => {
        setAnimationPlayed((prevState: any) => ({ ...prevState, homeAnimation: true }))
    }, [setAnimationPlayed])

    useEffect(() => {
        return () => cacheAnimation()
    }, [cacheAnimation])

    return <HomeComponent isAnimated={animationPlayed.homeAnimation} />
}

export default WithAnimation(Home);