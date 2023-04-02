import React, { useState, Dispatch, SetStateAction } from 'react'
import { navData } from '../../data'
import { NavigationItem } from '../../types'
import { Box, Button, ButtonGroup, Center, Tooltip, Image, useBreakpoint } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
// import { AnimationTab } from '../../types'

type PropTypes = {
    setAnimateTab: Dispatch<SetStateAction<any>>
}

const Navigation = ({setAnimateTab}: PropTypes) => {
    const shouldReduceMotion = useReducedMotion()
    const [activeTab, setActiveTab] = useState(1)
    const location = useLocation();

    const breakpoint = useBreakpoint();

    const checkLocation = (item: NavigationItem) => {
        return location.pathname === item.to
    }

    const handleNavAnimation = (item: NavigationItem) => {
        //define side
        const {id, to} = item

        if(activeTab === id) return false;
        //clicked right
        if(activeTab > id) {
            setActiveTab(id)
            return setAnimateTab({
                initialX: {x: shouldReduceMotion ? '50%' : '110%'},
                animateX: {x: '0%'},
                to
                
            })
        }
        //clicked left
        if(activeTab < id) {
            setActiveTab(id)
            return setAnimateTab({
                initialX: {x: shouldReduceMotion ? '-50%' : '-110%'},
                animateX: {x: '0%'},
                to
            })
        }
    
    }

    return (
        <Box>
            <Center pt="5" pb={breakpoint === 'base' && 'sm' ? '5rem' : '0'}>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    width='100%'
                    height='100%'
                >
                    
                    <ButtonGroup gap={breakpoint === 'base' && 'sm' ? 1 : 4}>
                        {navData && navData.navItems.map((item: NavigationItem, index) => (
                            <Link to={item.to} key={item.icon} onClick={() => handleNavAnimation(item)}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: index,
                                        ease: [0, 0.71, 0.2, 1.01],
                                        scale: {
                                            type: "spring",
                                            damping: shouldReduceMotion ? 2 : 4,
                                            stiffness: shouldReduceMotion ? 50 : 100,
                                            restDelta: 0.001
                                        }
                                    }}
                                    style={{filter: 'drop-shadow(7px 7px 7px rgba(0, 0, 0, 0.25))'}}
                                >
                                    <Tooltip hasArrow label={item.tooltip} bg='grey.50'>
                                        <Button
                                            background={checkLocation(item) ? '#FFD500' : 'gray.500'} 
                                            py='2rem'
                                            _hover={checkLocation(item) ? {} : { transform: 'scale(0.8)' }}
                                        >
                                            <Image src={item.icon} alt={item.tooltip} width={'max-content'} height={'max-content'}/>
                                        </Button>
                                    </Tooltip>
                                </motion.div>
                            </Link>
                        ))}
                    </ButtonGroup>
                </Box>
            </Center>
        </Box>
    )
}

export default Navigation;