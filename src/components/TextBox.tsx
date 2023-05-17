import { FaRegTimesCircle, FaCheckCircle } from 'react-icons/fa';


interface ITextBox {
    required?: boolean;
    label: string;
    placeHolder?:string;
    onChange?:any;
}

const TextBox = ({ required = false, label, placeHolder,onChange }: ITextBox) => {
    return (
        <div className="flex flex-col gap-1 group">
            <label className="text-sm ml-1 text-[#394867] font-medium tracking-wide">{label}</label>
            <div className="flex items-center gap-1 border bg-[#F7F7F7] rounded-lg py-2 px-3 w-full md:w-96 group-hover:bg-white">
                <input
                    type="text"
                    className="text-sm tracking-wide w-full outline-none bg-[#F7F7F7] group-hover:bg-white "
                    placeholder={placeHolder}
                    onChange={onChange}
                />
                {required ? <FaRegTimesCircle className="text-red-400" /> : <FaCheckCircle className="text-green-400" />}
            </div>
        </div>
    )
}

export default TextBox;