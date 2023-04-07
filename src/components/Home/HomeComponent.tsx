import React, { useLayoutEffect, useContext } from 'react'
import Context from '../../Context'
import { Box, Flex, Text, Image, Button, useBreakpoint, Center } from '@chakra-ui/react'
import { PicOfMe } from '../../assets/img'
import { homeData } from '../../data'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import { WavingHandIcon } from '../../assets/img';
// @ts-ignore-import
import cv from '../../assets/CV.pdf'

const HomeComponent = () => {
    const ctrls = useAnimation();
    const breakpoint = useBreakpoint();
    const context = useContext(Context);

    // @ts-expect-error
    const {animationPlayed} = context

    const isAnimated = animationPlayed.homeAnimation

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useLayoutEffect(() => {
        if (inView) {
            ctrls.start("visible");
        }
        if (!inView) {
            ctrls.start("hidden");
        }

    }, [ctrls, inView]);

    const wordAnimation = {
        hidden: {},
        visible: {},
    };

    const characterAnimation = () => {
        if (isAnimated) return ({
            hidden: {},
            visible: {},
        })
        return ({
            hidden: {
                opacity: 0,
                y: `0.25em`,
            },
            visible: {
                opacity: 1,
                y: `0em`,
                transition: {
                    duration: 0.5,
                    ease: [0.2, 0.65, 0.3, 0.9],
                },
            },
        })
    }

    return (
        <Flex direction={breakpoint === 'base' && 'sm' ? 'column' : 'row'} gap={10} >
            <Box>
                <Center>
                    <Image src={PicOfMe} alt="pic of me" w={breakpoint === 'base' && 'sm' ? '300px' : 'auto'}/>
                </Center>
            </Box>
            <Box w='100%'>
                <Text fontSize="sm" color="gray.50" mb="2" aria-label={homeData.smallText} align={breakpoint === 'base' && 'sm' ? 'center' : 'start'}>
                    {homeData.smallText.split(" ").map((word, index) => {
                        return (
                            <motion.span
                                ref={ref}
                                aria-hidden="true"
                                key={word + index * 2}
                                initial="hidden"
                                animate={!isAnimated ? ctrls : {}}
                                variants={wordAnimation}
                                transition={{
                                    delayChildren: index * 0.25,
                                    staggerChildren: 0.05,
                                }}
                            >
                                {word.split("").map((character) => {
                                    return (
                                        <motion.span
                                            aria-hidden="true"
                                            key={character}
                                            variants={characterAnimation()}
                                        >
                                            {character}
                                        </motion.span>
                                    );
                                })}
                            </motion.span>
                        )
                    })}
                    <Image display='inline' mb='-3px' ml='2' src={WavingHandIcon} w='20px' h='20px'></Image>
                </Text>
                <Text 
                    fontSize={breakpoint === 'base' && 'sm' ? 'sm' : 'lg'} 
                    align={breakpoint === 'base' && 'sm' ? 'center' : 'start'} 
                    color="gray.50"
                >
                    {homeData.mainText.split(".").map((word, index) => {
                        return (
                            <motion.span
                                style={{ marginRight: '0.25rem' }}
                                ref={ref}
                                aria-hidden="true"
                                key={index}
                                initial="hidden"
                                animate={!isAnimated ? ctrls : {}}
                                variants={wordAnimation}
                                transition={{
                                    delayChildren: index * 0.1,
                                    staggerChildren: 0.05,
                                }}
                            >
                                {word.split("").map((character, index) => {
                                    return (
                                        <motion.span
                                            aria-hidden="true"
                                            key={index}
                                            variants={characterAnimation()}
                                        >
                                            {character}
                                        </motion.span>
                                    );
                                })}
                            </motion.span>
                        )
                    })}
                </Text>
                <Link to={{ pathname: cv }} target="_blank" color="white">
                    <Button colorScheme='yellow' variant='outline' mt="1rem" float={breakpoint === 'base' && 'sm' ? 'right' : 'left'}>
                        Download CV
                    </Button>
                </Link>
            </Box>
        </Flex>
    )
}

export default HomeComponent