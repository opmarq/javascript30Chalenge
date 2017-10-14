// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
  ];
  
  const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];
  
  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  
  // Question
  
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's

  var inventors1500 = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600 );

  console.table(inventors1500);
  
  
  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names
  
  var LastFisrtInventors = inventors.map((inventor)=> `${inventor.first} ${inventor.last}`);
  
  console.table(LastFisrtInventors);

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  
  var sortedInventors = inventors.sort(function(a,b){
        return a.year < b.year ? -1 : 1;
  });

  console.table(sortedInventors);

  // Array.prototype.reduce()
  // reduce is a quicker way to count things
  // 4. How many years did all the inventors live?
  
  var inventorsLived = inventors.reduce((count,inventor) => {
        return count + (inventor.passed - inventor.year);
  },0);

  console.log(`total number of years: ${inventorsLived}`);


  // 5. Sort the inventors by years lived

  var inventorsSortedByLived = inventors.sort((a,b) => {

    let alived = a.passed - a.year;
    let blived = b.passed - a.year;

    return alived > blived ? -1 : 1;

  });

  console.table(inventorsSortedByLived);

  
  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  
  /*
  // this will only work on wikipedia page!

  const caty = document.querySelector(".mw-category");

  const links = Array.from(caty.querySelectorAll("a"));

  var containsDe = links.map((link) => link.textContent).filter((linkContent) => linkContent.includes("de") );

  console.table(containsDe);
  
  */

  // 7. sort Exercise
  // Sort the people alphabetically by last name

  var sortedPeople = people.sort((a,b)=>{

    let [aFirst,aLast] = a.split(',');
    let [bFirst,bLast] = b.split(',');

    return aLast < bLast ? -1 : 1;

  });

  console.table(people);
  
  // 8. Reduce Exercise
  // Sum up the instances of each of these
  
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  

  const fre = data.reduce((obj,item)=>{

    if(!obj[item])
    {
        obj[item] = 0;
    }

    obj[item]++;

    return obj;

  },{});

  console.log(fre);
