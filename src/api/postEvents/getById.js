import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "..";

const getPostEventById = async (id) => {
    const response = await axiosInstance.get("/post-events/" + id);
    return response.data;
}

export const GetPostEventByIdQuery = (id) => {
    return useQuery({
        queryKey: ["post-events-byId", id],
        queryFn: ({queryKey}) => getPostEventById(queryKey[1]),
    })
}