module.exports = function reverse(n) {
    if (n < 0) {
        n = n * -1;
    }
    const arr = n.toString().split('');
    return parseInt(arr.reverse().join(''));
}