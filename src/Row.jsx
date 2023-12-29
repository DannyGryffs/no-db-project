import { useState } from 'react'
import axios from 'axios'


export default function Row(props) {

    let [isEditing, setIsEditing] = useState(false)
    let [newData, setNewData] = useState({gift: props.gift,
        forWho: props.forWho, 
        price: props.price, 
        id: props.id})



    console.log(newData)


    function editClickHandler() {
        setIsEditing(!isEditing)
    }

    return (
        <>
            { isEditing
                ? <tr>
                    <td>
                        <EditSaveButton
                        newData={newData}
                        id={props.id}
                        setTableData={props.setTableData}
                        setIsEditing={setIsEditing}
                        />
                    </td>
                    <td>
                        <GiftEditingField
                            setNewData={setNewData}
                            newData={newData}
                            gift={props.gift}
                    />
                    </td>
                    <td>
                        <ForWhoEditingField
                            setNewData={setNewData}
                            newData={newData}
                            forWho={props.forWho}
                    />
                    </td>
                    <td>
                        <PriceEditingField
                            setNewData={setNewData}
                            newData={newData}
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

function EditSaveButton(props) {

    const {id, newData, setTableData, setIsEditing} = props

    function onSaveClick() {
        axios.put(`/edit-gift/${id}`, newData)
        .then((response) => {
            console.log(response.data)
            setTableData(response.data)
            setIsEditing(false)
        })

    }

    return(
        <>
            <button onClick={onSaveClick} class='btns'>Save</button>
        </>
    )
}

function GiftEditingField(props) {

    const [currentValue, setCurrentValue] = useState(props.gift)

    function ChangeHandler(event) {
        setCurrentValue(event.target.value)
        props.setNewData({...props.newData, gift: event.target.value})
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
        props.setNewData({...props.newData, forWho: event.target.value})
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
        props.setNewData({...props.newData, price: +event.target.value})
    }

    return(
        <>
            <input class='btns' type={'number'} value={currentValue} onChange={ChangeHandler}/>
        </>
    )
}