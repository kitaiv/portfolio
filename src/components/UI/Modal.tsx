import React, { useContext, ElementType } from 'react'

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
    Highlight,
    Text,
    Box,
    Link,
    ListIcon,
    List,
    Image
} from '@chakra-ui/react'
// import { UseDisclosureReturn } from '@chakra-ui/hooks';
import Context from '../../Context';
import { useModalContent } from '../../hooks';
// import { DimondIcon } from '../../assets/img';
import { ReactComponent as ThunderIcon } from '../../assets/img/thunder-icon.svg'
import { ProductionIcon, GithubSmallIcon } from '../../assets/img';

// type PropTypes = {
//     for: string;
// item: WorkExperienceItem | ProjectItem
// isOpen: UseDisclosureReturn['isOpen']
// onClose: UseDisclosureReturn['onClose']
// }

const Modal = () => {
    const breakpoint = useBreakpoint()
    const context = useContext(Context)

    //@ts-expect-error
    const { selectedItem, isOpen, onClose } = context
    const parsedContent = useModalContent(selectedItem)

    // @ts-expect-error
    const { title, subtitle, tags, body } = parsedContent

    const displayTagsOrButtons = () => (
        tags && tags.map((tag: any) => (
            tag.role ?
                <Highlight
                    query={tag.role}
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                    key={tag.role}
                >
                    {tag.role}
                </Highlight>
                :
                tag.link !== undefined && <Link href={tag.link ?? ''} target='_blank' me='2' key={tag.title}>
                    <Button colorScheme='twitter' size='xs' py='1rem'>
                        {
                            tag.title.includes('GitHub') && <Image src={GithubSmallIcon} me='2'/>
                        }

                        {
                            tag.title.includes('Production') && <Image src={ProductionIcon} me='2'/>
                        }

                        {tag.title}
                    </Button>
                </Link>

        )
        )
    )

    const displayTags = displayTagsOrButtons()

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
                    <Heading size='md' my='1'>{title}</Heading>
                    <Heading size='xs' my='1'>{subtitle}</Heading>
                    <Heading size='xs' mt='4' lineHeight='tall'>
                        {/* <Text display='inline' fontWeight='400' color='gray.300'>Position: </Text>  */}
                        {displayTags}
                    </Heading>
                </ModalHeader>
                {breakpoint === 'base' && 'sm' ? null : <ModalCloseButton />}
                <ModalBody>
                    <Text lineHeight='2rem'>
                        <Highlight query={body.keywords} styles={{ px: '1', py: '0.5', bg: 'orange.100' }}>
                            {body.text}
                        </Highlight>
                    </Text>
                    {
                        body.details &&
                        <Box>
                            <Divider my='2rem' />
                            <Heading my='1.5rem' size='sm'>
                                <Highlight
                                    query={body.details.resTitle}
                                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                                >
                                    {body.details.resTitle}
                                </Highlight>
                            </Heading>
                            <List spacing={'2'}>
                                {
                                    body.details.resList
                                        .map((str: string) => (
                                            <ListItem key={Symbol(str).toString()}>
                                                <ListIcon as={ThunderIcon as ElementType} color={'grey.100'} />
                                                {str}
                                            </ListItem>
                                        ))
                                }
                            </List>
                            <Divider my={'2rem'} />
                            <Heading my='1.5rem' size='sm'>
                                <Highlight
                                    query={body.details.skillTitle}
                                    styles={
                                        { px: '2', py: '1', rounded: 'full', bg: 'teal.100' }
                                    }
                                >
                                    {body.details.skillTitle}
                                </Highlight>
                            </Heading>
                            <List spacing={'2'}>
                                {
                                    body.details.skillsList
                                        .map((str: string) => <ListItem key={Symbol(str).toString()}>
                                        <ListIcon as={ThunderIcon as ElementType} color={'grey.100'} />
                                        {str}
                                    </ListItem>)
                                }
                            </List>
                        </Box>
                    }
                </ModalBody>
                <ModalFooter>
                    <Button width={breakpoint === 'base' && 'sm' ? '100%' : 'auto'} onClick={onClose} variant='outline' _hover={{ color: 'gray.800', background: 'gray.100' }}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </ChakraModal>
    )
}

export default Modal