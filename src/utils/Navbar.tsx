

import { useState } from 'react'
import NavItem from "./components/NavItem"
import { FaChartBar, FaArchive, FaBars, FaWindowClose, FaBook, FaDoorOpen, FaUserCog,FaCode } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';


const navs: any = [
    { label: "Dashboard", path: "/dashboard", active: true, icon: <FaChartBar /> },
    { label: "Inventory Management", path: "/inventory-management", active: true, icon: <FaArchive /> },
    { label: "Room Management", path: "/room-management", active: true, icon: <FaDoorOpen /> },
    { label: "Reservation Management", path: "/reservation-management", active: true, icon: <FaBook /> },
    { label: "User Management", path: "/user-management", active: true, icon: <FaUserCog /> },
    { label: "Forms", path: "/forms", active: true, icon: <FaCode /> },
]

function Navbar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const NavItems = () => {
        return (
            <>
                {navs.map((row: any, idx: any) => {
                    if (!row.active) {
                        return null;
                    }

                    return (
                        <NavItem
                            path={row.path}
                            label={row.label}
                            icon={row.icon}
                            key={idx}
                            isActive={location.pathname === row.path}
                        />
                    )
                })}
            </>
        )
    }

    const Menu = ({ children }: any) => {
        return (
            <div className="bg-gray-500 w-full h-screen fixed top-0 bg-opacity-5 block md:hidden z-10">
                <div className="h-screen w-48 bg-[#394867] fixed z-10">
                    <div className="flex justify-end m-2">
                        <FaWindowClose className="text-white cursor-pointer" onClick={() => setMenuOpen(false)} />
                    </div>
                    <div className="mt-5 w-full">
                        {children}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-[#212A3E] h-11 w-full">

            <div className="items-center h-full mx-4 gap-4 hidden md:flex">
                <NavItems />
            </div>

            <div className="flex items-center h-full ml-2">
                <FaBars
                    className="text-white cursor-pointer"
                    onClick={() => setMenuOpen(true)}
                />
            </div>

            {menuOpen ? (
                <Menu>
                    <NavItems />
                </Menu>
            ) : null}
        </div>
    )
}

export default Navbar