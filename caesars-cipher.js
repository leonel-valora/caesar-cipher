class CaesarCipher {
    
    encrypt(message, seed) {
        let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let letters = message.split("");
        let encryptLetters = []
        letters.forEach(letter => {
            let lowerLetter =  letter.toLowerCase()
            if(abc.includes(lowerLetter)) {
                let index = abc.indexOf(lowerLetter) + seed;
                index = index < abc.length ? index :  index - abc.length;
                let newLetter = abc[index];
                
                letter = lowerLetter == letter ? newLetter :  newLetter.toUpperCase();
            }
            encryptLetters.push(letter);
        });
        return encryptLetters.join("")
    }

    decrypt(message, seed) {
        let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let letters = message.split("");
        let decryptLetters = []
        letters.forEach(letter => {
            let lowerLatter = letter.toLowerCase();
            if(abc.includes(lowerLatter)) {
                let index = abc.indexOf(lowerLatter) - seed;
                index = index >= 0 ? index :  index + abc.length;
                let newLetter = abc[index]
                letter = lowerLatter == letter ? newLetter :  newLetter.toUpperCase();
            }
            decryptLetters.push(letter);
        });
        return decryptLetters.join("")
    }
}
