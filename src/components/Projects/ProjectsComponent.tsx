import React from 'react'
import { Stack } from '@chakra-ui/react';
import { projectsData } from '../../data';
import ProjectsItem from './ProjectsItem';
import { motion } from 'framer-motion';

type PropTypes = {
    isAnimated: boolean
}

const ProjectsComponent = ({ isAnimated }: PropTypes) => {

    const { projectsList } = projectsData

    return (
        <Stack spacing={4}>
            {projectsList && projectsList.map((project, index) => (
                <motion.div
                style={{filter: 'drop-shadow(7px 7px 7px rgba(0, 0, 0, 0.25))'}}
                initial={isAnimated ? {} : { opacity: 0, scale: 0.4 }}
                animate={isAnimated ? {} : { opacity: 1, scale: 1 }}
                transition={isAnimated ? {} : {
                    duration: 0.9,
                    delay: index * 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                key={project.id}
            >
                <ProjectsItem
                    project={project}
                    key={project.id}
                />
                </motion.div>
            ))}
        </Stack>
    )
}

export default ProjectsComponent;