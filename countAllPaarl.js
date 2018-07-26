module.exports = function(regNo) {
var regNo = regNo.split(", ");
var paarl = [];

for (var i = 0; i < regNo.length; i++) {
if (regNo[i].startsWith("CJ")) {
paarl.push(regNo[i]);
}
}
return paarl.length;
}
