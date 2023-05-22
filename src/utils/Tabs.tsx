import TabItem from "./components/TabItem"
import { FaAngleDoubleRight } from 'react-icons/fa';
interface ITabs {
    tabs: any[];
    onClickLink: any;
    selected: any;
}

const Tabs = ({ tabs, onClickLink, selected }: ITabs) => {
    return (
        <div className="w-full h-8 shadow">

            <div className="items-center h-full mx-1 flex md:hidden">
                <div className="flex items-center h-full gap-1 cursor-pointer">
                    <FaAngleDoubleRight className="text-[#394867]"/>
                    <h2 className="text-xs font-semibold">Tables</h2>
                </div>
            </div>

            <div className="items-center justify-start h-full gap-3 cursor-pointer font-medium w-full hidden md:flex">
                {tabs.map((row, idx) => {

                    if (!row.active) {
                        return null;
                    }

                    return (
                        <TabItem
                            label={row.label}
                            key={idx}
                            isActive={selected === idx}
                            onClickLink={() => onClickLink(idx, row.tab)}
                        />
                    )
                    
                })}
            </div>
        </div>
    )
}

export default Tabs;