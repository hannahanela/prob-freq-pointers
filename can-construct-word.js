// add whatever parameters you deem necessary & write doc comment

//takes two string: word, letters
//return true (if the word can be built with the given letters) otherwise return false
//only given lower case in both word and in letters
//time complex = O(w+k) w = length of word, k = length of letters 
// length of strings don't matter, as there can be extra letters in second string, yet still build first string

// canConstructWord('aa', 'abc');
//    false -- can't build "aa" with only 1 "a"

// canConstructWord('abc', 'dcba');
//   true -- can build "abc" with letters "abcd"

// canConstructWord('aabb', 'bcabad');
//   true -- can build "aabbcc" with those letters

//freq counter, 

/** 1. creating an object from string argument
 * 2. taking string
 * 3. returning created object
 */
function createFreqCounter(string){
    //frequency counter function, to be called for both strings
        //frequency counter creates an object with keys = letters and values = freq
    const freqCounter = {};

    for(let char of string){
        const current = freqCounter[char] || 0;
        freqCounter[char] = current + 1; 
    }
    return freqCounter;
}

/** 1. determining if second string can create first string from letters
 * 2. take two stings, word and letters
 * 3. true or false
  */

function canConstructWord(word, letters) {
    
    //setting variables for the freq count func for each string
    //for loop to look over keys of the first string's object
    //compare to same key in second string's object
    //if equal, continue loop over first string's object, continue checking until done iterating over object,
    //once iterated over full object, return true 
    //if false equivalency, return false 
    
}
