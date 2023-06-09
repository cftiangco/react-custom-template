
import { FaCog, FaUserCircle } from 'react-icons/fa';


const Footer = () => {
    return (
        <>
            <div className="fixed bottom-0 bg-[#212A3E] h-8 w-full flex justify-between items-center z-0">
                <div className="mx-4">
                    <h3 className="text-white text-sm font-bold">CrimsonHMS</h3>
                </div>
                <div className="mx-4 flex items-center gap-2">

                    <div className="flex items-center gap-1 cursor-pointer group">
                        <FaCog className="text-[#9BA4B5] group-hover:text-white" />
                        <p className="text-xs m-0 p-0 text-[#9BA4B5] font-medium group-hover:text-white">Setting</p>
                    </div>

                    <div className="flex items-center gap-1 cursor-pointer group">
                        <FaUserCircle className="text-[#9BA4B5] group-hover:text-white" />
                        <p className="text-xs m-0 p-0 text-[#9BA4B5] font-medium group-hover:text-white">Crimson</p>
                    </div>

                </div>
            </div>

            <div className="mt-10"></div>

        </>
    )
}

export default Footer;