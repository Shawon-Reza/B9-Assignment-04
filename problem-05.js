function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) === true && typeof serialNumber === 'number' && serialNumber > waitingTimes.length) {
        let avgWaitingTime = 0;
        for (totalTime of waitingTimes) {
            avgWaitingTime += totalTime;
        }
        avgWaitingTime = Math.round(avgWaitingTime / waitingTimes.length);
        let totalWaitingTime = ((serialNumber - 1) - waitingTimes.length) * avgWaitingTime
        return totalWaitingTime;
    }
    else {
        return "Invalid Input"
    }
}

console.log(waitingTime("s", 6))