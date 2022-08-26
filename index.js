const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (element) => { 

  element === element.toLowerCase().split(" ").map((str)=> str.charAt(0).toUpperCase() + str.substring(1)).join(" ");

   return tutorials
}

// function titleCased(array){

//   let newArray = [];
  
//   for(let element of array){
//     for(let char of element){
//       if(char === char.toUpperCase()){
//         newArray.push(char.toLowerCase());
//       }
//     }
//   }

//   return newArray;

// }