let mygcd = function(a, b) {
    if ( ! b) {
        return a;
    }

   
    return mygcd(b, a % b);
};


mygcd(30,12);  //6
mygcd(8,9);  //1
mygcd(1,1);  //1