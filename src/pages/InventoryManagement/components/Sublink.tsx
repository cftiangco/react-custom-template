

interface ISublink {
    isActive?:boolean;
    label:string;
    onClickLink:any;
}

const Sublink = ({isActive,label,onClickLink}:ISublink) => {
    return (
        <h4 
            onClick={onClickLink}
            className={`text-xs border-r-2 pr-4 ${isActive ? "text-black font-bold":"text-gray-500 hover:text-black"}`}>{label}</h4>
    )
}

export default Sublink;