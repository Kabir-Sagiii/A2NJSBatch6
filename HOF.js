function fn(func1,func2) {
    func2()
    func1()                                                      
  console.log("Higher Order Function")

 
 

}

fn(function(){
    console.log("Callback function")
},function(){
    console.log("Second Callback function")
})