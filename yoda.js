const mySentence = "hello world bonjour"


function yoda (chaine) {
    if (typeof chaine !== "string" || chaine === null) 
        return "";
        return chaine.split(" ").reverse().join(" ");
}

console.log(yoda(mySentence));
