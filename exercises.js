const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const thousandFiveHundred = inventors.filter((inverter) => {
  return inverter.year >= 1500 && inverter.year < 1600;
});
// console.table(thousandFiveHundred);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const inventorsNames = inventors.map(
  (invertor) => `${invertor.first} ${invertor.last}`
);

// console.log(inventorsNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const accendingOrder = inventors.sort((a, b) => {
  return a.year - b.year;
});
// console.log(accendingOrder);

const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
// console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const inventorsTotalYears = inventors.reduce(
  (sum, invertor) => sum + (invertor.passed - invertor.year),
  0
);
// console.log(inventorsTotalYears);

// 5. Sort the inventors by years lived
const livedYearsDecending = inventors.sort((a, b) => {
  return b.passed - b.year - (a.passed - a.year);
});

// console.log(livedYearsDecending);

const oldest = inventors.sort(function (a, b) {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  return nextInventor - lastInventor;
});
// console.log(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// inspect this website, and find the category column class in inspector.
const category = document.querySelector('.mw-category');
const link = [...category.querySelectorAll('a')];
const de = link
  .map((link) => link.textContent)
  .filter((streetName) => streetName.includes('de'));
// console.log(de);

// 7. sort Exercise
// Sort the people alphabetically by last name

const accendingAlpha = people.sort((a, b) => (a === b ? 0 : a < b ? -1 : 1));
// console.log(accendingAlpha);

const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
// console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

let result = {};
function vehicleCount() {
  for (let i = 0; i < data.length; i++) {
    if (!result[data[i]]) {
      result[data[i]] = 0;
    }
    result[data[i]]++;
  }
  return result;
}

// console.log(vehicleCount());

const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

// console.log(transportation);
