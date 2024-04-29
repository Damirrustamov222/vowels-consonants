let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let vowels = [];
let consonants = [];


for (let i = 0; i < alphabet.length; i++) {
    let letter = alphabet[i].toUpperCase()

    if (`AEIOU`.includes(letter)) {
        vowels.push(letter)
    } else {
        consonants.push(letter)
    }
}

console.log(vowels, consonants);