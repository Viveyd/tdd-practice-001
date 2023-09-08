import analyzeArray from "./analyzeArray"

it('Returns .average', () => {
    expect(analyzeArray([1,2,3]).average).toBe(2)
})

it('Returns .min', () => {
    expect(analyzeArray([1,2,3]).min).toBe(1)
})

it('Returns .max', () => {
    expect(analyzeArray([1,2,3]).max).toBe(3)
})