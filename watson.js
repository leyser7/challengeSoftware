const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const AssistantV1 = require('ibm-watson/assistant/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV1({
  authenticator: new IamAuthenticator({ apikey: 'apikey' }),
  version: 'version',
});
app.use(bodyParser.json());

app.post('/watson', (req, resp) => {
  var respuesta;
  textIn = req.body.message
  assistant.message({
    input: { text: textIn },
    workspaceId: 'workspaceid'
  }).then((response) => {
    respuesta = response.result.output.generic[0].text;
    resp.json({ response: respuesta })
  }).catch((err) => {
    resp.json({ error: err.message })
  });
});

app.listen(3000, () => {
  console.log('the server on port 3000');
})
