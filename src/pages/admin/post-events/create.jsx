import {
    Button,
    Card,
    CardBody,
    Input,
    Typography
} from "@material-tailwind/react";
import {useForm} from "react-hook-form";
import {CreateEventPostMutation} from "../../../api/postEvents/create.js";



function AdminCreatePostEvents() {

    const { handleSubmit, register } = useForm({
        defaultValues: {
            title: "",
            subtitle: "",
            description: "",
            img: null,
            link: "",
        },
    });

    const createMutation = CreateEventPostMutation()

    const handleCreate = (data) => {
        const formData = new FormData()
        formData.append("title", data.title)
        formData.append("subtitle", data.subtitle)
        formData.append("description", data.description)
        formData.append("link", data.link)
        formData.append("img", data.img[0])
        console.log(formData)
        console.log(data)
        createMutation.mutate([formData], {
            onError: (error) => {
                console.log(error);
            },
            onSuccess: (data) => {
                console.log(data)
            }
        });
    }

    return (
        <div className="w-full flex flex-col h-screen items-center justify-center">
            <Card className="w-full max-w-[24rem]" style={{ borderWidth: "2px", borderColor: "#600000" }}>
                <CardBody>
                    <Typography variant="h4" style={{ color: "#600000" }} className="mb-4">
                        Create Post
                    </Typography>
                    <form onSubmit={handleSubmit(handleCreate)} className="mt-10 flex flex-col gap-4">
                        <div>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Title
                            </Typography>
                            <Input
                              {...register("title")}
                                type="text"
                                placeholder="ISORUN 2021"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <div>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Subtitle
                            </Typography>
                            <Input
                              {...register("subtitle")}
                                type="text"
                                placeholder="welcome to ..."
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <div>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Description
                            </Typography>
                            <Input
                              {...register("description")}
                                type="text"
                                placeholder="welcome to ..."
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <div>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                image / poster
                            </Typography>
                            <Input
                              {...register("img")}
                                type="file"
                                placeholder="welcome to ..."
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <div>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Link
                            </Typography>
                            <Input
                              {...register("link")}
                                type="text"
                                placeholder="https://www.wings-portal.com"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <Button type="submit" size="lg" style={{ backgroundColor: "#600000", borderColor: "#600000" }}>
                            Create Post
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}

export default AdminCreatePostEvents;