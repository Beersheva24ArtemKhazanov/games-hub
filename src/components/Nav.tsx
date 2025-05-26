import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/image.png'
import { ColorModeButton } from './ui/color-mode'
import SearchBar from './SearchBar'
import type { FC } from 'react'

interface Props {
  searchSubmitter: (text:string) => void
}

const Nav: FC<Props> = ({searchSubmitter}) => {
  return (
    <HStack >
        <Image src={logo} boxSize={"30px"}></Image>
        <SearchBar searchSubmitter={searchSubmitter}></SearchBar>
        <ColorModeButton></ColorModeButton>
    </HStack>
  )
}

export default Nav