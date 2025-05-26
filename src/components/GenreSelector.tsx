import { useState, type FC } from 'react'
import { Button, Menu, Portal, Spinner, Text } from '@chakra-ui/react';
import ComponentMotion from './ComponentMotion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { easeOut } from 'framer-motion';
import useGenre from '../hooks/useGenre';

interface Props {
    onSelectGenre: (genre: string | null) => void;
    selectedGenre: string | null;
}
const duration = 0.5;

const GenreSelector: FC<Props> = ({ onSelectGenre, selectedGenre }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { data: genres, errorMessage, isLoading } = useGenre();
    return (
        isLoading ? (
            <Spinner></Spinner>
        ) : (
            <>
                {errorMessage ? (
                    <Text color="red" fontSize={"2.5rem"}>
                        {errorMessage}
                    </Text>
                ) : (
                    <Menu.Root onExitComplete={() => setIsOpen(false)}>
                        <Menu.Trigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                borderWidth={0}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {`${selectedGenre || "All Genres"}`}
                                {isOpen ? <ComponentMotion duration={duration} timing={easeOut}>
                                    <FaChevronUp />
                                </ComponentMotion> : <FaChevronDown></FaChevronDown>}
                            </Button>
                        </Menu.Trigger>
                        <Portal>
                            <Menu.Positioner>
                                <ComponentMotion duration={duration} timing={easeOut}>
                                    <Menu.Content>
                                        {genres.map((option) => (
                                            <Menu.Item
                                                key={option.id}
                                                onClick={() => {
                                                    onSelectGenre(option.slug);
                                                    setIsOpen(false);
                                                }}
                                                value={option.name}
                                            >
                                                {option.name}
                                            </Menu.Item>
                                        ))}
                                    </Menu.Content>
                                </ComponentMotion>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root>
                )} </>)
    )
}

export default GenreSelector