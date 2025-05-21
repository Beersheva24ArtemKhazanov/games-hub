import type { Genre } from "../model/fetch-genre-types"
import useFetchData from "./useFetchData"

export default function useGenre() : {data:Genre[], errorMessage: string, isLoading: boolean} {
    return useFetchData<Genre>("/genres");
}