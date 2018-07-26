module.exports =function (totalBill){
  console.log(totalBill)

 var bill = totalBill.split(', ')
  var billTotal = 0 ;
  for (var i=0 ; i<bill.length ; i++){
    if (bill[i]=== "call"){
      billTotal+= 2.75 ;
   }
    else if(bill[i]=== "sms"){
    billTotal+= 0.65;
    }

  }
   return "R"+ billTotal.toFixed(2)
}
