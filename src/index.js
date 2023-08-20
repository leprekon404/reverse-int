module.exports = function reverse (n) {
    let number = String(n).split('');

    if ( number[0] == '-') {
        number[0] = ' ';
        n = +number.join('');

        return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
    } else {
        return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
    }

    

}

