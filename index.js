function shout(string){
    return string.toUpperCase();
}
console.log(shout("hello"))

function whisper(string){
    return string.toLowerCase();
}
console.log(whisper("HELLO"))

function logShout(string){
    const result = string.toUpperCase();
    console.log(result)
}
logShout("Ronnie")

function logWhisper(string){
    const output = string.toLowerCase();
    console.log(output)
}
logWhisper("ADhiaMBO")

function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
        return("I can't hear you!")
    } else if(string === string.toUpperCase()){
        return("YES INDEED!")
    }else(string = "Let's have dinner together!")
        return("I would love to!")

}
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"))

function input(string){
    const name = string.toUpperCase();
    console.log(name)
}
input("onyango")
function password (string){
    const output = string.toLowerCase();
    console.log(output)
}
password("ONYANGO")
    