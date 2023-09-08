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

it("Return Hi 99th .friend when given hi 99th .friend", () => {
    expect(capitalize("hi 99th .friend")).toBe("Hi 99th .friend");
})

it("Return [`Hello`, 'World!'] when given ['hello', 'world!']", () => {
    expect(capitalize(["hello", "world!"])).toEqual(["Hello", "World!"]);
})

it("Return [`Hello`, ['Mother', 'Father And'], 'World!'] when given ['hello', ['mother', 'father and'], 'world!']", () => {
    expect(capitalize(['hello', ['mother', 'father and'], 'world!'])).toEqual([`Hello`, ['Mother', 'Father And'], 'World!']);
})