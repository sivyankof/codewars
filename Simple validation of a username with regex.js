function validateUsr(username) {
   // console.log(username.length)

   if ((4 <= username.length) && (username.length <= 16)) {
      if (username == username.toLowerCase()) {
         if (username.indexOf(' ') <= 0) {
            console.log(true, username)
            return true
         }
      }
      // console.log(true, username )
   }
   return false
}



validateUsr('asddsa') //, true);
validateUsr('a') //, false);
validateUsr('Hass') //, false);
validateUsr('Hasd_12assssssasasasasasaasasasasas') //, false);
validateUsr('') //, false);
validateUsr('____') //, true);
validateUsr('012') //, false);
validateUsr('p1pp1') //, true);
validateUsr('asd43 34') //, false);
validateUsr('asd43_34') //, true);