function capitalize(word) {
    const wordArray = Array.from(word);

    wordArray[0] = wordArray[0].toUpperCase();
    return wordArray.join('');
}

module.exports = capitalize;