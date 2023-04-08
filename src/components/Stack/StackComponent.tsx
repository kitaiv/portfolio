import React, {useContext} from 'react';
import { Center, Flex, Spacer, Image, Tooltip, useToast, useBreakpoint } from '@chakra-ui/react';
import { stackData } from '../../data';
import { StackListItem } from '../../types';
import Animate from '../Animate';
import { animate } from '../../data';
import Context from '../../Context';

const StackComponent = () => {
    const toast = useToast()
    const breakpoint = useBreakpoint()

    const context = useContext(Context);

    // @ts-expect-error
    const {animationPlayed} = context

    const isAnimated = animationPlayed.stackAnimation

    const firstRow = stackData.stackList.slice(0, 5);
    const secondRow = stackData.stackList.slice(5, 9);
    const thirdRow = stackData.stackList[stackData.stackList.length - 1]

    function showToastMobile(name: string){
        if(breakpoint === 'base' || breakpoint === 'sm'){
            toast({
                title: name,
                description: "",
                status: 'info',
                duration: 5000,
                isClosable: true,
                position: 'top'
              })
              return
        }
        return null
    }

    return (
        <Flex gap={6} direction={'column'}>
            <Flex justify={'space-evenly'}>
                {firstRow && firstRow.map((item: StackListItem) => (
                    <Center key={item.tooltip}>
                        <Animate animationData={animate(item, isAnimated).stackAnimation}>
                            <Tooltip
                                label={item.tooltip}
                                closeOnClick={false}
                            >
                                <Image src={item.icon} key={item.tooltip} w="100px" h="100px" onClick={() => showToastMobile(item.tooltip)} />
                            </Tooltip>
                        </Animate>
                    </Center>
                ))}
            </Flex>
            <Spacer />
            <Flex justify={'space-evenly'}>
                {secondRow && secondRow.map((item: StackListItem) => (
                    <Center key={item.tooltip}>
                        <Animate animationData={animate(item, isAnimated).stackAnimation}>
                            <Tooltip
                                label={item.tooltip}
                                closeOnClick={false}
                            >
                                <Image src={item.icon} key={item.tooltip} w="100px" h="100px" onClick={() => showToastMobile(item.tooltip)}/>
                            </Tooltip>
                        </Animate>
                    </Center>
                ))}
            </Flex>
            <Spacer />
            <Flex justify='center'>
                <Center w='100px' h='100px'>
                    <Animate animationData={animate(thirdRow, isAnimated).stackAnimation} >
                        <Tooltip
                            label={thirdRow.tooltip}
                            closeOnClick={false}
                        >
                            <Image src={thirdRow.icon} key={thirdRow.tooltip} w="100%" h="100%" onClick={() => showToastMobile(thirdRow.tooltip)} />
                        </Tooltip>
                    </Animate>
                </Center>
            </Flex>
        </Flex>
    )
}

export default StackComponent