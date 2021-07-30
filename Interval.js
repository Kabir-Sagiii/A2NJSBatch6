function fn() {

   

   var myInterval= setInterval(function(){
           console.log("SetInterval called")
       },3000)

       setTimeout(function(){
        clearInterval(myInterval)
       },10000)
       
     
}

fn()