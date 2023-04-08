import React, {useLayoutEffect, useContext} from 'react'
import Context from '../Context'
import { Box, Text, Image, Code, Button } from '@chakra-ui/react'
import { Sad404Icon } from '../assets/img'
import { Link as RouterLink } from 'react-router-dom'


const NotFound = () => {
    const context = useContext(Context)
    
    //@ts-expect-error
    const {handlePageTitleChange} = context

    useLayoutEffect(() => {
        handlePageTitleChange('Not Found')
    }, [handlePageTitleChange])

    return (
        <Box bg='gray.200' borderRadius='12px' p='2rem' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap={5}>
            <Image src={Sad404Icon}/>
            <Text fontWeight='bold'>Sorry, I haven't found this page</Text>
            <Code colorScheme='red'>Status Code: 404</Code>
            <Button variant='solid' colorScheme='twitter'>
                <RouterLink to='/'>Back to Home</RouterLink> 
            </Button>
        </Box>
    )
}

export default NotFound