import { FaWindowClose } from "react-icons/fa";

interface IBasicModal {
    children?:any;
    visible?:boolean;
    onClickClose?:any;
}

const BasicModal = ({children,visible,onClickClose}:IBasicModal) => {
    return (
        <div className={`h-100  bg-black fixed  z-20 top-0 bottom-0 left-0 right-0 bg-opacity-25 ${!visible ? 'hidden':''}`}>

            <div className="h-screen w-screen flex items-center justify-center">
                <div className="bg-white px-2 py-2 rounded h-fit md:w-1/2">

                    <div className="flex justify-between items-center mx-2 gap-3 mb-5 md:gap-0">
                        <h2 className="text-black font-semibold text-2xl">This is header</h2>
                        <FaWindowClose className="cursor-pointer" onClick={onClickClose}/>
                    </div>

                    <div className="">
                        {children}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BasicModal;