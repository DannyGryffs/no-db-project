 import Header from'./Header.jsx'
 import Row from './Row.jsx'
 import AddButton from './AddButton.jsx'

 export default function Table() {
    return (
        <>
            <table>
                <Header/>
                <tbody>
                    <Row gift={'Stuffed Animal'} forWho={'Qwerty'} price={20}/>
                    <Row gift={'Speaker'} forWho={'Rick'} price={50}/>
                    <Row gift={'Legos'} forWho={'Morty'} price={30}/>
                </tbody>
                <AddButton/>
            </table>
        </>
    )
 }