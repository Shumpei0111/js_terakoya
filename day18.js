// day18はcodesandboxに記述のためこのコードだと普通に読み込めません
// 課題：https://codesandbox.io/s/javascript-siziwu-18-object-in-array-tqnw5

import {
    getType
} from "typechecker";

describe("object", () => {
    const nakanishi = {
        name: "nakanishi",
        age: 34,
        hobby: "music",
        alive: true
    };

    const sasaki = {
        name: "sasaki",
        age: 40,
        hobby: "flower",
        alive: true
    };

    const jimmy = {
        name: "jimmy",
        age: 27,
        hobby: "guiter",
        alive: false
    };

    // array 配列にオブジェクトをしまう
    const persons = [nakanishi, sasaki, jimmy];

    // test の内容開始
    it("personsの型チェック", () => {
        const res = getType(persons);
        expect(res).toEqual("array");
    });

    describe("personsの各itemの中身の型チェック", () => {
        it("persons[0]の型", () => {
            const res = getType(persons[0]);
            expect(res).toEqual("object");
        });

        it("persons[0]の値", () => {
            const res = persons[0];
            const expected = {
                name: "nakanishi",
                age: 34,
                hobby: "music",
                alive: true
            };
            expect(res).toEqual(expected);
        });

        it("persons[2]の型", () => {
            const res = getType(persons[2]);
            expect(res).toEqual("object");
        });

        it("persons[2]の値", () => {
            const res = persons[2];
            const expected = {
                name: "jimmy",
                age: 27,
                hobby: "guiter",
                alive: false
            };
            expect(res).toEqual(expected);
        });
    });

    describe("persons[2]の値をより詳しく", () => {
        const jimmy = persons[2];

        it("jimmy is dead", () => {
            const res = jimmy.alive;
            const expected = false;
            expect(res).toEqual(expected);
        });

        it("jimmiy is dead at 27", () => {
            const res = jimmy.age;
            const expected = 27;
            expect(res).toEqual(expected);
        });
    });
});

// 課題
// オブジェクトを複数作る
// そのオブジェクトを配列にしまう
// テストを書いて、配列の各要素、それからその要素であるオブジェクトの値などなどをチェック！

describe("object", () => {
    const shumpei = {
        name: "shumpei",
        age: 31,
        hobby: ["music", "comic", "fashion"]
    };

    const takamasa = {
        name: "takamasa",
        age: 34,
        job: "guiterlist"
    };

    const yesman = {
        name: "yesman",
        actor: "Jim",
        isMovie: true
    };

    const p = [shumpei, takamasa, yesman];

    it("p arrayの型チェック", () => {
        const res = getType(p);
        expect(res).toEqual("array");
    });

    describe("p arrayの中の型チェック", () => {
        it("shumpei hobbies check", () => {
            const res = shumpei.hobby;
            expect(res).toEqual(["music", "comic", "fashion"]);
        });
    });

    it("p array[2]の値", () => {
        const res = p[2];
        const expected = {
            name: "yesman",
            actor: "Jim",
            isMovie: true
        };
        expect(res).toEqual(expected);
    });

    describe("p array[1]の詳細", () => {
        it("takamasa", () => {
            const res = takamasa.age;
            const expected = 34;
            expect(res).toEqual(expected);
        });
    });
});