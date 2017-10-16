// ## Array Cardio Day 2
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  
  
  // .some() checks and see's if at least one thing in the array satisfies
  // the particular condition
  // Array.prototype.some() // is at least one person 19 or older?

  let isAdult = people.some((person)=> (new Date().getFullYear() - person.year) >= 19 );

  console.log("Is there at leastone persone 19 or older ? %s", isAdult);

  // Array.prototype.every() // is everyone 19 or older?

  let isEveryOneAdult = people.every((person)=> (new Date().getFullYear() - person.year) >= 19);


  console.log("is everyone 19 or older? %s",isEveryOneAdult);

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423

  let foundComment = comments.find((comment)=>comment.id === 823423);

  console.log(foundComment);
  
  // Array.prototype.findIndex()
  // Find the index with this ID

 let foundIndex = comments.findIndex((comment)=> comment.id === 823423 );

  // delete the comment with the ID of 823423

  comments.splice(foundIndex,1)

  console.table(comments);


  