// day13はcodesandboxに記述のためこのコードだと普通に読み込めません
// 課題：https://codesandbox.io/s/142y8mpy73

// index.jsに関数を記述

const checkHw = strings => {
    if (strings === "月") {
        return "月です";
    }

    if (strings === "太陽") {
        return "太陽です";
    }

    return "月でも太陽でもない";
};

export default checkHw; // checkHwを別ファイルでも使用できるように。


// test.spec.jsにテストコードを記述

import checkHw from "/src/index.js";

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