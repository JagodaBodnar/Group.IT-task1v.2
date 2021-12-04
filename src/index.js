/*
        Zadanie polega na napisaniu skryptu w JavaScript, który po kliknięciu w przycisk wygeneruje 20 losowych liczb
        całkowitych z zakresu od 1 do 100 i umieści je w dwóch kolumnach.
        W jednej kolumnie mają znaleźć się tylko liczby parzyste, a w drugiej nieparzyste.
        Dodatkowo obie kolumny muszą być posortowane rosnąco.

 */


const generateRandom = (min, max) => Math.ceil(Math.random() * (max - min)) + min;
const generateArray = ({size, minValue, maxValue}) => {
    if (minValue > maxValue) {
        throw new Error("Wrong range");
    }
    return Array(size)
        .fill(0)
        .map(item => generateRandom(minValue, maxValue))
}
const sortArrayIncr = (array) => array.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else return 0;
})
const separateNumbers = (array) => {
    document.querySelectorAll("li").forEach(item => item.remove())
    const evenNumbers = array.filter(item => item % 2 === 0)
    const oddNumbers = array.filter(item => item % 2 !== 0)
    evenNumbers.map(item => {
        document.getElementById("even_numbers_list").appendChild(document.createElement("li")).innerText = `${item}`
    })
    oddNumbers.map(item => {
        document.getElementById("odd_numbers_list").appendChild(document.createElement("li")).innerHTML = `${item}`
    })
}

const main = () => {
    const params = {
        minValue: 1,
        maxValue: 100,
        size: 20
    }
    const array = sortArrayIncr(generateArray(params))
    return separateNumbers(array)
}


document.getElementById("generate_numbers_button").addEventListener("click", () => main())
