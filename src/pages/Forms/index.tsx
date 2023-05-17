import { useState } from 'react'
import Tabs from "../../utils/Tabs"
import Buttons from './tabs/buttons';
import Tables from './tabs/tables';
import Fields from './tabs/fields';
import Modals from './tabs/modals';
const Forms = () => {
    const [selected, setSelected] = useState<number>(0);
    const [tab, setTab] = useState<string>('tables');

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
                <Modals />
            )}

        </div>
    )
}

export default Forms