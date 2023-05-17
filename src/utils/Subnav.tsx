import Sublink from "../pages/InventoryManagement/components/Sublink"

interface ISubnav {
    links:any[];
    onClickLink:any;
    selected:any;
}

const Subnav = ({links,onClickLink,selected}:ISubnav) => {
    return (
        <div className="w-full h-8 shadow">
            <div className="flex items-center justify-start h-full mx-5 gap-5 cursor-pointer font-medium">
                {links.map((row,idx) => (
                    <Sublink 
                        label={row.label} 
                        key={idx} 
                        isActive={selected === idx}
                        onClickLink={() => onClickLink(idx,row.tab)}
                    />
                ))}
            </div>
       </div>
    )
}

export default Subnav;