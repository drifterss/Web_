function containsNumber(str) {
    for (var i = 0; i < 10; i++) {
        if (str.indexOf(i) != -1) {
            return true
        }
    }
    return false
}

console.log(containsNumber('abc123'));