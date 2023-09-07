import reverseString from "./reverseString";

it("Returns a given a", () => {
    expect(reverseString('a')).toBe('a');
})

it("Returns cba given abc", () => {
    expect(reverseString('abc')).toBe('cba');
})

it("Returns c b a given a b c", () => {
    expect(reverseString('a b c')).toBe('c b a');
})

it("Returns 3c2ba1 given 1ab2c3", () => {
    expect(reverseString('1ab2c3')).toBe('3c2ba1');
})

it("Returns int 9 given int 9", () => {
    expect(reverseString(9)).toBe(9);
})
