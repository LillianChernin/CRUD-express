const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('tiny'));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log('listening on port 3000');
});

const indexRoute = require('./routes/index');
const bonesRoute = require('./routes/bones');
const musclesRoute = require('./routes/muscles');

app.use('/bones', bonesRoute);
app.use('/muscles', musclesRoute);
app.use('/', indexRoute);

app.get('*', (request, response) => {
  response.status(404).send('Oops! Not found');
})
