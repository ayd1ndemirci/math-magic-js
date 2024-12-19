const getFactorial = (number) => {
    if (number < 0) return "Faktöriyel negatif sayılar için tanımlı değildir.";
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

let number = 6;
console.log(`${number} sayısının faktöriyeli: ` + getFactorial(number))