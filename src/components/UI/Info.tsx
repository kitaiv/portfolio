import React from 'react'
import { Box, Popover, PopoverTrigger, Portal, PopoverContent, PopoverBody, Button, PopoverFooter, Link, Image, Text } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import { useBreakpoint } from '@chakra-ui/react'
import { footerData } from '../../data'
import { GithubSmallIcon } from '../../assets/img'

const Info = () => {
    const breakpoint = useBreakpoint()

    const { seeCode, footerText } = footerData
    return (
        <Box
            display={breakpoint === 'base' && 'sm' ? 'block' : 'none'}
            position='absolute'
            right='.5rem'
            top='.5rem'
            zIndex={1}
        >
            <Popover >
                <PopoverTrigger>
                    <Button
                        variant='outline' 
                        borderColor='gray.100' 
                        borderWidth='2px' 
                        _hover={{ 'background': 'inherit' }}
                        _active={{borderColor: 'twitter'}}
                    >
                        <WarningIcon color='gray.100' />
                    </Button>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent bg="gray.700" border='gray.200' color='gray.200' textAlign='center' boxShadow='-6px 10px 15px 5px rgba(0,0,0,0.7)'>
                        {/* <PopoverArrow /> */}
                        <PopoverBody>
                            <Link href={seeCode.link} target='_blank'>
                                <Button colorScheme='twitter' size='xs' p="1rem">
                                    <Image src={GithubSmallIcon} pe={2} />
                                    {seeCode.text}
                                </Button>
                            </Link>
                        </PopoverBody>
                        <PopoverFooter textAlign='center' lineHeight='1rem' color='gray.500' border='none'>
                            <Text>{footerText.text_1}</Text>
                            <Text>{footerText.text_2}</Text>
                        </PopoverFooter>
                    </PopoverContent>
                </Portal>
            </Popover>
        </Box>
    )
}

export default Info