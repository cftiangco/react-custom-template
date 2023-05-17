import { Link } from "react-router-dom";

interface INavItem {
    path:string;
    icon:any;
    label:string;
    isActive?:boolean;
}


function NavItem({path,icon,label,isActive}:INavItem) {

    return (
        <Link 
            to={path} 
            relative="path" 
            className={`flex justify-right flex-row gap-2 items-center mb-3 ml-3 md:mb-0 md:ml-0 ${isActive ? ' text-white':'hover:text-white text-[#9BA4B5]'}`}
        >
            {icon}
            <h5 className={`text-xs font-semibold`}>{label}</h5>
        </Link>
    )

}

export default NavItem