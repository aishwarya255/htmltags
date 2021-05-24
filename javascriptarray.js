//forloop
console.log('forloop')
var array = [1,2,3,4,5,6,7];
for (var i = 0; i < array.length; i++){
  console.log(i);
}
//forEach()
console.log('forEach()')
var array = [1,2,3];
array.forEach(function(i){
  console.log(i);
});
//map()
console.log('Map()')
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled);
//filter()
console.log('Filter()')
const numbers1 = [1, 2, 3, 4];
const evens = numbers1.filter(item => item % 2 === 0);
console.log(evens);

//reduce()
console.log('Reduce()')
const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum);
console.log('Reduce()Eg2')
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});
console.log(petCounts); 
//every()
console.log('Every()')
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13, 38];

console.log(array1.every(isBelowThreshold));
//join
console.log('Join()')
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
console.log(elements.join('-'));
//concat
console.log('Concat()')
const array2 = ['a', 'b', 'c'];
const array3 = ['d', 'e', 'f'];
const array4 = array2.concat(array3);
console.log(array4);
//find
console.log('Find()')
const array5 = [5, 12, 8, 130, 44];
const found = array5.find(element => element > 10);
console.log(found);
//push()
console.log('Push()')
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
console.log(animals);
animals.push('chickens', 'cats', 'dogs');
console.log(animals);
//pop()
console.log('Pop()')
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
console.log(plants);
//reverse()
console.log('Reverse()')
const array6 = ['one', 'two', 'three'];
console.log('array6:', array6);
const reversed = array6.reverse();
console.log('reversed:', reversed);
//some()
console.log('Some()')
const array7 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array7.some(even));