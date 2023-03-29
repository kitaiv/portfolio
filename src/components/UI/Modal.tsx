import React from 'react'
import { WorkExperienceItem } from '../../types'
import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Button,
    ModalFooter,
    Heading,
    UnorderedList,
    ListItem,
    Divider,
    useBreakpoint,
    Highlight
} from '@chakra-ui/react'
import { UseDisclosureReturn } from '@chakra-ui/hooks';



type PropTypes = {
    item: WorkExperienceItem
    isOpen: UseDisclosureReturn['isOpen']
    onClose: UseDisclosureReturn['onClose']
}

const Modal = ({ item, isOpen, onClose}: PropTypes) => {
    const breakpoint = useBreakpoint()

    return (
        <ChakraModal
            onClose={onClose}
            // finalFocusRef={btnRef}
            isOpen={isOpen}
            scrollBehavior='inside'
            size="lg"
        >
            <ModalOverlay />
            <ModalContent>  
                <ModalHeader>
                    <Heading size='md' my='1'>{item.company}</Heading>
                    <Heading size='xs' my='1'>{item.dateRange}</Heading>
                    <Heading size='xs' mt='4' lineHeight='tall'>
                        {/* <Text display='inline' fontWeight='400' color='gray.300'>Position: </Text>  */}
                        <Highlight
                            query={item.title}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                        >
                            {item.title}
                        </Highlight>
                    </Heading>
                </ModalHeader>
                {breakpoint === 'base' && 'sm' ? null : <ModalCloseButton />}
                <ModalBody>
                    <Divider mb='5'/>
                    <Heading mb='2' size='sm'>{item.jobSummary.keyResponsibilities.title}</Heading>
                    <UnorderedList>
                        {
                            item.jobSummary.keyResponsibilities.responsibilitiesList
                            .map(str => <ListItem key={Symbol(str).toString()}>{str}</ListItem>)
                        }
                    </UnorderedList>
                    <Divider my={'3'} />
                    <Heading mb='2' size='sm'>{item.jobSummary.skills.title}</Heading>
                    <UnorderedList>
                        {
                            item.jobSummary.skills.skillsList
                            .map(str => <ListItem key={Symbol(str).toString()}>{str}</ListItem>)
                        }
                    </UnorderedList>
                </ModalBody>
                <ModalFooter>
                    <Button width={breakpoint === 'base' && 'sm' ? '100%' : 'auto'} onClick={onClose} variant='outline' _hover={{color: 'gray.800', background: 'gray.100'}}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </ChakraModal>
    )
}

export default Modal