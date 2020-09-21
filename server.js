const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/ecommercewebsite'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + 'dist/ecommercewebsite/index.html'));

});
app.listen(process.env.PORT , () => {
  console.log("server started")
});
