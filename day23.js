// codesandboxに記述のためこのコードだと普通に読み込めません
// 課題：https://codesandbox.io/s/javascript-siziwu-22-filter-zpsw8


describe("filterの引数の書き方のバリエ", () => {
    const members = ["nakanishi", "jim", "john"];

    it("fileterの引数に直接関数を書く", () => {
        // 渡しているのは【アロー関数】
        const res = members.filter(member => {
            return member === "john";
        });
        const expected = ["john"];
        expect(res).toEqual(expected);
    });

    it("filterの引数に、あらかじめ定義した関数を渡す", () => {
        const onlyJohn = member => {
            return member === "john";
        };

        // filterに、あらかじめ定義した関数を引数として渡す
        const res = members.filter(onlyJohn);
        const expected = ["john"];
        expect(res).toEqual(expected);
    });
});

//引数として受け取った値が "john" かどうか判断して、合致していれば true を、あっていなければ false を返します
describe("onlyJohn 関数の機能", () => {
    const onlyJohn = member => {
        return member === "john";
    };

    it("onlyJohn", () => {
        const res = onlyJohn("john");
        const expected = true;
        expect(res).toEqual(expected);
    });

    it("onlyJohn", () => {
        const res = onlyJohn("nakanishi");
        const expected = false;
        expect(res).toEqual(expected);
    });

    it("onlyJohn", () => {
        const res = onlyJohn("nakanishi");
        const expected = true;
        expect(res).not.toEqual(expected);
    });
});