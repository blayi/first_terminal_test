module.exports = function(registrationNo){

if (registrationNo.startsWith("CY")){
  return "Bellville"
}
else if (registrationNo.startsWith("CJ")){
  return "Paarl"
}
else if (registrationNo.startsWith("CA")){
  return "Cape Town"
}
else{
  return "Some other place!"
}
}
