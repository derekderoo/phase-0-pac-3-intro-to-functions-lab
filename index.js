
function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase())
}
function logWhisper(string) {
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string) {
console.log(string);
console.log(string.toUpperCase())
console.log(string === string.toUpperCase())

    if (string === "Let\'s have dinner together!") {
        return "I would love to!"
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!"
    } else if (string !== string.toUpperCase()) {
        return "I can\'t hear you!"
    }  
}