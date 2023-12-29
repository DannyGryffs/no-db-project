import express from 'express'
import ViteExpress from 'vite-express'

const app = express()

app.use(express.json())

let newGlobalId = 4

const db = [
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

 app.get('/gifts', (req, res) => {
    res.status(200).send(db)
 })

 app.put('/edit-gift/:id', (req, res) => {
    let id = +req.params.id
    let editedGift = req.body
    editedGift.price = +editedGift.price
    
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === id) {
            db.splice(i, 1, editedGift)
            break
        }
    }
    
    res.status(200).send(db)
})

app.delete('/gift/:id', (req, res) => {
    let id = +req.params.id

    for (let i = 0; i < db.length; i++) {
        if (db[i].id === id) {
            db.splice(i, 1)
            break
        }
    }
    res.status(200).send(db)
})
    





ViteExpress.listen(app, 3000, () => {console.log('cruising on port 3000')})