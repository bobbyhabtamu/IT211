function pigLatinTranslator(input) {
  // Check if input is empty or a single-letter word
  if (input.length === 1) {
    console.log("Need a word with more than one letter.");
    return;
  }

  // Split the entry into an array of words
  var words = input.split(" ");
  var translatedWords = [];

  // apply the Pig Latin rules 
  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();
    var firstLetter = word[0];
    var vowels = ["a", "e", "i", "o", "u"];

    // Check if the word starts with a vowel
    if (vowels.indexOf(firstLetter) !== -1) {
      translatedWords.push(word + "way");
    }
    // Check if the word starts with one consonant
    else if (vowels.indexOf(word[1]) === -1) {
      translatedWords.push(word.slice(1) + firstLetter + "ay");
    }
    // Check if the word starts with two consonants
    else {
      translatedWords.push(word.slice(2) + firstLetter + word[1] + "ay");
    }
  }

  // Putting it all back togethers
  var translatedSentence = translatedWords.join(" ");

  // Print the translated sentence
  console.log(translatedSentence);
}

// Example usage
pigLatinTranslator("Check if this works");