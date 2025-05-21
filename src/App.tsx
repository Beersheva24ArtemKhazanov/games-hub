import { Grid, GridItem, Stack } from "@chakra-ui/react"
import Nav from "./components/Nav"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  return (
    <Grid templateAreas={{
          base: `'nav' 'main'`,
          md: `'nav nav' 'aside main'`
        }} >
          <GridItem area="nav">
            <Nav></Nav>
          </GridItem>
          <Stack hideBelow={"md"}>
              <GridItem area="aside" paddingX={5}><GenreList onSelectGenre={(genreName:string) => setSelectedGenre(genreName)}/></GridItem>
          </Stack>
         
          <GridItem area="main"><GameGrid selectedGenre={selectedGenre}/></GridItem>
    </Grid>
  )
}

export default App
