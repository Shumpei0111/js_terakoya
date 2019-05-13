// day12はcodesandboxに記述のためこのコードだと普通に読み込めません
// 課題：https://codesandbox.io/s/142y8mpy73

const check = strings => {
    if (strings === "月") {
        return "月です";
    }

    if (strings === "太陽") {
        return "太陽です";
    }

    return "月でも太陽でもありません";
};

describe("惑星のチェック関数のテスト", () => {
    test("月の場合", () => {
        const res = check("月");
        expect(res).toEqual("月です");
    });

    test("太陽の場合", () => {
        const res = check("太陽");
        expect(res).toEqual("太陽です");
    });

    test("犬の場合", () => {
        const res = check("犬");
        expect(res).toEqual("月でも太陽でもありません");
    });

    test("数値の場合", () => {
        const res = check(100);
        expect(res).toEqual("月でも太陽でもありません");
    });
});

// 参考 describe でテストをまとめる

describe("テストを大きくまとめた名前", () => {
    test("テスト1", () => {});
    test("テスト2", () => {});
});


// 課題
// 以前自分が 寺子屋 8 で書いた条件分岐する関数を引っ張り出す
// それに対してテストをする
// テスト全体を describe() で囲ってみる。


const checkHw = strings => {
    if (strings === "月") {
        return "月です";
    }

    if (strings === "太陽") {
        return "太陽です";
    }

    return "月でも太陽でもない";
};

describe("チェックテスト", () => {
    test("太陽チェック", () => {
        const r1 = checkHw("太陽");
        expect(r1).toEqual("太陽です");
    });

    test("月チェック", () => {
        const r2 = checkHw("月");
        expect(r2).toEqual("月です");
    });

    test("その他", () => {
        const r3 = checkHw("aaa");
        expect(r3).toEqual("月でも太陽でもない");
    });
});