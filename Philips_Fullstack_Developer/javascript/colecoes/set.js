const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const myset = new Set(arr);

    return [...myset];
}

console.log(valoresUnicos(meuArray));