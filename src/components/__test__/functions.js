module.exports ={

  quantityDown: function(qty){
    let newQuantity = qty -1
    if(newQuantity < 1){
      newQuantity= 1
    }
    return newQuantity
  },
  nextfn: function () {
    
  }
}