export default function reverseString(str){
    if(Array.isArray(str)) return str.map(item => reverseString(item)).reverse().join("");
    if(typeof str !== "string") return str;
    return str.split("").reverse().join("");
}