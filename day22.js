// codesandboxに記述のためこのコードだと普通に読み込めません
// 課題：https://codesandbox.io/s/javascript-siziwu-22-filter-jkik5

// 課題
// フィルタリングする値を変えてみる

describe("filter", () => {
  const members = ["cat", "dog", "ant"];

  //filterで条件を絞り込む
  const res = members.filter(member => {
    return member === "cat";
  }); // ["cat", "dog"], "cat","dog" などにするとエラーが起きた
  //  エラー内容は、expectedの値が空の[]でなくてはいけない

  it("絞りこまれているか", () => {
    const expected = ["cat"];
    expect(res).toEqual(expected);
  });
});
