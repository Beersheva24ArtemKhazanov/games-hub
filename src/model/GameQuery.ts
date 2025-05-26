import {  type SortOption } from "../components/SortingSelector";
import type ParentPlatform from "./ParentPlatform";

export default interface GameQuery {
    genreName: string | null;
    platform: ParentPlatform | null,
    search: string | null
    ordering: SortOption | null
}