import { SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"
import useGame from "../hooks/useGame"
import type { ReactNode } from "react";


const GameGrid = () => {
    const {data: games, errorMessage, isLoading} = useGame();
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