import { SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"
import useGame from "../hooks/useGame"
import type { FC } from "react"

interface Props {
    selectedGenre: string | null
}

const GameGrid: FC<Props> = ({selectedGenre}) => {
    const {data: games, errorMessage, isLoading} = useGame(selectedGenre);
    return isLoading ? <Spinner/>: (<>
        {errorMessage ? <Text color={"red"} fontSize={"2.5rem"}>{errorMessage}</Text> :
            <SimpleGrid paddingEnd={2} maxHeight="85vh" overflow="auto" marginTop= "2vh" columns={{
                base: 1,
                sm: 2,
                md: 3
            }} gap={5}>
                {games.map(g => <GameCard key={g.id} game={g}/>)}
            </SimpleGrid>}
    </>)
}

export default GameGrid