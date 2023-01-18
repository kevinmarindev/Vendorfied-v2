import { useQuery } from "@tanstack/react-query";
import { User } from "models/User";

export const fetchUser = () => useQuery({
    queryKey: ['user'],
    queryFn: () => fetch('/api/user').then(async (res) => (await res.json()) as User),
});
