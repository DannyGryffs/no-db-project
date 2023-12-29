import { useState } from 'react'


export default function Row(props) {

    let [isEditing, setIsEditing] = useState(false)

    function editClickHandler() {
        setIsEditing(!isEditing)
    }

    return (
        <>
            { isEditing
                ? <tr>
                    <td>
                    <EditSaveButton/>
                    </td>
                    <td>
                    <GiftEditingField/>
                    </td>
                    <td>
                    <ForWhoEditingField/>
                    </td>
                    <td>
                    <PriceEditingField/>
                    </td>
                </tr>
               : <tr>
                    <td className={'lrgcolumn'}>
                        <button class='btns'>Delete</button>
                        <button onClick={editClickHandler} class='btns'>Edit</button>
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
            }
        </>
    )
}

function EditSaveButton() {
    return(
        <>
            <button>Save</button>
        </>
    )
}

function GiftEditingField() {
    return(
        <>
            Editing gift
        </>
    )
}

function ForWhoEditingField() {
    return(
        <>
            Editing for who
        </>
    )
}

function PriceEditingField() {
    return(
        <>
            Editing price
        </>
    )
}