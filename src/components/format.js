export default {
  methods: {
    format: function(number, decimal){
      if( number.split("-").length>1 )
        number=number.split("-")[1]
  
      if( number.split(".").length>1 ){
        if(number.split(".")[1].length > decimal){
          return parseFloat(number).toFixed(decimal)
        }else{
          return number
        }
      }
      return number
    }
  }
}