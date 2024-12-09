var express =  require('express')
var app = express()
  
const fs = require('fs');

var config = require('./config')
var newRequest = require('./request')

// User inputs
app.get('/', function(req, res) {
  res.sendFile(`${__dirname}/index.html`)
})

app.get('/translate', function(req, res) {
  var sl = req.query.sl
  var tl = req.query.tl
  var text = req.query.text
  var prompt = config.systemPrompt

  if (!!sl === false || !!tl === false || !!text === false) {
    res.redirect('/')
    return
  }
  
  var json = JSON.stringify({
    sl: sl, 
    tl: tl, 
    text: text, 
  })
  prompt += `\n${json}`
  
  newRequest(res, prompt, tl, text)
})

app.get('*', function(req, res) {
  var path = req.path
  if (!path.includes('.')) path = `${path}.html`
  if (!fs.existsSync(`${__dirname}/${path}`)) {
    path = '404.html'
  }
  res.sendFile(`${__dirname}/${path}`)
})

app.listen(8080)