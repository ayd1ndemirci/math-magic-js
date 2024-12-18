const isArmstrong = (number) => {
    let total = 0;
    for (let i = 0; i < number.length; i++) {
        let figure = number.charAt(i);
        total += figure * figure * figure;
    }
    return number == total ? `${number} bir armstrong sayısıdır.` : `${number} bir armstrong sayısı değildir.`;
}

let number = "153";
console.log(isArmstrong(number));