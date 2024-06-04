const mySentence = "anaconda"

function leet (chaine) {
    if (typeof chaine !== "string") 
        return "";

    const leetVowels = {
        A: '4',
        E: '3',
        I: '1',
        O: '0',
        U: '(_)',
        Y: '7'
    };

    return chaine.split("") 
        .map(char => {
            const charToUpperCase = char.toUpperCase(); 
            return Object.prototype.hasOwnProperty.call(leetVowels, charToUpperCase) ? leetVowels[charToUpperCase] : char;
        })
        .join(""); 
}
console.log(leet(mySentence));
