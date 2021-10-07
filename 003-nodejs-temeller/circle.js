let circleArea = (r) => {
    let PI = 3.14;
    return (PI * Math.pow(r, 2)).toFixed(2);
}

let circleCircumference = (r) => {
    let PI = 3.14;
    return (2 * PI * r).toFixed(2);
}

module.exports = {
    circleCircumference,
    circleArea
}