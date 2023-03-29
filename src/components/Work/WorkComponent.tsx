import React from 'react'
import WorkItem from './WorkItem'
import { workData } from '../../data'
import { Stack, useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Modal from '../UI/Modal'
import { WorkExperienceItem } from '../../types'

type PropTypes = {
    isAnimated: boolean
}

const WorkComponent = ({ isAnimated }: PropTypes): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedItem, setSelectedItem] = React.useState<WorkExperienceItem | null>(null);

    const handleItemClick = (item: WorkExperienceItem) => {
        setSelectedItem(item);
        onOpen();
    };

    return (
        <Stack spacing='3'>
            {
                workData && workData.workList.map((item, index) => (
                    <motion.div
                        onClick={() => handleItemClick(item)}
                        initial={isAnimated ? {} : { opacity: 0, scale: 0.4 }}
                        animate={isAnimated ? {} : { opacity: 1, scale: 1 }}
                        transition={isAnimated ? {} : {
                            duration: 0.9,
                            delay: index * 0.3,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        key={item.title}
                    >
                        <WorkItem item={item} />
                    </motion.div>
                ))
            }

            {selectedItem && <Modal isOpen={isOpen} onClose={onClose} item={selectedItem} />}
        </Stack>
    )
}

export default WorkComponent;