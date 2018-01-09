const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const port = 3000;
app.listen(port, () => {
  console.log('listening on port 3000');
});
