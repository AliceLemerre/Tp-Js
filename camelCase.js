const mySentence = "hello world";
  
function camelCase(chaine) {
    if (typeof chaine !== 'string' || chaine === null) {
        return ''; 
    }
    
    let words = chaine.replace(/[^a-zA-Z0-9]/g, ' ').split(' ');

    words = words.map((word) => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );

    return  words.join('');
}

console.log(camelCase(mySentence));  