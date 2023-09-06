import capitalize from "./capitalize"

it("Return ABCD when given aBCD", () => {
    expect(capitalize("aBCD")).toBe("ABCD");
})

it("Return AbCd when given abCd", () => {
    expect(capitalize("abCd")).toBe("AbCd");
})

it("Return .dsa3d when given .dsa3d", () => {
    expect(capitalize(".dsa3d")).toBe(".dsa3d");
})

it("Return 1234 when given 1234", () => {
    expect(capitalize(1234)).toBe(1234);
})

it("Return Hello World! when given hello world!", () => {
    expect(capitalize("hello world!")).toBe("Hello World!");
})
