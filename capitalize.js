export default function capitalize(str){
    if(Array.isArray(str)){
        return str.map(item => {
            if(typeof item === "string") return capitalize(item);
        })
    }
    if(typeof str !== "string") return str;
    const split = str.split(" ");
    if(split.length > 1) return split.map(word => word.slice(0,1).toUpperCase() + word.slice(1)).join(" ");
    else return str.slice(0,1).toUpperCase() + str.slice(1);
}