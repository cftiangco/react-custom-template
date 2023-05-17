import { useState } from "react"
import Tabs from "../../utils/Tabs";
import Items from "./tabs/Items";

import Container from "../../components/Container";

const InventoryManagement = () => {

    const [selected,setSelected] = useState<number>(0); 
    const [tab,setTab] = useState<string>('items'); 

    const tabs = [
        {
            label:"Items",
            tab:'items',
            active:true,
        },
        {
            label:"Orders",
            tab:'orders',
            active:true,
        },
        {
            label:"Dispose",
            tab:'dispose',
            active:true,
        },
        {
            label:"Fast Moving",
            tab:'fast-moving',
            active:true,
        },
    ]

    const handleOnClickLink = (idx:number,tab:string) => {
        setSelected(idx);
        setTab(tab);
    }


    return (
       <div>
            <Tabs 
                tabs={tabs}
                selected={selected}
                onClickLink={handleOnClickLink}
            />

            {tab === "items" && (
                <Items />
            )}

            {tab === "orders" && (
                <Container>
                    <p>Order Tab</p>
                </Container>
            )}

            {tab === "dispose" && (
                <Container>
                    <p>Dispose Tab</p>
                </Container>
            )}

            {tab === "fast-moving" && (
                <Container>
                    <p>Fast-Moving tab</p>
                </Container>
            )}

       </div>
    )

}

export default InventoryManagement