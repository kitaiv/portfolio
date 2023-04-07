import React from 'react'
import { Flex, Box, Link, Text } from '@chakra-ui/react'
import { useBreakpoint } from '@chakra-ui/react'
import { footerData } from '../../data'

const FooterComponent = () => {

    const {seeCode, footerText} = footerData

    const breakpoint = useBreakpoint()
    return (
        <Flex
            display={breakpoint === 'base' && 'sm' ? 'none' : 'block'}
            position='absolute'
            bottom='.5rem'
            right='.5rem'
            color='gray.500'
            textAlign='center'
            lineHeight='1rem'
        >
            <Box>
                <Link href={seeCode.link} target="_blank" color="blue.300">{seeCode.text}</Link>
            </Box>
            <Box>
                <Text>{footerText.text_1}</Text>
                <Text>{footerText.text_2}</Text>
            </Box>
        </Flex>
    )
}

export default FooterComponent