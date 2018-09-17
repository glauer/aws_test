const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('RBCWM Client Portal<br>Build date: 2018-09-17'))

app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
});
