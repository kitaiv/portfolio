import React, {useContext, useLayoutEffect} from 'react';
import { Box } from '@chakra-ui/react';
import ContactForm from './ContactForm';
import Context from '../../Context';
import AlertNotification from '../UI/Alert';

const ContactComponent = () => {
    const context = useContext(Context)

    // @ts-expect-error
    const {isMsgSent, handlePageTitleChange} = context

    useLayoutEffect(() => {
        handlePageTitleChange('Contact me')
    }, [handlePageTitleChange])

    return (
        <Box w='100%'>
            {
                isMsgSent ?
                <AlertNotification />
                :
                <ContactForm />
            }
        </Box>
    )
}

export default ContactComponent;