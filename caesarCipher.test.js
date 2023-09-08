import caesarCipher from "./caesarCipher"

it("(a,1) => b", () => {
    expect(caesarCipher("a", 1)).toBe("b");
})

it("(z, 1) => a", () => {
    expect(caesarCipher("z", 1)).toBe("a");
})

it("(A,1) => B", () => {
    expect(caesarCipher("A", 1)).toBe("B");
})

it("(Z,1) => A", () => {
    expect(caesarCipher("Z", 1)).toBe("A");
})

