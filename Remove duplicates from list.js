function distinct(a) {
   return uniq = [...new Set(a)]; 
}

distinct([1]);  //, [1]);
distinct([1,2]);  //, [1,2]);
distinct([1,1,2]);  //, [1,2]);