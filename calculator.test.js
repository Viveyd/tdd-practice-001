import Calculator from "./calculator.js";

const calculator = new Calculator();

it("Return sum of a & b", () => {
    expect(calculator.add(5,3)).toBe(8);
})

it("Return diff of a & b", () => {
    expect(calculator.subtract(5,3)).toBe(2);
})

it("Return product of a & b", () => {
    expect(calculator.multiply(6,3)).toBe(18);
})

it("Return quotient of a & b", () => {
    expect(calculator.divide(6,3)).toBe(2);
})