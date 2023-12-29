import express from 'express'
import ViteExpress from 'vite-express'

const app = express()

app.use(express.json())

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

 app.put('/edit-present/:id', (req, res) => {
    let id = req.params.id
    let editedGift = req.body
    
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === id) {
            db.splice(i, 1, newRowObject)
            break
        }
    }

    res.status(200).send(db)
})
    





ViteExpress.listen(app, 3000, () => {console.log('cruising on port 3000')})