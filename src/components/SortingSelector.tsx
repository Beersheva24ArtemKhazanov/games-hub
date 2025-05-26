import { Menu, Button, Portal } from '@chakra-ui/react';
import React, { useState, type FC } from 'react'
import ComponentMotion from './ComponentMotion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { easeOut } from 'framer-motion';

const orderingAr = ['name', 'released', 'added', 'created', 'updated', 'rating', "metacritic"]

const duration = 0.5;

interface Props {
    onSelectSorter: (sorter: string | null) => void;
    selectedSorter: string | null
}


const SortingSelector: FC<Props> = ({
    selectedSorter,
    onSelectSorter
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const isDesc = selectedSorter?.startsWith('-');
    const selectedKey = isDesc ? selectedSorter?.slice(1) : selectedSorter;

    function toggleMinus(item: string) {
    return item.startsWith('-') ? item.slice(1) : `-${item}`;
}

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    borderWidth={0}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {selectedSorter
                        ? `${selectedKey} ${isDesc ? '▼' : '▲'}`
                        : "Order By"}
                    {isOpen ? <ComponentMotion duration={duration} timing={easeOut}>
                        <FaChevronUp />
                    </ComponentMotion> : <FaChevronDown />}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <ComponentMotion duration={duration} timing={easeOut}>
                        <Menu.Content>
                            {orderingAr.map((item) => {
                                const isSelected = selectedKey === item;
                                return <Menu.Item
                                    key={item}
                                    onClick={() => {
                                        if (isSelected) {
                                                onSelectSorter(toggleMinus(selectedSorter!));
                                            } else {
                                                onSelectSorter(item);
                                            }
                                        setIsOpen(false);
                                    }}
                                    value={item}>
                                    {item}
                                </Menu.Item>
                            })}
                        </Menu.Content>
                    </ComponentMotion>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default SortingSelector