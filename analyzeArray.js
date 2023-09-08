export default function analyzeArray(arr){
    return {
        average: arr.reduce((acc, cur) => acc + cur) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        len: arr.length,
    }
}