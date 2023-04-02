import React, { useContext } from 'react'
import WorkItem from './WorkItem'
import { workData } from '../../data'
import { Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { WorkExperienceItem } from '../../types'
import Context from '../../Context'

type PropTypes = {
    isAnimated: boolean
}

const WorkComponent = ({ isAnimated }: PropTypes): JSX.Element => {
    const context = useContext(Context)
    
    // @ts-expect-error
    const {setSelectedItem, onOpen} = context

    const handleItemClick = (item: WorkExperienceItem) => {
        setSelectedItem(item);
        onOpen();        
    };

    return (
        <Stack spacing='3'>
            {
                workData && workData.workList.map((item, index) => (
                    <motion.div
                        style={{filter: 'drop-shadow(7px 7px 7px rgba(0, 0, 0, 0.25))'}}
                        onClick={() => handleItemClick(item)}
                        initial={isAnimated ? {} : { opacity: 0, scale: 0.4 }}
                        animate={isAnimated ? {} : { opacity: 1, scale: 1 }}
                        transition={isAnimated ? {} : {
                            duration: 0.9,
                            delay: index * 0.3,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        key={item.dateRange}
                    >
                        <WorkItem item={item} />
                    </motion.div>
                ))
            }
        </Stack>
    )
}

export default WorkComponent;