function calculateFinalScore(obj) {
    if (typeof obj === 'object' && obj.testScore <= 50 && obj.schoolGrade <= 30) {
        if (obj.isFFamily === true) {
            let finalScore = obj.testScore + obj.schoolGrade + 20;
            if (finalScore >= 80) {
                return true;
            } else {
                return false
            }
        }
        else {
            let finalScore = obj.testScore + obj.schoolGrade;
            if (finalScore >= 80) {
                return true;
            }
            else {
                return false

            }
        }
    }
    else {
        return "Invalid Input"
    }
}

console.log(calculateFinalScore("sd"))