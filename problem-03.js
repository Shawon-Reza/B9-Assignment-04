function checkDigitsInName(name) {
    if (typeof name === 'string') {
        for (charecter of name) {
            let b = !isNaN(charecter)

            if (b === true && charecter!==" ") {
                return true
            }
        }
        return false
    }
    else {
        return "Invalid Input";
    }
}

console.log(checkDigitsInName("!@#"))


