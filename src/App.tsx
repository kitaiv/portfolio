import React, { useState, useContext } from 'react';
import './App.css';
import {
  Box,
  Container,
  Text,
  useBreakpoint,
  Flex,
  useDisclosure
} from '@chakra-ui/react';
import { Route, Switch } from 'react-router-dom';

import { Home, Stack, Work, Projects, Contact } from './pages';
import Navigation from './components/Navigation/Navigation';
import Socials from './components/UI/Socials';
import Modal from './components/UI/Modal';
import { ProjectItem, WorkExperienceItem } from './types';
import Context from './Context';


function App() {
  const context = useContext(Context)
  // @ts-expect-error
  const {isMessageSent} = context
  const [selectedItem, setSelectedItem] = useState<
    WorkExperienceItem | ProjectItem | null
  >(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [animationPlayed, setAnimationPlayed] = useState({
    homeAnimation: false,
    stackAnimation: false,
    workAnimation: false,
    projectsAnimation: false
  });

  const [animateTab, setAnimateTab] = useState({
    initialX: { x: '0%' },
    animateX: { x: '0%' },
    to: '/'
  });
  
  const [isMsgSent, setIsMsgSent] = useState(isMessageSent)

  const store = {
    selectedItem,
    setSelectedItem,
    onOpen,
    isOpen,
    onClose,
    animationPlayed,
    setAnimationPlayed,
    setIsMsgSent,
    isMsgSent
  }

  const breakpoints = useBreakpoint();

  const noAnimation = { initialX: {}, animateX: {} };

  React.useEffect(() => {
    //some code here
  }, [animateTab]);

  return (
    <Context.Provider value={store}>
      <Box>
        {breakpoints !== 'base' && 'sm' ? <Socials /> : null}
        <Container
          display="flex"
          flexDirection={
            breakpoints === 'base' && 'sm' ? 'column-reverse' : 'column'
          }
          justifyContent={'flex-start'}
          alignItems={'center'}
          maxW="2xl"
          w="100%"
          h="100vh"
        >
          <Navigation setAnimateTab={setAnimateTab} />
          <Flex h="max-content" w='100%' align={'center'} justifyContent='center' mt='4rem'>
            <Switch>
              <Route exact path="/">
                <Home
                  animateTab={animateTab.to === '/' ? animateTab : noAnimation}
                />
              </Route>
              <Route path='/stack'>
                <Stack
                  animateTab={
                    animateTab.to === '/stack' ? animateTab : noAnimation
                  }
                />
              </Route>
              <Route path='/work'>
                <Work
                  animateTab={
                    animateTab.to === '/work' ? animateTab : noAnimation
                  }
                />
              </Route>
              <Route path='/projects'>
                <Projects
                  animateTab={
                    animateTab.to === '/projects' ? animateTab : noAnimation
                  }
                />
              </Route>
              <Route path='/contact'>
                  <Contact />
              </Route>
              <Route path="*">
                <Text color="gray.100">Page Not Found Or in Progress...</Text>
              </Route>
            </Switch>
          </Flex>
        </Container>
          {selectedItem && (
            <Modal />
          )}
      </Box>
    </Context.Provider>
  );
}

export default App;
