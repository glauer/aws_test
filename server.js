const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('RBCWM Client Portal<br>Build date: 2018-09-29'));

app.listen(process.env.PORT || 3000, function() {
  // eslint-disable-next-line no-console
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
});
