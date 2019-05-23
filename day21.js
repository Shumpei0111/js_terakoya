// codesandboxに記述のためこのコードだと普通に読み込めません
// 課題：https://codesandbox.io/s/javascript-siziwu-21-function-in-object-7q12h


import { getType } from "typechecker";

describe("function in obj", () => {
  const sayHi = param => {
    return param + "HI!";
  };

  // オブジェクトにしまう
  const myObject = {
    name: "my Name",
    age: 4,
    myFunction: sayHi
  };

  // オブジェクトのプロパティにしまわれた関数を実行
  const res = myObject.myFunction("nakanishi");
  expect(res).toEqual("nakanishiHI!");

  // 関数を実行せず、単に値として受け取る
  const re = getType(myObject.myFunction);
  expect(re).toEqual("function");
});

// 課題
// 関数を作る
// オブジェクトにしまう
// テストを書いて、関数が入ったプロパティにアクセスし、
// その値の型を調べ、
// またその関数を実行する

describe("kadai-test", () => {
  const kadaiFunc = str => {
    return alert("string" + str);
  };

  const obj = {
    bool: true,
    num: 7,
    fnc: kadaiFunc
  };

  // プロパティへアクセス
  it("prop. access", () => {
    const res = getType(obj.bool);
    expect(res).toEqual("boolean");
  });

  // オブジェクトの要素を取得
  it("get obj", () => {
    const res = obj.num;
    expect(res).toEqual(7);
    expect(res).not.toEqual(8);
  });

  // 関数の値を調べる
  it("func check", () => {
    const res = obj.fnc("課題だよ");
    expect(res).toEqual(alert("string課題だよ"));
  });
});
