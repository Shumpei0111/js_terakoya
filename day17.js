// day17はcodesandboxに記述のためこのコードだと普通に読み込めません
// 課題：hhttps://codesandbox.io/s/9tbph

import {
    getType
} from "typechecker";

describe("object", () => {
    // オブジェクトを作る
    const object = {
        name: "shumpei",
        age: 31,
        hobby: "music",
        alive: true
    };

    it("オブジェクトのチェック", () => {
        const res = getType(object);
        expect(res).toEqual("object");
    });

    describe("オブジェクトのプロパティのチェック", () => {
        it(".ageの型", () => {
            const res = object.age;
            expect(res).toEqual(31);
        });

        it(".aliveの型", () => {
            const res = getType(object.alive);
            expect(res).toEqual("boolean");
        });

        it(".aliveの値", () => {
            const res = object.alive;
            expect(res).toEqual(true);
        });
    });
});

// 課題
// オブジェクトを書く
// オブジェクトの用語を思い出す！
// テストを書いて、オブジェクトのプロパティにアクセスし、その値をテストしよう！

// オブジェクトの生成
describe("課題", () => {
    const kadai = {
        kadaiNumber: 17,
        author: "nakanishi",
        kadai: [
            "オブジェクトを書く",
            "オブジェクトの用語を思い出す！",
            "テストを書いて、オブジェクトのプロパティにアクセスし、その値をテストしよう！"
        ],
        func: function () {
            const a = ["a", "b", "c"];
            return a;
        }
    };

    it("オブジェクト?", () => {
        const res = getType(kadai);
        expect(res).toEqual("object");
    });

    describe("プロパティのチェック", () => {
        it("kadaiNumberの型", () => {
            const res = getType(kadai.kadaiNumber);
            expect(res).toEqual("number");
        });

        it("kadaiの型", () => {
            const res = getType(kadai.kadai);
            expect(res).toEqual("array");
        });

        it("kadaiの値", () => {
            const res = kadai.kadai;
            expect(res).toEqual([
                "オブジェクトを書く",
                "オブジェクトの用語を思い出す！",
                "テストを書いて、オブジェクトのプロパティにアクセスし、その値をテストしよう！"
            ]);
        });

        it("funcの型", () => {
            const res = getType(kadai.func);
            expect(res).toEqual("function");
        });

        it("funcの値", () => {
            const res = kadai.function;
            expect(res).toEqual(undefined);
        });
    });
});