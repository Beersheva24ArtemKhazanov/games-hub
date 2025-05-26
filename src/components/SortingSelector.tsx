import { Menu, Button, Portal } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { type FC, useState } from "react";
import {easeOut} from 'framer-motion';
import ComponentMotion from "./ComponentMotion";
import sortOptions from "../../config/sort-config.json"
export type SortOption = typeof sortOptions[0]
interface Props {
  selectedOrdering: SortOption | null;
  onSelectOrdering: (platform: SortOption | null) => void;
}
const duration=0.5;

const SortingSelector: FC<Props> = ({ onSelectOrdering, selectedOrdering}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
          <Menu.Root onExitComplete={() => setIsOpen(false)}>
            <Menu.Trigger asChild>
              <Button
                variant="outline"
                size="sm"
                borderWidth={0}
                onClick={() => setIsOpen(!isOpen)}
              >
                {` Order by ${selectedOrdering?.displayName || "Relevance"}`}
                {isOpen ? <ComponentMotion duration={duration} timing={easeOut}>
                    <FaChevronUp />
               </ComponentMotion> : <FaChevronDown></FaChevronDown>}
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <ComponentMotion duration={duration} timing={easeOut}>
                    <Menu.Content>
                      {sortOptions.map((option) => (
                        <Menu.Item
                          key={option.value}
                          onClick={() => {
                            onSelectOrdering(option);
                            setIsOpen(false);
                          }}
                          value={option.value}
                        >
                          {option.displayName}
                        </Menu.Item>
                      ))}
                    </Menu.Content>
                </ComponentMotion>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
     
    </>
  );
};

export default SortingSelector;