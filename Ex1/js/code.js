
function getRandom1() {
    let minNum = 1;
    let maxNum = 6;
    result1 = Math.floor((Math.random() * (maxNum - minNum + 1)) + minNum);
    return result1;
}

function getRandom2() {
    let minNum = 1;
    let maxNum = 6;
    result2 = Math.floor((Math.random() * (maxNum - minNum + 1)) + minNum);
    return result2;
}

function sum() {
    resultSum = getRandom1() + getRandom2();
    return resultSum;
}

function sumArray(repetitionsArray) {

    var repetitionsArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (i = 0; i < 36000; i++) {

        resultSum = sum();

        if (resultSum == 2) {
            repetitionsArray[0] = repetitionsArray[0] + 1;

        } else if (resultSum == 3) {
            repetitionsArray[1] = repetitionsArray[1] + 1;

        } else if (resultSum == 4) {
            repetitionsArray[2] = repetitionsArray[2] + 1;

        } else if (resultSum == 5) {
            repetitionsArray[3] = repetitionsArray[3] + 1;

        } else if (resultSum == 6) {
            repetitionsArray[4] = repetitionsArray[4] + 1;

        } else if (resultSum == 7) {
            repetitionsArray[5] = repetitionsArray[5] + 1;

        } else if (resultSum == 8) {
            repetitionsArray[6] = repetitionsArray[6] + 1;

        } else if (resultSum == 9) {
            repetitionsArray[7] = repetitionsArray[7] + 1;

        } else if (resultSum == 10) {
            repetitionsArray[8] = repetitionsArray[8] + 1;

        } else if (resultSum == 11) {
            repetitionsArray[9] = repetitionsArray[9] + 1;

        } else if (resultSum == 12) {
            repetitionsArray[10] = repetitionsArray[10] + 1;
        }
    }
    alert("El array es: " + repetitionsArray.toString());
}