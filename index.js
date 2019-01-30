const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const pkg = require('./package.json');
const app = express();

const versions = {
  node_ver: process.version || '???',
  express_ver: pkg.dependencies.express || '???'
}

//set handlebars
app.set('view engine', 'hbs');
app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultView: 'index',
  layoutsDir: path.join(__dirname,'views','layouts'),
  partialsDir: path.join(__dirname + 'views', 'partials')
}));

app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res)=>{
  //res.sendFile('index.html');
  res.render('index.hbs', versions);
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`Application listening on port ${port}`);
  console.log(`Express version: ${versions.express_ver}`);
  console.log(`Node version: ${versions.node_ver}`);
});