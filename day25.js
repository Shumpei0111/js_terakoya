// codesandboxに記述のためこのコードだと普通に読み込めません
// 課題：https://codesandbox.io/s/terakoya-map-8kzv1

describe("map", () => {
    const array = ["tanaka", "nakanishi", "sasaki", "koyama", "oda"];
    console.log(4, array);
    it("new.", () => {
      const res = array.map(() => {
        return "new";
      });
      console.log(3.1, res, 3.2, array);
      const expected = ["new", "new", "new", "new", "new"];
  
      expect(res).toEqual(expected);
      console.log(1, res);
    });
  
    it("add Mr.", () => {
      const res = array.map(name => {
        return "Mr." + name;
      });
      console.log(10, res);
      const expected = [
        "Mr.tanaka",
        "Mr.nakanishi",
        "Mr.sasaki",
        "Mr.koyama",
        "Mr.oda"
      ];
  
      expect(res).toEqual(expected);
    });
  
    const func = function() {
      console.log(2, array);
    };
    func();
  });
  
  // 課題
  // map を使って、新しい配列を作ってみよう！
  describe("movies", () => {
    const arr = ["AKIRA", "Ghost In The Shell", "酔拳2", "時計じかけのオレンジ"];
  
    it("new arr", () => {
      const newArr = arr.map(() => {
        return "new";
        // indexの分だけ置き換わる
      });
      console.log(49, arr, "49行目 arr");
  
      const expected = ["new", "new", "new", "new"];
  
      expect(newArr).toEqual(expected);
      aaa(54, newArr, arr);
    });
  
    it("test", () => {
      const testarr = arr.map(title => {
        return "水野晴郎おすすめの「" + title + "」";
      });
      console.log(61, "61行目 testarr", testarr);
  
      const expected = [
        "水野晴郎おすすめの「AKIRA」",
        "水野晴郎おすすめの「Ghost In The Shell」",
        "水野晴郎おすすめの「酔拳2」",
        "水野晴郎おすすめの「時計じかけのオレンジ」"
      ];
      aaa(69, testarr, arr);
      expect(testarr).toEqual(expected);
    });
    // console.log(10000, testarr);
    // スコープからはずれると見れなくなる
    aaa(74, arr, "74行目newArr");
  });
  
  function aaa(uho, aha, haha) {
    console.log(uho, aha, haha);
  }
  