module.exports = function(year)
{ console.log(year)

  var today = new Date();
 console.log(today);

 var today = today.getFullYear()
  console.log(today)

 var yearDiff = today - year
 return yearDiff

}
