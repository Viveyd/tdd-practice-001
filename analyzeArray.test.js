import analyzeArray from "./analyzeArray"

it('Returns average', () => {
    expect(analyzeArray([1,2,3]).average).toBe(2)
})