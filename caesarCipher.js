export default function caesarCipher(string, shifts){
    if(typeof string !== "string") return string;
    let ciphered = "";
    for(let i = 0; i < string.length; i++){
        let charCode = string.charCodeAt(i);
        if(charCode >= 97 && charCode <= 122){
            charCode += shifts;
            while(charCode > 122) charCode = 96 + (charCode - 122);
        } else if (charCode >= 65 && charCode <= 90){
            charCode += shifts;
            while(charCode > 90) charCode = 64 + (charCode - 90);
        }
        ciphered += String.fromCharCode(charCode);
    }
    return ciphered;
}