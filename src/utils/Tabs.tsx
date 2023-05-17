import TabItem from "./components/TabItem"

interface ITabs {
    tabs:any[];
    onClickLink:any;
    selected:any;
}

const Tabs = ({tabs,onClickLink,selected}:ITabs) => {
    return (
        <div className="w-full h-8 shadow">
            <div className="flex items-center justify-start h-full mx-5 gap-5 cursor-pointer font-medium">
                {tabs.map((row,idx) => (
                    <TabItem 
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

export default Tabs;