import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "..";

const getPostEvent = async () => {
    const response = await axiosInstance.get("/post-events");
    return response.data;
}

export const GetPostEventQuery = () => {
    return useQuery({
        queryKey: ["post-events"],
        queryFn: () => getPostEvent(),
    })
}