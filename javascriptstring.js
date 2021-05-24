//CharAt()
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

//CharcodeAt()
const sentence1 = 'My name is aishwarya';
const indexx = 4;
console.log(`The character code ${sentence1.charCodeAt(index)} is equal to ${sentence1.charAt(index)}`);

//concat()
const str1 = 'Aishwarya';
const str2 = 'Pushparaj';
console.log(str1.concat(' ', str2));
console.log(str2.concat(', ', str1));

//codePointAt()
const icons = '☃★♲';
console.log('CodePointAt:');
console.log(icons.codePointAt(1));

//StringLength
const str = 'Aishwarya Pushparaj';
console.log(`${str} ${str.length}`);

//indexOf()
const sentence3 = 'Welcome';
const word = 'e';
console.log(`The word is ${word} is ${sentence3.indexOf(word)}`);

//last index()
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);

//search()
const paragraph1 = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const regex ='d';
console.log('The searched charcter:');
console.log(paragraph[paragraph1.search(regex)]);
console.log(paragraph1.search(regex));

//match()
const paragraph3 = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex1 = /[A-Z]/g;
const found = paragraph3.match(regex1);
console.log(found);

//replace()
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replaceAll('dog', 'monkey'));

//substr()
const str3 = 'Mozilla';
console.log(str3.substr(1, 2));
console.log(str3.substr(2));

//split()
const str4 = 'The quick brown fox jumps over the lazy dog.';
const words = str4.split(' ');
console.log(words[3]);
const chars = str4.split('');
console.log(chars[8]);
const strCopy = str4.split();
console.log(strCopy);

//trim()
const greeting = '   Hello world!   ';
console.log(greeting);
console.log(greeting.trim());

//repete()
const chorus = 'tooo. ';
console.log(`Happiee.. ${chorus.repeat(2)}`);

//LocalUPPERCASE
const myname  = 'aishwarya';
console.log(myname.toLocaleUpperCase());

//Lowercase
const myname1  = 'AISHWARYA';
console.log(myname1.toLocaleLowerCase());

//valueOf()
const stringObj = new String('foo');
console.log(stringObj);
console.log(stringObj.valueOf());
