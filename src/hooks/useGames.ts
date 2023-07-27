import { useQuery } from "@tanstack/react-query";

import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  background_image: string;
  id: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
