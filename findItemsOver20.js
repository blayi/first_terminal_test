module.exports = function(name){

   var items=[];
  for (var i=0;i<name.length;i++){
    var fruits=name[i];
  if (fruits.qty>20){
  items.push(fruits);
  }
  }
  return items;
}
