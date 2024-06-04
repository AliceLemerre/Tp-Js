function ucfirst (chaine) {
    if (typeof chaine !== "string") return "";
    return chaine[0].toUpperCase () +  chaine.substring(1)
}
console.log(ucfirst("tesT"))