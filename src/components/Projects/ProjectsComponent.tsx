import React from 'react'
import { Stack } from '@chakra-ui/react';
import { projectsData } from '../../data';
import ProjectsItem from './ProjectsItem';

type PropTypes = {
    isAnimated: boolean
}

const ProjectsComponent = ({ isAnimated }: PropTypes) => {

    const { projectsList } = projectsData

    return (
        <Stack spacing={4}>
            {projectsList && projectsList.map(project => (
                <ProjectsItem
                    project={project}
                    key={project.id}
                />
            ))}
        </Stack>
    )
}

export default ProjectsComponent;