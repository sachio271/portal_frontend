import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Chip,
    IconButton,
    Tooltip,
    Typography
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { GetPostEventQuery } from "../../../api/postEvents/get";



function IndexAdminPostEvents() {
    const TABLE_HEAD = ["Title", "Subtitle", "Status", "Action"];
    const data = GetPostEventQuery();
    return (
        <div>
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Event List
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                See information about all events
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <NavLink to="/admin/post-events/create">
                                <Button className="flex items-center gap-3" size="sm">
                                    <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add posts
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.data?.map(
                                ({ id, title, subTitle, isShow }, index) => {
                                    console.log(isShow);
                                    const isLast = index === data.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-blue-gray-50";
                                    return (
                                        <tr key={id}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    <div className="flex flex-col">
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {title}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {subTitle}
                                                    </Typography>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="w-max">
                                                    <Chip
                                                        variant="ghost"
                                                        size="sm"
                                                        value={isShow === true ? "showing" : "hidden"}
                                                        color={isShow === true ? "green" : "blue-gray"}
                                                    />
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Tooltip content="Edit User">
                                                    <IconButton variant="text">
                                                        <PencilIcon className="h-4 w-4" />
                                                    </IconButton>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    );
                                },
                            )}
                        </tbody>
                    </table>
                </CardBody>

            </Card>
        </div>
    );
}

export default IndexAdminPostEvents;