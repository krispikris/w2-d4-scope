/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add 
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/

/*
1. Function named sandwichMaker takes one argument(str)
2. Function returns another function
3. Second Function will add "and " + (str) 
4. Return new string 
*/

const sandwichMaker = () => {

      let strArr = []
      function innerFunc(str){
          strArr.push(' and ' + str)
          // console.log(strArr, ' ', str)
          return ( "One sandwich with tomato"+ strArr.join('') )
      }

      return innerFunc
}


// let sandwich = sandwichMaker(); // => returns a function
// console.log(sandwich("spinach")) // => "One sandwich with tomato and spinach"
// console.log(sandwich("jelly")) // => "One sandwich with tomato and spinach and jelly"
// console.log(sandwich("bread")) // => "One sandwich with tomato and spinach and jelly and bread"

// // Another Sandwich:
// let sandwich2 = sandwichMaker(); // => returns a function
// sandwich2("pb") // => "One sandwich with tomato and pb"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
