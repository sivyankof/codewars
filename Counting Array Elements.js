function count(array) {
   let obj = {}
   let a = 1
   array.forEach(e => {

      if (obj[e]) {
         obj[e]++
      } else {
         obj[e] = a
      }

   })

   return (obj)
}


count(['a', 'a', 'b', 'b', 'b']) //, { 'a': 2, 'b': 3 })


// stack[value] ? stack[value]++ : (stack[value] = 1)