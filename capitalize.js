const mySentence = "hello world";

function capitalize (chaine) {
    if (typeof chaine !== 'string' || chaine === null) {
        return ""; 
    }

    return chaine.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

console.log(capitalize(mySentence))
