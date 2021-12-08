function max() {
     let array=[]
     let maxim=0
     if (arguments.length==1 && arguments[0]=== "" || arguments>BigInt) {
          throw ("Big Error")
     }

     for (let i in arguments) {
          array.push(BigInt(arguments[i]))
     }
     if (array.length==0) {
          throw null
     }
      maxim=array[0]
     for (let i=1; i<=array.length -1 ; i++) {
          if (maxim < array[i]) {
               maxim=array[i]
          }
     }   
console.log (maxim)
}      

