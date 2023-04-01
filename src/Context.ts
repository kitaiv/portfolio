import { createContext } from 'react';
import { UseDisclosureReturn } from '@chakra-ui/react';
import { WorkExperienceItem, ProjectItem } from './types';

type ContextType = {
    selectedItem: WorkExperienceItem | ProjectItem | {}
    isOpen: UseDisclosureReturn['isOpen'] | null
    onClose: UseDisclosureReturn['onClose'] | null
    onOpen: UseDisclosureReturn['onOpen'] | null
    setSelectedItem: any,
    setIsMessageSent: any,
    isMessageSent: boolean
} | {}

const isMessageSentLocalStorage = JSON.parse(localStorage.getItem('isMessageSent') ?? 'false')

const defaultValues = {
    selectedItem: {},
    isOpen: null,
    onClose: null,
    onOpen: null,
    setSelectedItem: null,
    setIsMessageSent: null,
    isMessageSent: isMessageSentLocalStorage
}

const Context = createContext<ContextType | {}>(defaultValues);

export default Context;
