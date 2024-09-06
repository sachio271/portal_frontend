import {
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function DefaultSidebar() {
    return (
        <div className="flex h-screen">
            <Card className="w-full h-[calc(100vh-2rem)] max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5" style={{ backgroundColor: "#600000", color: "white", borderRadius: "0 1rem 1rem 0" }}>
                <div className="mb-2 p-4">
                    <Typography variant="h5" color="white">
                        Admin Panel Wings Portal
                    </Typography>
                </div>
                <List>
                    <NavLink to={'/admin/post-events'}>
                        <ListItem>
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" style={{ color: "#FFFFFF" }} />
                            </ListItemPrefix>
                            <Typography style={{ color: "#FFFFFF" }}>Post Event Management</Typography>
                        </ListItem>
                    </NavLink>
                    <ListItem>
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" style={{ color: "#FFFFFF" }} />
                        </ListItemPrefix>
                        <Typography style={{ color: "#FFFFFF" }}>Post Wings Mart Management</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" style={{ color: "#FFFFFF" }} />
                        </ListItemPrefix>
                        <Typography style={{ color: "#FFFFFF" }}>Post CSR Management</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" style={{ color: "#FFFFFF" }} />
                        </ListItemPrefix>
                        <Typography style={{ color: "#FFFFFF" }}>Post HR Management</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <Cog6ToothIcon className="h-5 w-5" style={{ color: "#FFFFFF" }} />
                        </ListItemPrefix>
                        <Typography style={{ color: "#FFFFFF" }}>Post WFC Management</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" style={{ color: "#FFFFFF" }} />
                        </ListItemPrefix>
                        <Typography style={{ color: "#FFFFFF" }}>Logout</Typography>
                    </ListItem>
                </List>
            </Card>
        </div>
    );
}