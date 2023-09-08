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

it("(ab,1) => bc", () => {
    expect(caesarCipher("ab", 1)).toBe("bc");
})

it("(yz, 1) => za", () => {
    expect(caesarCipher("yz", 1)).toBe("za");
})

it("(2a9b.ds,1) => 2b9c.et", () => {
    expect(caesarCipher("2a9b.ds", 1)).toBe("2b9c.et");
})

it("(y#.dz, 1) => z#.ea", () => {
    expect(caesarCipher("y#.dz", 1)).toBe("z#.ea");
})



