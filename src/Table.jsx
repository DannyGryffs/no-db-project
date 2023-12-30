 import { useState, useEffect } from 'react'
 import axios from 'axios'
 import Div from './Div.jsx'
 import Header from'./Header.jsx'
 import Row from './Row.jsx'
 import AddButton from './AddButton.jsx'

 let data = [
    {
        gift: 'Stuffed Animal',
        forWho: 'Qwerty',
        price: 20,
        id: 1
    },
    {
        gift: 'Speaker',
        forWho: 'Rick',
        price: 50,
        id: 2
    },
    {
        gift: 'Lego set',
        forWho: 'Morty',
        price: 30,
        id: 3
    }
 ]

 export default function Table() {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        axios.get('/gifts')
        .then((response) => {
            setTableData(response.data)
        })
    }, [])

    return (
        <>
        <Div/>
            <table>
                <Header/>
                <tbody>
                    { tableData.map((giftObj) => {
                            return <Row
                                key={giftObj.id}
                                gift={giftObj.gift}
                                forWho={giftObj.forWho}
                                price={giftObj.price}
                                id={giftObj.id}
                                setTableData={setTableData}
                            />
                        })

                    }
                </tbody>
            </table>
            <AddButton
            setTableData={setTableData}
            />
        </>
    )
 }