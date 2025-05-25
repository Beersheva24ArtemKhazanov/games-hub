import { type FC } from "react";
import { Text, List, HStack, Avatar, Button, Spinner } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
interface Props {
  onSelectGenre: (genre: string | null) => void;
  selectedGenre: string | null;
}
const GenreList: FC<Props> = ({ onSelectGenre, selectedGenre }) => {
  const { data: genres, errorMessage, isLoading } = useGenre();
  return isLoading ? (
    <Spinner></Spinner>
  ) : (
    <>
      {errorMessage ? (
        <Text color="red" fontSize={"2.5rem"}>
          {errorMessage}
        </Text>
      ) : (
        <List.Root listStyle="none" maxHeight="85vh" overflow="auto">
          <List.Item key={"g.id"}>
            <HStack marginStart={"4vw"}>
              <Button
                fontWeight={!selectedGenre ? "bold" : "normal"}
                variant={"outline"}
                borderWidth="0"
                onClick={() => onSelectGenre(null)}
              >
                All Genres
              </Button>
            </HStack>
          </List.Item>
          {genres.map((g) => (
            <List.Item key={g.id}>
              <HStack padding={2}>
                <Avatar.Root shape="rounded" size="lg" me="-1">
                  <Avatar.Fallback name={g.name} />
                  <Avatar.Image src={g.image_background} />
                </Avatar.Root>
                <Button
                  fontWeight={selectedGenre === g.slug ? "bold" : "normal"}
                  variant={"outline"}
                  borderWidth="0"
                  onClick={() => onSelectGenre(g.slug)}
                >
                  {g.name}
                </Button>
              </HStack>
            </List.Item>
          ))}
        </List.Root>
      )}
    </>
  );
};

export default GenreList;