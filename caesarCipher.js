export default function caesarCipher(string, shifts){
    if(typeof string !== "string") return string;
    let charCode = string.charCodeAt(0);
    if(charCode >= 97 && charCode <= 122){
        charCode += shifts;
        while(charCode > 122) charCode = 96 + (charCode - 122);
    }
    else return string;
    return String.fromCharCode(charCode);
}