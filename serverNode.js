const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

app.post('/watson', (req, resp) => {
  console.log(req.body);
  if (req.body.message) {
    respuesta = {
      "response": '¿con que te puedo ayudar?'
    }
  } else {
    respuesta = {
      'response': 'Esperando por Mensaje'
    }
  }
  resp.json(respuesta);
})

app.listen(3000, () => {
  console.log('the server on port 3000');
})
