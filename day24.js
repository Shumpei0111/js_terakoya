// codesandboxに記述のためこのコードだと普通に読み込めません
// 課題：https://codesandbox.io/s/vq95l0vpw0

// 課題
// いろんな配列を作って、filter してみてください！自由に。

describe("kadai", () => {
    const arr = ["nikuman", "anman", "curryman"];

    it("all true", () => {
        const res = arr.filter(man => {
            return true;
        });
        expect(res).toEqual(["nikuman", "anman", "curryman"]);
    });

    it("all false", () => {
        const res = arr.filter(man => {
            return false;
        });
        expect(res).toEqual([]);
    });

    it("nikuman", () => {
        const res = arr.filter(man => {
            return man === "nikuman";
        });
        expect(res).toEqual(["nikuman"]);
    });

    it("length", () => {
        const res = arr.filter(man => {
            return man.length > 6;
        });
        expect(res).toEqual(["nikuman", "curryman"]); //["curryman", "nikuman"]だと順番が異なりエラーになる
    });
});