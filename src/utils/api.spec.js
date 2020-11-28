import * as api from "./api";

describe("getProducts", () => {
  it("returns an array of objects", () => {
    const actual = api.getProducts();
    return actual.then((data) => {
      expect(data).toBeInstanceOf(Array);
      expect(data[0]).toBeInstanceOf(Object);
    });
  });
  it("contains an object with the key equal to 14 and name equal to Amazon Echo", () => {
    const actual = api.getProducts();
    return actual.then((data) => {
      expect(data[0].key).toBe(14);
      expect(data[0].name).toBe("Amazon Echo");
    });
  });
});
