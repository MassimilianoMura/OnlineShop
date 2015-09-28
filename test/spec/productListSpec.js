describe("Products list", function () {
    it("should be a list of products", function () {
        expect(list[0]).toBeDefined();
    });
    describe("a product of the list", function () {
        it("should have a product name", function () {
            expect(list[0].name).toEqual("Almond Toe Court Shoes, Patent Black");
        });
        it("should have a price", function () {
            expect(list[0].quantity).toEqual(5);
        });
    });
});