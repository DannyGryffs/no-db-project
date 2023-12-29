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

    function setTableDataRow(id, newRowObject) {

        let newTableData = structuredClone(tableData)

        for (let i = 0; i < newTableData.length; i++) {
            if (newTableData[i].id === id) {
                newTableData.splice(i, 1, newRowObject)
                break
            }
        }
        setTableData(newTableData)
    }

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
                                id={giftObj.id}
                                setTableDataRow={setTableDataRow}
                            />
                        })

                    }
                </tbody>
            </table>
            <AddButton/>
        </>
    )
 }