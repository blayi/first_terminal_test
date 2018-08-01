module.exports = function(name,threshold){

   var items=[];
  for (var i=0;i<name.length;i++){
    var fruits=name[i];
  if (fruits.qty>threshold){
  items.push(fruits);
  }
  }
  return items;
}
