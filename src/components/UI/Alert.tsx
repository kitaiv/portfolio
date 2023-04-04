import React from 'react'
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'

const AlertNotification = () => {
    return (
        <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='250px'
            borderRadius='12px'
            >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                Message sent!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                Thanks for contacting. I will get back to you soon.
            </AlertDescription>
            </Alert>
    )
}

export default AlertNotification