const isPrime = (number) => {
    if (number < 2) return false;
    let result = false;
    for (let i = 2; i <= Math.floor(number / 2); i++) {
        if (number % i == 0) {
            console.log(`${number} sayısı asal değildir.`);
            return false;
        }
    }
    console.log(`${number} sayısı asaldır`);
    return true;
}

const number = Number(Math.floor(23.32));
isPrime(number);