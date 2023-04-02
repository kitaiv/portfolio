import React, {useContext} from 'react'
import { Field, Form, Formik } from 'formik'
import { FormControl, FormLabel, Input, FormErrorMessage, Button, Textarea, useToast } from '@chakra-ui/react'
import sendMessageToBot from '../../api'
import Context from '../../Context'

const ContactForm = () => {
  const fetchError = useToast()
  const context = useContext(Context)

  // @ts-expect-error
  const {setIsMsgSent} = context

  function validateName(value: string) {
    let error
    if (!value) error = "You cannot leave this field empty"
    return error
  }

  function validateEmail(value: string) {
    let error
    if (!value) error = "You cannot leave this field empty"
    return error
  }

  function validateMessage(value: string) {
    let error
    if (!value) error = "You cannot leave this field empty"
    return error
  }

  return (
      <Formik
      initialValues={{ name: '', email: '', message: '' }}
      onSubmit={(values, actions) => {
        try {
          const result = sendMessageToBot(values)
          result.then(res => {
            if(res.ok){
              setIsMsgSent(true)
              localStorage.setItem('isMessageSent', JSON.stringify(true))
            }
          })
          .catch(error => {
            fetchError({
              title: "Error occured while sending your message. Please try again later!",
              status: 'error',
              isClosable: true,
            })
            actions.setSubmitting(false)
          })
          actions.setSubmitting(false)
        } catch (error) {
          console.error('Error:', error);
          actions.setSubmitting(false)
        }
        
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2))
        //   actions.setSubmitting(false)
        // }, 1000)
      }}
    >
      {(props) => (
        <Form style={{width: '100vh'}}>
          <Field name='name' validate={validateName}>
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel color='#fff'>Name/Company</FormLabel>
                <Input {...field} placeholder='Apple Inc.' color='#fff'/>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='email' validate={validateEmail}>
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel color='#fff'>Email</FormLabel>
                <Input {...field} placeholder='mail@example.com' color='#fff' />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='message' validate={validateMessage}>
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.message && form.touched.message}>
                <FormLabel color='#fff'>Message</FormLabel>
                <Textarea
                  {...field}
                  placeholder='Input message'
                  size='sm'
                  resize='vertical'
                  color='#fff'
                />
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme='twitter'
            isLoading={props.isSubmitting}
            type='submit'
            w='100%'
          >
            Send
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm;