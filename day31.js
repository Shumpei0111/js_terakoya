// codesandboxに記述のためこのコードだと普通に読み込めません
// 課題：https://codesandbox.io/s/switch-js-siziwu-6kq68


const games = genre => {
  switch (genre) {
    case "music":
      return "ポップンミュージック！";
    case "fighting":
      return "昇竜拳！";
    case "race":
      return "湘南ミッドナイト";
    default:
      return "やらない";
  }
};

describe("games", () => {
  it("music", () => {
    const res = games("music");
    expect(res).toEqaul("ポップンミュージック！");
  });

  it("fighting", () => {
    const res = games("fighting");
    expect(res).toEqaul("昇竜拳！");
  });

  it("none gamer", () => {
    const res = games("しらん");
    expect(res).toEqual("やらない");
  });
});

const ifgames = genre => {
  if (genre === "music") {
    return "ポップンミュージック！";
  }

  if (genre.length === 3) {
    return "3種類しかやらん";
  }
};

describe("if", () => {
  it("ifmusic", () => {
    const res = ifgames("music");
    expect(res).toEqual("ポップンミュージック！");
  });

  it("length", () => {
    const res = ifgames(3);
    expect(res).toEqual("3種類しかやらん");
