import { useQuery } from "@tanstack/react-query";

import { FetchResponse } from "../services/api";
import api from "../services/api";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      api
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePlatforms;
