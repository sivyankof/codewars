function fridayTheThirteenths(start, end) {
   let date = new Date(start, 0).getTime();
   let arr = [];
   for (let i = 0; ; i++) {
     date += 1000 * 60 * 60 * 24;
     let day = new Date(date).getDate();
     let weekDay = new Date(date).getDay();
     if (new Date(date).getFullYear() >= end + 1) {
       break;
     }
     if (day === 13 && weekDay === 5)
       arr.push(
         `${new Date(date).getMonth() + 1}/${day}/${new Date(
           date
         ).getFullYear()}`
       );
   }
   return arr.join` `;
}



fridayTheThirteenths(1999, 2000) //, "8/13/1999 10/13/2000");
// fridayTheThirteenths(2000) //, "10/13/2000");