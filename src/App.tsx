import React, { useState, useContext, useLayoutEffect } from 'react';
import {
  Box,
  Container,
  useBreakpoint,
  Flex,
  useDisclosure
} from '@chakra-ui/react';
import { Route, Switch } from 'react-router-dom';
import { Home, Stack, Work, Projects, Contact, NotFound } from './pages';
import Navigation from './components/Navigation/Navigation';
import Socials from './components/UI/Socials';
import Modal from './components/UI/Modal';
import { ProjectItem, WorkExperienceItem } from './types';
import Context from './Context';
import FooterComponent from './components/Footer/FooterComponent';
import Info from './components/UI/Info';


function App() {
  const [pageTitle, setPageTitle] = useState("")
  const context = useContext(Context)
  // @ts-expect-error
  const { isMessageSent } = context
  const breakpoints = useBreakpoint();
  const [selectedItem, setSelectedItem] = useState<
    WorkExperienceItem | ProjectItem | null
  >(null);
  const [animationPlayed, setAnimationPlayed] = useState({
    homeAnimation: false,
    stackAnimation: false,
    workAnimation: false,
    projectsAnimation: false
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [animateTab, setAnimateTab] = useState({
    initialX: { x: '0%' },
    animateX: { x: '0%' },
    to: '/'
  });

  const [isMsgSent, setIsMsgSent] = useState(isMessageSent)

  const handlePageTitleChange = (prefix: string) => {
    setPageTitle("Svyatoslav's Portfolio | " + prefix)
  }

  const store = {
    selectedItem,
    setSelectedItem,
    onOpen,
    isOpen,
    onClose,
    setIsMsgSent,
    isMsgSent,
    animationPlayed,
    setAnimationPlayed,
    handlePageTitleChange
  }

  const noAnimation = { initialX: {}, animateX: {} };

  useLayoutEffect(() => {
    document.title = pageTitle
  }, [pageTitle])

  return (
    <Context.Provider value={store}>
      <Box>
        {breakpoints !== 'base' && 'sm' ? <Socials /> : null}
        <Info />
        <Container
          display="flex"
          flexDirection={
            breakpoints === 'base' && 'sm' ? 'column-reverse' : 'column'
          }
          justifyContent={breakpoints === 'base' && 'sm' ? 'flex-end' : 'start'}
          alignItems={'center'}
          maxW="2xl"
          w="100%"
          h="100vh"
        >
          <Navigation setAnimateTab={setAnimateTab} />
          <Flex role='main' h="100%" w='100%' align={breakpoints === 'base' && 'sm' ? 'flex-start' : 'center'} justifyContent='center' pt={breakpoints === 'base' && 'sm' ? '4rem' : '0'}>
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
                <NotFound />
              </Route>
            </Switch>
          </Flex>
        </Container>
        {selectedItem && (
          <Modal />
        )}
        <footer>
          <FooterComponent />
        </footer>
      </Box>
    </Context.Provider>
  );
}

export default App;
