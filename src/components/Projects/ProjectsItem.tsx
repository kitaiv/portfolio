import React, {useContext} from 'react'
import { ProjectItem } from '../../types'
import { Card, Stack, CardBody, Heading, CardFooter, Button, Box, Image, useBreakpoint} from '@chakra-ui/react';
import { ProjectBg } from '../../assets/img/index';
import Context from '../../Context';

type PropTypes = {
    project: ProjectItem
}

const ProjectsItem = ({ project }: PropTypes) => {
    const breakpoint = useBreakpoint()

    const { title } = project

    const context = useContext(Context)

    // @ts-expect-error
    const { setSelectedItem, onOpen } = context

    const handleClickProject = (project: ProjectItem) => {
        setSelectedItem(project);
        onOpen();
    };


    return (
        <Card
            direction={{ base: 'row', sm: 'row' }}
            overflow='hidden'
            variant='elevated'
            background='gray.700'
            color='gray.300'
            px='2rem'
            h={breakpoint === 'base' && 'sm' ? '150px' : 'auto'}
        >
            <Box display={breakpoint === 'base' && 'sm' ? 'none' : 'flex'} justifyContent='center' alignItems='center' >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%' }}
                    src={ProjectBg}
                    alt='project'
                />
            </Box>

            <Stack>
                <CardBody>
                    <Heading size='md'>{title}</Heading>

                    {/* <Text py='1' size='sm'>
                            {description}
                        </Text> */}
                </CardBody>

                <CardFooter>
                    <Button variant='outline' colorScheme='yellow' w='200px' onClick={() => handleClickProject(project)}>
                        View
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default ProjectsItem