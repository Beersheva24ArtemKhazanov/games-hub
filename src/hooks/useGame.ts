import type { Game } from "../model/fetch-game-types"
import useFetchData from "./useFetchData"

export default function useGame() : {data:Game[], errorMessage: string, isLoading: boolean} {
    return useFetchData<Game>("/games");
}