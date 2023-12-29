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
                    <GiftEditingField
                        gift={props.gift}
                    />
                    </td>
                    <td>
                    <ForWhoEditingField
                        forWho={props.forWho}
                    />
                    </td>
                    <td>
                    <PriceEditingField
                        price={props.price}
                    />
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
            <button class='btns'>Save</button>
        </>
    )
}

function GiftEditingField(props) {

    const [currentValue, setCurrentValue] = useState(props.gift)

    function ChangeHandler(event) {
        setCurrentValue(event.target.value)
    }

    return(
        <>
            <input class='btns' value={currentValue} onChange={ChangeHandler}/>
        </>
    )
}

function ForWhoEditingField(props) {
   const [currentValue, setCurrentValue] = useState(props.forWho)

    function ChangeHandler(event) {
        setCurrentValue(event.target.value)
    }

    return(
        <>
            <input class='btns' value={currentValue} onChange={ChangeHandler}/>
        </>
    )
}

function PriceEditingField(props) {
    const [currentValue, setCurrentValue] = useState(props.price)
    function ChangeHandler(event) {
        setCurrentValue(event.target.value)
    }

    return(
        <>
            <input class='btns' type={'number'} value={currentValue} onChange={ChangeHandler}/>
        </>
    )
}