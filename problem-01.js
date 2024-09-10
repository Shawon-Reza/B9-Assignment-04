
function calculateTax(icome, expenses) {
    if ((icome >= 0 && expenses >= 0) && (typeof icome === 'number' || typeof expenses === 'number') && (icome >= expenses)) {
        let benifit = icome - expenses
        let tax = benifit * .2
        return tax;
    }
    else {
       return "Invalid Input"
    }

}
console.log(calculateTax(34000,1753))
console.log(calculateTax(-34000,-1753))
console.log(calculateTax('reza',1753))
