// Modules
var fs = require("fs");
const titlegen = require('titlegen')

var generator = titlegen.create();

function generateMarkov(person) {
  var seedfile;
  var path = "seeds/" + person + ".json";
  // Read seed file
  if (fs.existsSync(path)) {
    seedfile = fs.readFileSync(path);
  } else {
    seedfile = fs.readFileSync("seeds/kingjames.json");
  }

  var seed = JSON.parse(seedfile);

  generator.feed(seed);
}

const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  generateMarkov(request.url);
  response.setHeader("Content-Type", "application/json;charset=utf-8");
  response.end('{"message": "' + generator.next() + '"}')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})