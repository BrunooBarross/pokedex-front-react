const convertNumber = (number) => {
    let str = "" + number
    let pad = number < 1000 ? "000" : "0000"
    return pad.substring(0, pad.length - str.length) + str
}

const converHeight = (str) => {
    if (str.length === 1) {
        return "0." + str + "m";
    } else {
        return str[0] + "." + str[1] + "m";
    }
}

const converWeight = (str) => {
    if (str.length === 1) {
        return "0." + str + "kg";
    } else {
        return str[0] + "." + str[1] + "kg";
    }
}

const caseFirstLetter = (str) => {
    return str[0].toUpperCase() + str.substring(1);
}

export {
    converHeight,
    convertNumber,
    converWeight,
    caseFirstLetter
}