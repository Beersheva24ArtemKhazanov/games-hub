import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GanreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import type GameQuery from "./model/GameQuery";
import SortingSelector from "./components/SortingSelector";
import GenreSelector from "./components/GenreSelector";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        md: `'nav nav' 'aside main'`,
      }}
    >
      <GridItem area="nav">
        <Nav searchSubmitter={(text) => setGameQuery({...gameQuery, search: text})}></Nav>
      </GridItem>
      <Stack hideBelow={"md"}>
        <GridItem area="aside" paddingX={5}>
          <GanreList
            selectedGenre={gameQuery.genreName}
            onSelectGenre={(genreName: string | null) =>
              setGameQuery({ ...gameQuery, genreName })
            }
          />
        </GridItem>
      </Stack>

      <GridItem area="main" paddingX="5">
        <PlatformSelector
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
          selectedPlatform={gameQuery.platform}
        ></PlatformSelector>
        <SortingSelector onSelectOrdering={(option) => setGameQuery({ ...gameQuery, ordering: option })} selectedOrdering={gameQuery.ordering}></SortingSelector>
        <Box display={"inline"} hideFrom={"md"} hideBelow={"sm"}>
          <GenreSelector selectedGenre={gameQuery.genreName}
            onSelectGenre={(genreName: string | null) =>
              setGameQuery({ ...gameQuery, genreName })
            }/>
        </Box >
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;