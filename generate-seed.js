var fs = require("fs");
var jp = require('jsonpath');

// Parameter process.argv[2]
var user = process.argv[2];
var path = user + "/" + user + ".json";

json = JSON.parse(fs.readFileSync(path));
seedfile = "seeds/" + user + ".json";
//console.log(json);

const result = JSON.stringify(jp.query(json, '$.GraphImages[*].edge_media_to_caption.edges[:1].node.text'));

fs.writeFileSync(seedfile, result);
fs.rmdirSync(user, {recursive: true});