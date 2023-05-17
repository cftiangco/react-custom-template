import { useState } from "react"
import Tabs from "../../utils/Tabs";
import Container from "../../components/Container";

const InventoryManagement = () => {

    const [selected,setSelected] = useState<number>(0); 
    const [tab,setTab] = useState<string>('items'); 

    const tabs = [
        {
            label:"Items",
            tab:'items',
        },
        {
            label:"Orders",
            tab:'orders'
        },
        {
            label:"Dispose",
            tab:'dispose',
        },
        {
            label:"Fast Moving",
            tab:'fast-moving'
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
                <Container>
                    <p>Item Tab</p>
                </Container>
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