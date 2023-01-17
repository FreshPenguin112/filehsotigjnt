"use strict";
var new_zip = new JSZip();
fetch('{urlforsprite3}',{
  method : "GET",
  encoding: null // <- this one is important !
}, function (error, response, body) {
  if(error ||  response.statusCode !== 200) {
    // handle error
    return;
  }
  JSZip.loadAsync(body).then(function (zip) {
    return zip.file("sprite.json").async("object");
  }).then(function (text) {
    vm._addSprite3(text);
  });
});
