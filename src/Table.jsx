 import { useState } from 'react'
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

    const [tableData, setTableData] = useState(data)

    return (
        <>
            <table>
                <Header/>
                <tbody>
                    { tableData.map((giftObj) => {
                            return <Row
                                key={giftObj.id}
                                gift={giftObj.gift}
                                forWho={giftObj.forWho}
                                price={giftObj.price}
                            />
                        })

                    }
                </tbody>
            </table>
            <AddButton/>
        </>
    )
 }