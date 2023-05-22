

interface ITabItem {
    isActive?:boolean;
    label:string;
    onClickLink:any;
}

const TabItem = ({isActive,label,onClickLink}:ITabItem) => {
    return (
        <h4 
            onClick={onClickLink}
            className={`text-xs px-4 py-1 rounded-2xl w-auto ${isActive ? "text-white font-semibold bg-[#394867] shadow-xl":"text-gray-500 hover:text-black"}`}>{label}</h4>
    )
}
    
export default TabItem;