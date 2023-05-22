import { useState } from 'react'
import Tabs from "../../utils/Tabs"
import Buttons from './tabs/Buttons';
import Tables from './tabs/Tables';
import Fields from './tabs/Fields';
import Modals from './tabs/Modals';

const Forms = () => {
    const [selected, setSelected] = useState<number>(0);
    const [tab, setTab] = useState<string>('tables');
    const [showBasicModal,setShowBasicModal] = useState<boolean>(false);

    const tabs = [
        {
            label: "Tables",
            tab: 'tables',
            active: true,
        },
        {
            label: "Buttons",
            tab: 'buttons',
            active: true,
        },
        {
            label: "Fields",
            tab: 'fields',
            active: true,
        },
        {
            label: "Modals",
            tab: 'modals',
            active: true,
        },
    ]

    const handleOnClickLink = (idx: number, tab: string) => {
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

            {tab === "tables" && (
                <Tables />
            )}
            
            {tab === "buttons" && (
                <Buttons />
            )}

            {tab === "fields" && (
                <Fields />
            )}

            {tab === "modals" && (
                <Modals 
                    onClickBasicModal={() => setShowBasicModal(true)}
                    basicModalVisible={showBasicModal}
                    basicModalOnClickClose={() => setShowBasicModal(false)}
                />
            )}

        </div>
    )
}

export default Forms