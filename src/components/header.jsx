import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
    Collapse,
    IconButton,
    Navbar as MTNavbar,
    Typography
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export function Navbar({ brandName = "Wings Portal" }) {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" color="inherit" className="capitalize">
                <span className="flex items-center gap-1 p-1 font-bold">events</span>
            </Typography>
            <Typography as="li" variant="small" color="inherit" className="capitalize">
                <span className="flex items-center gap-1 p-1 font-bold">HR</span>
            </Typography>
            <Typography as="li" variant="small" color="inherit" className="capitalize">
                <span className="flex items-center gap-1 p-1 font-bold">CSR</span>
            </Typography>
            <Typography as="li" variant="small" color="inherit" className="capitalize">
                <span className="flex items-center gap-1 p-1 font-bold">Wings Mart</span>
            </Typography>
            <Typography as="li" variant="small" color="inherit" className="capitalize">
                <span className="flex items-center gap-1 p-1 font-bold">WFC</span>
            </Typography>
            <Typography as="li" variant="small" color="inherit" className="capitalize">
                <span className="flex items-center gap-1 p-1 font-bold">About Us</span>
            </Typography>
            <NavLink to="/login" className="flex items-center">
                <Typography as="li" variant="small" color="inherit" className="capitalize">
                    <span className="flex items-center gap-1 p-1 font-bold">Admin</span>
                </Typography>
            </NavLink>
        </ul>
    );

    return (
        <MTNavbar color="transparent" className="p-3">
            <div className="container mx-auto flex items-center justify-between text-white">
                <Link to="/" className="flex items-center">
                    <img src="/img/logo-wings.png" alt="Logo" className="h-11 w-11 mr-2" />
                    <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
                        {brandName}
                    </Typography>
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <IconButton
                    variant="text"
                    size="sm"
                    color="white"
                    className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon strokeWidth={2} className="h-6 w-6" />
                    ) : (
                        <Bars3Icon strokeWidth={2} className="h-6 w-6" />
                    )}
                </IconButton>
            </div>
            <Collapse
                className={`rounded-xl bg-white px-4 ${openNav ? 'pt-2 pb-4' : ''} text-blue-gray-900`}
                open={openNav}
            >
                <div className="container mx-auto">
                    {navList}
                </div>
            </Collapse>
        </MTNavbar>
    );
}

Navbar.propTypes = {
    brandName: PropTypes.string,
    action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;