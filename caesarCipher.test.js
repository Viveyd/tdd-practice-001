import caesarCipher from "./caesarCipher"

it("Test 1", () => {
    expect(caesarCipher("a", 1)).toBe("b");
})

it("Test 2", () => {
    expect(caesarCipher("z", 1)).toBe("a");
})
