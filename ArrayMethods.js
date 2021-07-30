function fnArrayMethods() {
  var info = [2,56,"Sagi",true,89,"hello",33]
  //length --property
    // console.log(info.length)

    //push() ---> add new element

    info.push("A2N")
//    console.log(info)

   info.pop()
   info.pop()
//    console.log(info)

    //  info.unshift("Academy")
    //  console.log(info)
    //  info.shift()
    //  info.shift()
    //  console.log(info)

//    console.log( info.indexOf(56))
//    console.log( info.indexOf(false))

   console.log(info.includes(56))
   console.log(info.includes(156))
}

// fnArrayMethods()


function fnArray() {

    var information = [33,88,66,55,33,99,11,33]

    console.log(information.indexOf(33))

    console.log(information.lastIndexOf(33))
}

// fnArray()

 function fnForEach() {
    var info = [44,55,66,88,22,11]

    info.forEach(function(element,index){
     element =  element + 10
       console.log(element)
    })

 }

//    fnForEach()

function fnFilter() {

    var data = [22,44,56,99,11,22,45,89,34,67,100]

 var filteredData=   data.filter(function(element,index){
           return element < 50
    })
    //  console.log(data)
    console.log(filteredData)
}
  fnFilter()