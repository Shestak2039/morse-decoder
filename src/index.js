const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    return expr.split('**********').map((word) => {
        const countOfLetters = word.length / 10;
        let resultWord = '';
        for (let i = 0; i < countOfLetters; i++) {
            let letter = '';
            for (let j = i * 10; j < i * 10 + 10; j += 2) {
                if (word[j] + word[j + 1] === '10') {
                    letter += '.';
                } else if (word[j] + word[j + 1] === '11') {
                    letter += '-';
                }
            }
            resultWord += MORSE_TABLE[letter];
            letter = '';
        }
        return resultWord;
    }).join(' ');
}

module.exports = {
    decode
}