function derivative(f, x, h = 1e-5) {
    return (f(x + h) - f(x)) / h;
}

function f(x) {
    return x ** 2;
}

console.log(derivative(f, 6))