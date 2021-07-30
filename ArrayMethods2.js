function fnSlice() {

    var arr = [34,56,23,78,97,99,98,97,93]

  console.log( arr.slice(1,4))

  console.log(arr.slice(3))
}

//fnSlice()

function fnSplice() {
    var arr = [34,56,23,78,97,99,98,97,93]

      arr.splice(1,2,100,200)
      console.log(arr)

}
//  fnSplice()

       function fnMap() {
           var arr = [45,78,100,36,89,76]

    var newArray=  arr.map(function(element,index){
                return  element * 100
             })

              console.log(newArray)
       }

       fnMap()