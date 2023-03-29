function cipher(word, shift) {
    const wordArray = Array.from(word);
    const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');

    while(parseInt(shift) > 26) {
        shift = shift - 26;
    };

    const shiftedAlphabet = alphabet.concat(alphabet.splice(0, shift));
    const wordIndeces = [];

    wordArray.forEach(character => {
        wordIndeces.push(alphabet.indexOf(character));
    });

    const shiftedWord = [];
    wordIndeces.forEach(index => {
        if (index < 0) {
            shiftedWord.push(shiftedAlphabet[index + 26])
        };

        shiftedWord.push(shiftedAlphabet[index]);
    });

    return shiftedAlphabet;
};

module.exports = cipher;