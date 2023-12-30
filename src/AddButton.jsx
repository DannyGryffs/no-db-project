import { useState } from 'react'
import axios from 'axios'

export default function AddButton(props) {

    const [isMakingNewRow, setIsMakingNewRow] = useState(false)
    const [giftInput, setGiftInput] = useState('')
    const [forWhoInput, setForWhoInput] = useState('')
    const [priceInput, setPriceInput] = useState('')

    function addClickHandler() {
        setIsMakingNewRow(true)
    }

    function cancelClickHandler() {
        setIsMakingNewRow(false)
    }

    function saveClickHandler() {
        let body = {
            gift: giftInput,
            forWho: forWhoInput,
            price: +priceInput
        }
        axios.post('/gift', body)
        .then((response) => {
            props.setTableData(response.data)
            setIsMakingNewRow(false)
            setGiftInput('')
            setForWhoInput('')
            setPriceInput('')
            
        })
    }
    return (
        <>
            { isMakingNewRow
                ? <div>
                    <span>
                        <button onClick={cancelClickHandler} class='save-btn'>Cancel</button>
                        <button onClick={saveClickHandler} class='save-btn'>Save</button>
                    </span>
                    <span>
                        <input 
                        value={giftInput} 
                        onChange={(e) => setGiftInput(e.target.value)} 
                        id='gift-input'/>
                    </span>
                    <span>
                        <input 
                        value={forWhoInput} 
                        onChange={(e) => setForWhoInput(e.target.value)} 
                        id='forWho-input'/>
                    </span>
                    <span>
                        <input 
                        value={priceInput} 
                        onChange={(e) => setPriceInput(e.target.value)} 
                        id='price-input' type={'number'}/>
                    </span>  
                </div>
                : <button onClick={addClickHandler} class='add-btn'>
                    Add Gift
                </button>
            }
        </>
    )
}