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
// import { ReactComponent as ThunderIcon } from '../../assets/img/thunder-icon.svg'
import { ProductionIcon, GithubSmallIcon } from '../../assets/img';
import { createIcon } from '@chakra-ui/icons'


const SmThunderIcon = createIcon({
    path: (
        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.91427 1.49999C8.91055 1.50013 8.907 1.50154 8.90421 1.50399L1.5973 8.57099C1.5614 8.60578 1.53679 8.65045 1.52662 8.69925C1.51644 8.74806 1.52117 8.79877 1.5402 8.84488C1.55922 8.89099 1.59168 8.9304 1.6334 8.95804C1.67511 8.98567 1.72418 9.00028 1.77431 8.99999H5.08128C5.20504 9.00001 5.32689 9.03031 5.4361 9.08822C5.5453 9.14612 5.63849 9.22985 5.70746 9.33202C5.77643 9.43419 5.81906 9.55166 5.83158 9.67408C5.84411 9.7965 5.82615 9.9201 5.77929 10.034L4.0564 14.222L11.0787 7.42899C11.1145 7.39425 11.1391 7.34968 11.1493 7.30097C11.1595 7.25226 11.1549 7.20163 11.136 7.15556C11.1171 7.10949 11.0848 7.07008 11.0432 7.04236C11.0016 7.01465 10.9527 6.99989 10.9027 6.99999H7.5957C7.46952 7 7.34534 6.96854 7.23455 6.90848C7.12376 6.84842 7.02989 6.76169 6.96154 6.65622C6.89319 6.55075 6.85255 6.42992 6.84333 6.30479C6.83411 6.17966 6.85661 6.05423 6.90876 5.93999L8.92835 1.52199L8.93137 1.51599C8.9308 1.5127 8.92942 1.50961 8.92734 1.50699C8.92579 1.50458 8.92373 1.50254 8.92131 1.50099L8.91326 1.49999H8.91427ZM7.85117 0.429989C8.10593 0.184104 8.43902 0.0343268 8.79297 0.00649188C9.14691 -0.0213431 9.49954 0.0745095 9.79001 0.277516C10.0805 0.480523 10.2906 0.777956 10.3841 1.11851C10.4776 1.45907 10.4487 1.82139 10.3022 2.14299L8.76743 5.49999H10.9027C12.4817 5.49999 13.2622 7.40899 12.1297 8.50399L4.74737 15.646C4.51282 15.8728 4.19856 15.9998 3.87134 16H3.5676C3.36135 16 3.15826 15.9495 2.97626 15.8531C2.79425 15.7566 2.63891 15.6171 2.52392 15.4468C2.40894 15.2766 2.33786 15.0808 2.31693 14.8768C2.296 14.6728 2.32588 14.4668 2.40392 14.277L3.95784 10.5H1.77431C0.195255 10.5 -0.585222 8.59099 0.547274 7.49599L7.85016 0.428989L7.85117 0.429989Z" fill="#1CA1F2" />
        </svg>
    )
})

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
                            tag.title.includes('GitHub') && <Image src={GithubSmallIcon} me='2' />
                        }

                        {
                            tag.title.includes('Production') && <Image src={ProductionIcon} me='2' />
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
                                                <ListIcon as={SmThunderIcon as ElementType} color={'grey.100'} />
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
                                            <ListIcon as={SmThunderIcon as ElementType} color={'grey.100'} />
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