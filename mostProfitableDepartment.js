module.exports = function(shop){

  var salesData={};
  var profit="";
  var day =0;
  for (var i=0;i<shop.length;i++){
    var most=shop[i].department;
    if(salesData[most]==undefined){
     salesData[most]=0;


       }

   salesData[most]+=shop[i].sales;

}
   for (var i in salesData){
     if(salesData[i]>day){
     day=salesData[i];
       profit=i;
     }
   }
  return profit;
}
