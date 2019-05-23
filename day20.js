// codesandboxに記述のためこのコードだと普通に読み込めません
// 課題：https://codesandbox.io/s/javascript-siziwu-20-arraylength-32o3w

describe("length", () => {
  it("配列の長さ = elementの個数", () => {
    const members = ["nakanishi", "jim", "john"];
    const res = members.length;
    expect(res).toEqual(3);
  });
});

describe("length", () => {
  it("文字列の長さ=文字数", () => {
    const strings = "my awesome strings";
    const res = strings.length;
    expect(res).toEqual(18);
  });
});

// 課題
// テストを書きながら、
// 配列を作ってその長さをチェックする
// 文字列を作ってその長さをチェックする

describe("配列の要素数の長さ", () => {
  const kadai = [
    "テストを書く",
    "配列の長さをチェックする",
    "文字列の長さをチェックする"
  ];
  const res = kadai.length;
  expect(res).toEqual(3);
});

describe("文字列の長さ", () => {
  const str = "文字列の長さを計る";
  const res = str.length;
  expect(res).toEqual(9);
});
