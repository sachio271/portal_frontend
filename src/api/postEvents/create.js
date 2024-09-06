import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "..";

const createEventPost = async ([data]) => {
    const response = await axiosInstance.post("/post-events", data, {
        headers: {
            "Content-Type" : "multipart/form-data"
            // "Authorization" : "Bearer " + token
        }
    });
    return response.data;
}

export const CreateEventPostMutation = () => {
    return useMutation({
        mutationFn: createEventPost
    })
}