import React, { useState } from 'react';
import './App.css';
import { Box, Container, Text, useBreakpoint, Flex} from '@chakra-ui/react'
import {
  Route,
  Switch
} from 'react-router-dom';

import { Home, Stack, Work} from './pages'
import Navigation from './components/Navigation/Navigation';
import Socials from './components/UI/Socials';


function App() {
  const [animationPlayed, setAnimationPlayed] = useState({
    homeAnimation: false,
    stackAnimation: false,
    workAnimation: false
  });

  const [animateTab, setAnimateTab] = useState({
    initialX: {x: '0%'},
    animateX: {x: '0%'},
    to: '/'
  })

  const breakpoints = useBreakpoint()
  
  const noAnimation = {initialX: {}, animateX: {}} 

  React.useEffect(() => {
    //some code here
    
  }, [animateTab]);

  return (
    <Box>
      {breakpoints !== 'base' && 'sm' ? <Socials /> : null}
      {/* @ts-ignore-uniontype */}
      <Container 
        display="flex" 
        flexDirection={breakpoints === 'base' && 'sm' ? 'column-reverse' : 'column'} justifyContent='space-between' 
        alignItems={'center'} 
        maxW='2xl' 
        w='100%' 
        h='100vh'
      >
        <Navigation setAnimateTab={setAnimateTab} />
        <Flex h='100%' align={'center'}>
          <Switch>
            <Route exact path="/">
              <Home 
                isAnimated={animationPlayed.homeAnimation} 
                setAnimationPlayed={setAnimationPlayed} 
                animateTab={animateTab.to === '/' ? animateTab : noAnimation}
              />
            </Route>
            <Route path="/stack">
              <Stack 
                isAnimated={animationPlayed.stackAnimation} 
                setAnimationPlayed={setAnimationPlayed} 
                animateTab={animateTab.to === '/stack' ? animateTab : noAnimation} 
              />
            </Route>
            <Route path='/work'>
              <Work 
                isAnimated={animationPlayed.workAnimation} 
                setAnimationPlayed={setAnimationPlayed} 
                animateTab={animateTab.to === '/work' ? animateTab : noAnimation} 
              />
            </Route>
            <Route path="*">
              <Text color="gray.100">Page Not Found Or in Progress...</Text>
            </Route>
          </Switch>
        </Flex>
      </Container>
    </Box>
  );
}

export default App;
