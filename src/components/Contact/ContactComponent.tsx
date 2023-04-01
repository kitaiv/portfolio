import React, {useContext} from 'react';
import { Box } from '@chakra-ui/react';
import ContactForm from './ContactForm';
import Context from '../../Context';
import AlertNotification from '../UI/Alert';

const ContactComponent = () => {
    const context = useContext(Context)

    // @ts-expect-error
    const {isMsgSent} = context

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