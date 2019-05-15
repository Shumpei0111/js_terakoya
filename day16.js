// day16はcodesandboxに記述のためこのコードだと普通に読み込めません
// 課題：https://codesandbox.io/s/j2jm1nxmny

// ライブラリ：typecheckerを読み込む

import { getType } from "typechecker";

describe("type", () => {
  // 配列を作る
  const array = [1, 2, 3, 4.555];

  it("配列の型", () => {
    const res = getType(array);
    expect(res).toEqual("array");
  });

  it("配列の3番目", () => {
    const res = array[3];
    expect(res).toEqual(4.555);
  });

  it("配列の3番目の型", () => {
    const res = getType(array[3]);
    expect(res).toEqual("number");
  });
});


// 課題
// テスト駆動でやろう
// 配列をなんでもいいので作る
// 作られた配列の型を getType で確認
// さらに、配列の n 番目の中身と、その型をテストで確認

import { getType } from "typechecker";

describe("type", () => {
  const array = [1, { obj: "obj" }, "text"];

  it("配列の型", () => {
    const res = getType(array);
    expect(res).toEqual("array");
  });

  it("配列の1番目の要素と型", () => {
    const res = array[1];
    const res2 = getType(array[1]);
    expect(res).toEqual({ obj: "obj" });
    expect(res2).toEqual("object");
  });
});
