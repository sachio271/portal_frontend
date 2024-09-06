import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetPostEventByIdQuery } from "../api/postEvents/getById";

export function PostEventsDetail() {
  const { id } = useParams();
  const data = GetPostEventByIdQuery(id);

  const [isLandscape, setIsLandscape] = useState(false);

  // Check if the image is landscape
  useEffect(() => {
    const img = new Image();
    img.src = data.data?.img;
    img.onload = () => {
      setIsLandscape(img.width > img.height);
    };
  }, [data.data?.img]);

  return (
    <>
      <section className="relative block h-[15vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/index.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className="relative bg-white py-16">
        <div className="container mx-auto">
          {/* Detail Section Below the Header */}
          <div className="mb-8 flex flex-col items-center">
            {/* Banner Image */}
            <div className="w-full h-[300px] max-w-[600px] mb-8">
              <img
                src={data.data?.img}
                alt="Banner"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>

            {/* Title */}
            <Typography
              variant="h2"
              style={{ color: "#600000" }}
              className="mb-4 font-black text-center"
            >
              {data.data?.title ?? ""}
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h6"
              className="mb-6 text-center text-blue-gray-500"
            >
              {data.data?.subTitle ?? ""}
            </Typography>

            {/* Description */}
            <Typography className="mb-6 text-center text-blue-gray-500">
              {data.data?.description ?? ""}
            </Typography>

            {/* Link Button */}
            <a href={data.data?.src ? data.data.src : "#"}>
              <Button className="bg-gray-900 w-fit">Connect</Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default PostEventsDetail;
