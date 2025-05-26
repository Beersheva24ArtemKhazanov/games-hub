import { Box, Input, InputGroup } from '@chakra-ui/react'
import { useRef, type FC, type FormEvent } from 'react'
import { FaSearch } from 'react-icons/fa'

interface Props {
    searchSubmitter: (text: string) => void
}

const SearchBar: FC<Props> = ({searchSubmitter}) => {
    const inputElement = useRef<HTMLInputElement>(null);

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        inputElement.current?.blur();
        searchSubmitter(inputElement.current?.value || "");
    }

    return (
        <Box as="form" onSubmit={onSubmit} boxSize={"100%"}>
            <InputGroup startElement={<FaSearch></FaSearch>}>
                <Input onFocus={() => inputElement.current?.value && (inputElement.current.value = "")} ref={inputElement} borderRadius={"30px"} placeholder='Search Games'/>
            </InputGroup>
        </Box>
    )
}

export default SearchBar