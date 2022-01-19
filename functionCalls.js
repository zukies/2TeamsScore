function checkWinner(avgDolphins, avgKoalas) {
    if (avgKoalas != avgDolphins && avgDolphins > 2 * avgKoalas) {

        return `Dolphins WIN, with ${avgDolphins} points!!`

    } else if (avgKoalas != avgDolphins && avgKoalas > 2 * avgDolphins) {

        return `Koalas WIN, with ${avgKoalas} points!!`

    } else {
        console.log("Sorry, no winner")
        return -1
    }

}
const calcAverage = (s1, s2, s3) => {
    const score = (s1 + s2 + s3) / 3
    return score
}

const avgDolphins = calcAverage(44, 23, 971)
const avgKoalas = calcAverage(85, 54, 41)
// console.log(avgDolphins)
// console.log(avgKoalas)
console.log(checkWinner(avgDolphins, avgKoalas))
