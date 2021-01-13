const express = require('express')

const config = require('./config/app')

const router = require('./router')

const cors = require('cors')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())
app.use(router)

app.use(express.static(__dirname + '/public'))

const PORT = config.appPort

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})

