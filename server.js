'use strict';

const express = require('express');
const app = express();
app.use(express.json())
const notFoundHandler = require('./handlers/404')
const errorHandler = require('./handlers/500')

function start(port) {
    app.listen(port,
        () => console.log(`server is running on port ${port}`))
}

app.get('/', (req, res) => {
    res.send('Hello from home Route!')
})

app.post('/bad', (req, res) => {
    let number = 12;
    number.forEach(x => console.log(x));
    res.send('this Bad Route')
})

app.get('/data', (req, res) => {
    res.json({
        id: 2171246,
        name: 'Qasem',
        nickname: 'Mohammad',
        email: 'qasemcoder2020@gmail.com'
    })
})

app.use('*', notFoundHandler)
app.use(errorHandler)
module.exports = {
    app: app,
    start: start
}



// const cors = require('cors');
// const port = process.env.PORT || 8000;

// app.use(express.json());
// app.use(cors());


// app.get('data',(req,res)=>{
//     res.send('server is OK')
// })



// app.listen(port, () => console.log(`server is running on port ${port}`))