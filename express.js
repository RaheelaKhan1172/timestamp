var express = require('express');
var app = express();

function htmlConvert(p) {
  return encodeURIComponent(p.trim());
}

function timeCorrector(p) {
  var arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  console.log(p);
   var month = p.split('%20')[0];
  if (Number(month)) {
    month = arr[Number(month-1)];
  } else {
  p = p.replace(/%2C/g,"");
  month = (month.length > 3 ) ? month.slice(0,3) : month;
  month = (month[0] === month[0].toUpperCase()) ? month : month[0].toUpperCase() + month.slice(1,month.length);
  var i = 0;
  var match = false;
  while (i < arr.length && !match) {  
  var c = arr[i].slice(0,3);
    if (month.match(c)) {
      month = arr[i];
      match = true;
    }
    i++;
    }
   if (match === false) {
    month = null;
    return dt = {
      "unix": null,
      "natural": month
    }
  }
  } 

  p = p.split('%20');
  p.splice(0,1)
  p = p.join(', ');  
  
  var newD = month + " " + p; 
  var unx = Math.floor(new Date(newD)/1000);

  return dt = {
    "unix": unx,
    "natural": month + " " + p
  }
}

app.get('/:id',function(req,res) { 
  var q = req.params.id;
  q = htmlConvert(q);
  var time = timeCorrector(q); 
  res.send(time);

});

app.listen(3030);
