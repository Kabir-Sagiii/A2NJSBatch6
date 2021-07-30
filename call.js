var obj = {
    c:6
}

var obj1 = {
    t:100
}
function fnCall(x,y,z) {
    
    var a = x
    var b = y

    return a + b + this.c
}

// console.log(fnCall.call(obj,20,30,20))

// console.log(fnCall.apply(obj,[2,3,4]))

//   console.log(fnCall.bind(obj,100,200,300)())

  var newBindedFn = fnCall.bind(obj,78,98,97)
  console.log(newBindedFn())
