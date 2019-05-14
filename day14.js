// day14はcodesandboxに記述のためこのコードだと普通に読み込めません
// 課題：https://codesandbox.io/s/oq8v130w4y

// ライブラリ：typecheckerを読み込む

// 課題
// CodeSandbox でのライブラリの使い方に慣れる
// 具体的には typechecker を Dependencies に追加し、テストで import する
// 今回書いたテストを書いて、実行する

import { getType } from "typechecker";

describe("type", () => {
  it("number", () => {
    const number = 1;
    const res = getType(number);
    expect(res).toEqual("number");
  });
});
