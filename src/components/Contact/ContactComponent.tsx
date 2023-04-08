import React, { useContext, useLayoutEffect } from 'react';
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, Button, Link } from '@chakra-ui/react';
import ContactForm from './ContactForm';
import Context from '../../Context';
import AlertNotification from '../UI/Alert';

const ContactComponent = () => {
  const context = useContext(Context);

  // @ts-expect-error
  const { isMsgSent, handlePageTitleChange } = context;

  useLayoutEffect(() => {
    handlePageTitleChange('Contact me');
  }, [handlePageTitleChange]);

  return (
    <Box w="100%" h='100vh' mt='5rem'>
      <Tabs 
        isFitted 
        variant='soft-rounded' 
        color='gray.200' 
        isLazy={true}
    >
        <TabList mb="1em">
          <Tab>Send message</Tab>
          <Tab>Send Email</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {isMsgSent ? <AlertNotification /> : <ContactForm />}
          </TabPanel>
          <TabPanel textAlign='center'>
            <Button colorScheme={'twitter'}>
                <Link href="mailto:svlawd@gmail.com" target="_blank">Click here to send email</Link>
            </Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ContactComponent;
