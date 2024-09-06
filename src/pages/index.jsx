import { Button, Card, CardBody, Carousel, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { GetPostEventQuery } from "../api/postEvents/get";

export const Index = () => {
    // const data = GetPostEventByIdQuery('cm0nohxgh00001ki72qaitoqd');
    const data = GetPostEventQuery();
    const navigate = useNavigate();
    // console.log(data.data);
    const handleDetails = (id) => {
        console.log(id);
        navigate(`/post-events/details/${id}`);
    }

    return (
        <>
            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-full w-full bg-[url('/img/index.png')] bg-cover bg-center" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-6 font-black"
                            >
                                Welcome to Wings Portal Site
                            </Typography>
                            <Typography variant="lead" color="white" className="opacity-80">
                                Wings Portal is your gateway to all event websites and the latest announcements.
                                Stay connected and up-to-date with the most recent posts and happenings.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <section className="-mt-32 bg-white px-4 pb-20 pt-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <Card className="mt-6 w-30">
                            <CardBody>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#600000" className="size-20 mb-4">
                                    <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                    <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                                </svg>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Lowongan Kerja
                                </Typography>
                                <a href="#" className="inline-block">
                                    <Button size="sm" variant="text" className="flex items-center gap-2">
                                        Learn More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                            </CardBody>
                        </Card>
                        <Card className="mt-6 w-30">
                            <CardBody>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#600000" className="size-20 mb-4">
                                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                                </svg>

                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Wings Mart
                                </Typography>
                                <a href="#" className="inline-block">
                                    <Button size="sm" variant="text" className="flex items-center gap-2">
                                        Learn More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                            </CardBody>
                        </Card>
                        <Card className="mt-6 w-30">
                            <CardBody>
                                <svg
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    height="100"
                                    width="100"
                                >
                                    <path
                                        fill="#600000"
                                        d="m20.274 9.869l-3.442-4.915l1.639-1.147l3.441 4.915zm-1.884 2.54L16.67 9.95l-8.192 5.736l1.72 2.457l-1.638 1.148l-4.588-6.554L5.61 11.59l1.72 2.458l8.192-5.736l-1.72-2.458l1.638-1.147l4.588 6.554zm2.375-5.326l1.638-1.147l-1.147-1.638l-1.638 1.147zM7.168 19.046l-3.442-4.915l-1.638 1.147l3.441 4.915zm-2.786-.491l-1.638 1.147l-1.147-1.638l1.638-1.147z"
                                    />
                                </svg>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Wings Fit Club
                                </Typography>
                                <a href="#" className="inline-block">
                                    <Button size="sm" variant="text" className="flex items-center gap-2">
                                        Learn More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                            </CardBody>
                        </Card>
                        <Card className="mt-6 w-30">
                            <CardBody>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#600000" className="size-20 mb-4">
                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                </svg>

                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Events
                                </Typography>
                                <a href="#" className="inline-block">
                                    <Button size="sm" variant="text" className="flex items-center gap-2">
                                        Learn More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>
            <div className="max-w-8xl container relative mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                        <Typography
                            variant="h1"
                            style={{ color: "#600000" }}
                            className="mb-6 font-black"
                        >
                            Check Our Latest News!
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <Carousel className="rounded-xl">
                    {data.data?.map((post) => (
                        <div key={post.id} className="relative w-full h-[700px]">
                            <img
                                src={post.img}
                                alt="image 1"
                                className="h-full w-full object-contain"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black/75">
                                <div className="flex justify-between w-full">
                                    <div className="text-left mr-4 ml-8">
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                        >
                                            {post.title}
                                        </Typography>
                                        <Typography
                                            variant="lead"
                                            color="white"
                                            className="mb-12 opacity-80"
                                        >
                                            {post.subTitle}
                                        </Typography>
                                    </div>
                                    <div className="flex justify-end items-end mr-8">
                                        <Button size="lg" color="white" className="h-auto" onClick={() => handleDetails(post.id)}>
                                            Details
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="max-w-8xl container relative mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                        <Typography
                            variant="h1"
                            style={{ color: "#600000" }}
                            className="mb-6 font-black"
                        >
                            Wings Mart Promotion
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <Carousel className="rounded-xl">
                    {data.data?.map((post) => (
                        <div key={post.id} className="relative w-full h-[700px]">
                            <img
                                src={post.img}
                                alt="image 1"
                                className="h-full w-full object-contain"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black/75">
                                <div className="flex justify-between w-full">
                                    <div className="text-left mr-4 ml-8">
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                        >
                                            {post.title}
                                        </Typography>
                                        <Typography
                                            variant="lead"
                                            color="white"
                                            className="mb-12 opacity-80"
                                        >
                                            {post.subTitle}
                                        </Typography>
                                    </div>
                                    <div className="flex justify-end items-end mr-8">
                                        <Button size="lg" color="white" className="h-auto" onClick={() => handleDetails(post.id)}>
                                            Details
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    )
}
