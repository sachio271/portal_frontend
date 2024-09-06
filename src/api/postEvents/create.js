import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "..";

const createEventPost = async ({ title, subtitle, description, img, src }) => {
    const response = await axiosInstance.post("/post-events", { title, subtitle, description, img, src });
    return response.data;
}

export const CreateEventPostMutation = () => {
    return useMutation({
        mutationFn: createEventPost
    })
}