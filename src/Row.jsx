import { useState } from 'react'


export default function Row(props) {

    let [isEditing, setIsEditing] = useState(false)

    return (
        <>
            { isEditing
                ? <>
                    <EditSaveButton/>
                    <GiftEditingField/>
                    <ForWhoEditingField/>
                    <PriceEditingField/>
                </>
                : <>
                    <tr>
                        <td className={'lrgcolumn'}>
                            <button class='btns'>Delete</button>
                            <button class='btns'>Edit</button>
                        </td>
                        <td className={'lrgcolumn'}>
                            {props.gift}
                        </td>
                        <td className={'medcolumn'}>
                            {props.forWho}
                        </td>
                        <td className={'smlcolumn'}>
                            {props.price}
                        </td>
                    </tr>
                </>
            }
        </>
    )
}

function EditSaveButton() {
    return(
        <>
        </>
    )
}

function GiftEditingField() {
    return(
        <>
        </>
    )
}

function ForWhoEditingField() {
    return(
        <>
        </>
    )
}

function PriceEditingField() {
    return(
        <>
        </>
    )
}