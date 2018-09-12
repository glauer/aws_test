const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('RBCWM Client Portal'))

app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
});
