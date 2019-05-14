// day15はcodesandboxに記述のためこのコードだと普通に読み込めません
// 課題：https://codesandbox.io/s/5m3j6r65wk

// ライブラリ：typecheckerを読み込む

// 課題
// 変数に型が string, number, array, object, function になる値を入れる
// その型を typechecker でチェックして、期待する型になるようにテストを書く

import { getType } from "typechecker";

describe("type", () => {
  it("string", () => {
    const string = "Test Test Test Test";
    const res = getType(string);
    expect(res).toEqual("string");
  });

  it("number", () => {
    const number = 0.1; //01や1,000はエラーが起きる。0.1は起きない。
    const res = getType(number);
    expect(res).toEqual("number");
  });

  it("array", () => {
    const array = ["英語", "日本語"]; //arrayの中ももちろん型で書かないとエラーが起きる
    const res = getType(array);
    expect(res).toEqual("array");
  });

  it("object", () => {
    const object = {
      name: "taro",
      age: 40,
      hobby: ["fishing", "travel", "food"],
      favorites: [
        {
          book: "チーズはどこへ消えた",
          place: "兼六園",
          number: 1
        }
      ]
    }; // arrayもオブジェクトなので入る
    const res = getType(object);
    expect(res).toEqual("object");
  });

  it("function", () => {
    const func = () => {
      console.log("hello");
      return func();
    };
    const res = getType(func);
    expect(res).toEqual("function");
  });
});
