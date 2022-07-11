const app = require('express')()
const consign = require('consign')

consign()
    .then('./config/middlewares.js')

app.listen(3000, () => {
    console.log('Backend escutando!');
})
