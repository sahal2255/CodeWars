function hexToDec(hexString) {
    // Check if the input string is a valid hexadecimal number
    if (/^-?[0-9a-fA-F]+$/.test(hexString)) {
        // Convert hexadecimal string to decimal number
        return parseInt(hexString, 16);
    } else {
        // Return -12 for invalid input
        return -12;
    }
}

// Test cases
console.log(hexToDec('1a')); // Output: 26
console.log(hexToDec('ff')); // Output: 255
console.log(hexToDec('xyz')); // Output: -12 (Invalid input)
console.log(hexToDec('-2f5b')); 