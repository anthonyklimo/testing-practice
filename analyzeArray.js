const analyzeArray = (array) => {
    array.sort((a, b) => a - b);
    const min = array[0];
    const max = array[array.length - 1];
    const length = array.length;
    const average = (array.reduce((a, b) => a + b)) / length;
    return { average, min, max, length };
}   

module.exports = analyzeArray;