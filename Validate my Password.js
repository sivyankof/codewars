function validPass(password){
   if(password.length>3 && password.length<20){
      if(/[a-z]/i.test(password) && /[0-9]/i.test(password)){
         console.log('VALID', password)
      }
   }else{
      console.log('INVALID', password)
   }
   console.log('INVALID', password)
  
}



validPass('Username123')    // , 'VALID' );
validPass('Username')    // , 'INVALID' );
validPass('1Username')    // , 'VALID' );
validPass('123')    // , 'INVALID' );
validPass('a12')    // , 'INVALID' );
validPass('Username123!')    // , 'INVALID' );
validPass('ThisPasswordIsTooLong1234')    // , 'INVALID' )