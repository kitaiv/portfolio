import React from 'react'
import { Card, CardHeader, CardBody, Heading } from '@chakra-ui/react';
import { WorkExperienceItem } from '../../types';
import { motion } from 'framer-motion';

type PropTypes = {
    item: WorkExperienceItem
}

const WorkItem = ({ item }: PropTypes) => {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        >
            <Card size='sm' borderColor='gray.400' variant='outline' background='transparent' color='gray.200' cursor='pointer' pe='10rem'>
                <CardHeader>
                    <Heading size='md'>{item.company}</Heading>
                </CardHeader>
                <CardBody>
                    <Heading size="xs" color='gray.400'>{item.dateRange}</Heading>
                </CardBody>
            </Card>
        </motion.div>
    )
}

export default WorkItem;