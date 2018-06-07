module.exports ={
    handleQuantity: function(qty){
        let newQuantity = +qty
        if(!newQuantity || newQuantity < 1){
            newQuantity = 1
        }
        return newQuantity
    },

}