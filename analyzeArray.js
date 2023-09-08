export default function analyzeArray(arr){
    return {
        average: arr.reduce((acc, cur) => acc + cur) / arr.length,
    }
}