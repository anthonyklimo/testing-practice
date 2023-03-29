function reverseString(string) {
    stringArray = Array.from(string);
    const reverseArray = [];

    for (let i = stringArray.length - 1; i > -1; i--) {
        reverseArray.push(stringArray[i]);
    }

    return reverseArray.join('');
}

module.exports = reverseString;