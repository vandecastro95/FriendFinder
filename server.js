let express = require('express');
let path = require('path');

let PORT = process.env.PORT || 3000;
let app = express();

app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });;

