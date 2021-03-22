function findOutlier(integers) {
   let evenNumber = 0;
   let oddNumbers = 0;

   integers.forEach(e => {
      if (e % 2 == 0) {
         evenNumber++
      } else {
         oddNumbers++
      }

   });

   let nbr = 0;
   evenNumber > oddNumbers ? integers.forEach(e => (e % 2 !== 0) ? nbr = e : false) : integers.forEach(e => (e % 2 == 0) ? nbr = e : false)
   console.log(nbr)
}

// findOutlier([0, 1, 2]) // , 1)
// findOutlier([1, 2, 3]) // , 2)
findOutlier([2, 6, 8, 10, 3]) // , 3)
findOutlier([0, 0, 3, 0, 0]) // , 3)
findOutlier([1, 1, 0, 1, 1]) // , 0)