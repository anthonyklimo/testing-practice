function cipher(word, shift) {
    const wordArray = Array.from(word);
    const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
    const wordIndeces = [];
    const shiftedWord = [];
    // turn shift argument into a value usable for array indeces
    shift = parseInt(shift);
    while(shift > 26) {
        shift = shift - 26;
    };

    function shiftIndex(num) {     
        if (num + shift > 26) {
            return (num + shift - 26);
        }
        return (num + shift);
    }

    wordArray.forEach(character => {
        wordIndeces.push(shiftIndex(alphabet.indexOf(character)));
    });

    wordIndeces.forEach(index => {
        shiftedWord.push(alphabet[index]);
    });

    return shiftedWord.join('');
};

module.exports = cipher;