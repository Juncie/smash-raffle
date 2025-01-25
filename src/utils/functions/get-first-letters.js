export function getFirstLetters(str) {
    // Split the string into words
    const words = str.split(' ');

    // Initialize a variable to store the first letters
    let firstLetters = '';

    // Extract the first letter from the first two words
    for (let i = 0; i < Math.min(words.length, 2); i++) {
        const word = words[i];
        if (word) {
            // Check if the word is not empty
            firstLetters += word[0]; // Add the first letter of the word to the result
        }
    }

    return firstLetters;
}
