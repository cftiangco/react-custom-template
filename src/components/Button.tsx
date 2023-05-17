
interface IButton {
    type?:string;
    onClick?:any;
    label?:string;
}

const Button = ({type="primary",label="Submit",onClick}:IButton) => {

    let style = "py-2 px-8 text-xs rounded-md font-semibold shadow-lg tracking-wide";

    switch(type) {
        case 'primary':
            style += " bg-[#394867] text-[#F1F6F9] hover:bg-gray-500";
        break;
        case 'dark':
            style += " bg-[#212A3E] text-[#F1F6F9] hover:bg-gray-500";
        break;
        case 'outline':
            style += " border-2 border-[#394867] text-black hover:bg-[#212A3E] hover:text-[#F1F6F9] border-[#394867]";
        break;
    }
    
    return (
        <button
            onClick={onClick} 
            className={style}>
                {label}
        </button>
    )
}

export default Button;