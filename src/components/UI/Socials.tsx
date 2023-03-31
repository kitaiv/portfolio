import React from 'react'
import { Box, Flex, Image, Tooltip } from '@chakra-ui/react';
import { socialsData } from '../../data';
import { SocialItem } from '../../types';
import { Link } from 'react-router-dom';

const Socials = () => {
    return (
        <Box
            position="fixed"
            bg='gray.300'
            left="0"
            top="50%"
            py={'1rem'}
            px={'1.2rem'}
            transform='translate(0, -50%)'
            borderTopRightRadius='12px'
            borderBottomRightRadius='12px'
            zIndex='999'
            filter='drop-shadow(12px 10px 5px rgba(0, 0, 0, 0.25));'
        >
            {/* @ts-ignore */}
            <Flex direction={'column'} gap={2}>
                {
                    socialsData.socialsList.map((item: SocialItem) => (
                        // @ts-ignore
                        <Tooltip hasArrow label={item.tooltip} placement='right' key={item.tooltip}>
                            <Link to={{pathname: item.link}} target='_blank'>
                                {/* @ts-ignore */}
                                <Image src={item.icon} key={item.icon} w='42px' h='42px' />
                            </Link>
                        </Tooltip>
                    ))
                }
            </Flex>
        </Box>
    )
}

export default Socials;