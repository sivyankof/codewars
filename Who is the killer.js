function killer(suspectInfo, dead) {

   for (let el in suspectInfo) {

      let people = suspectInfo[el].filter(k => dead.includes(k))
      console.log(people)
      if (people.length === dead.length) {
         return (el)
      }
   }


}



killer({
   'James': ['Jacob', 'Bill', 'Lucas'],
   'Johnny': ['David', 'Kyle', 'Lucas'],
   'Peter': ['Lucy', 'Kyle']
}, ['Lucas', 'Bill']) //, 'James');
killer({
   'Brad': [],
   'Megan': ['Ben', 'Kevin'],
   'Finn': []
}, ['Ben']) //, 'Megan');