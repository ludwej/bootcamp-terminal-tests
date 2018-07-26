module.exports = function(regNo)

{
var regNo = regNo.split(",");
  console.log(regNo)
var town = [];

for (var i = 0; i < regNo.length; i++) {
if (regNo[i].startsWith("CL")) {
town.push(regNo[i]);
}
}
return town.length;
}
