import * as express from 'express'
import axios from 'axios'

const app = express()
const port = 8003

app.get('/', async (req, res) => {
    const urls = ['a', 'b', 'c']
    let resouceReq = null
    for (let url of urls) {
        resouceReq = await axios.get('http://localhost:9000/resource')
    }
    res.send(resouceReq.data)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})