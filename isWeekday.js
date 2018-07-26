module.exports = function(dayName){
var isWeek = !dayName.startsWith("S") ;
console.log("is week day " + isWeek)
  return(isWeek)
}
// isWeekday("Monday")
