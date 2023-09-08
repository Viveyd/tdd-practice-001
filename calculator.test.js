import Calculator from "./calculator.js";

const calculator = new Calculator();

it("Return sum of a & b", () => {
    expect(calculator.add(5,3)).toBe(8);
})

it("Return sum of more than 2 arguments", () => {
    expect(calculator.add(5,3,2)).toBe(10);
})

it("Return sum of array", () => {
    expect(calculator.add([5,3,2])).toBe(10);
})

it("Return diff of a & b", () => {
    expect(calculator.subtract(5,3)).toBe(2);
})

it("Return diff of more than 2 arguments", () => {
    expect(calculator.subtract(5,3,2)).toBe(0);
})

it("Return diff of array", () => {
    expect(calculator.subtract([5,3,2])).toBe(0);
})

it("Return product of a & b", () => {
    expect(calculator.multiply(6,3)).toBe(18);
})

it("Return product of more than 2 arguments", () => {
    expect(calculator.multiply(6,3,2)).toBe(36);
})

it("Return product of array", () => {
    expect(calculator.multiply([5,3,2])).toBe(30);
})

it("Return quotient of a & b", () => {
    expect(calculator.divide(6,3)).toBe(2);
})

it("Return quotient of more than 2 arguments", () => {
    expect(calculator.divide(12,2,3)).toBe(2);
})

it("Return quotient of array", () => {
    expect(calculator.divide([12,2,3])).toBe(2);
})

// it("Methods work with gaps in input", () => {
//     const input = [5,,2,3];
//     expect([calculator.add(...input), calculator.subtract(...input), calculator.multiply(input), calculator.divide(input)]).toEqual([10, 0, 30, 0.8333333333333334]);
// })