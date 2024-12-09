var fs = require('fs');
var request = require('request'); 
var path = require('path');

var config = require('./config').default
// OpenAI API Key
var api_key = process.env['OPENAI_API_KEY']

function getOutputFromBody(response) {
  if (response.error) {
    var error = response.error
    output = error.message
  }
  else {
    var choices = response.choices
    choices.forEach(function(choice) {
      var finish_reason = choice.finish_reason
      if (finish_reason == 'stop') {
        var message = choice.message
        output = message.content
      }
    })
  }
  return output
}

function newRequest(res, prompt, tl, text) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${api_key}`,
  };

  var model = 'gpt-4-turbo'
  textRequest(headers, res, prompt, model, tl, text)
}

function textRequest(headers, res, prompt, model, tl, text) {
  const pContent = [
    {
      "type": "text",
      "text": prompt
    },
  ]

  // console.log(pContent)

  var payload = {
    "model": model,
    "messages": [
      {
        "role": "user",
        "content": pContent
      }
    ],
    "max_tokens": 300
  }

  request.post(
    {
      headers: headers, 
      url: "https://api.openai.com/v1/chat/completions", 
      body: JSON.stringify(payload), 
    }, 
    function(error, result, body) {
      body = JSON.parse(body)
      var output = getOutputFromBody(body)

      var file = fs.readFileSync(`${__dirname}/show.html`, 'utf-8')
      if (file.includes('<original />')) file = file.replaceAll('<original />', text)
      if (file.includes('<result />')) file = file.replaceAll('<result />', output)
      if (file.includes('<language />')) file = file.replaceAll('<language />', tl)
      res.send(file)
    }
  )
}


module.exports = newRequest