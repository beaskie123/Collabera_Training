const express = require('express')
const cors = require('cors')
const { application } = require('express')

const app = express()
const port = 5000

let data = [
{
    "id": '134657358',
    "name": "mango",
    "price": 10,
    "expDate": "01/23/2020",
    "manuDate": "01/22/2020"
},
{
    "id": '574857692',
    "name": "apple",
    "price": 10,
    "expDate": "01/23/2020",
    "manuDate": "01/22/2020"
},
{
    "id": '4754897693',
    "name": "cherry",
    "price": 10,
    "expDate": "01/23/2020",
    "manuDate": "01/22/2020"
},
{
    "id": '47658486769',
    "name": "pineapple",
    "price": 10,
    "expDate": "01/23/2020",
    "manuDate": "01/22/2020"
}
]
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
    }

    app.use(cors())
    app.use(allowCrossDomain)
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    
    app.get('/product', (req, res) => {
        res.json(data)
    })

    app.listen(port, () => console.log(`Product API listening on port ${port}!`))

    app.get('/product/:isbn', (req, res) => {
        const isbn = req.params.isbn;

        for (let datas of data){
            if(datas.isbn===isbn){
                res.json(datas);
                return
            }
        }
        res.status(404).send('Book not found');
    })

    app.delete('/product/:isbn', (req,res) => {
        const isbn = req.params.isbn;

        data = data.filter(i => {
            if(i.isbn !== isbn){
                return true;
            }
            return false;
        })

        res.send('product is deleted')
    })