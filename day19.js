// day19はcodesandboxに記述のためこのコードだと普通に読み込めません
// 課題：https://codesandbox.io/s/crefi


import { getType } from "typechecker";

describe("object", () => {
  const memberList = ["sasaki", "jimmy", "john"];

  const myClass = {
    members: memberList,
    className: "Terakoya",
    classNumber: 2
  };

  it("myClassの型", () => {
    const res = getType(myClass);
    expect(res).toEqual("object");
  });

  describe("myClassの各プロパティの型と値をチェック", () => {
    it("myClass.membersの型", () => {
      const res = getType(myClass.members);
      expect(res).toEqual("array");
    });

    it("myClass.membersの値", () => {
      const res = myClass.members;
      const expected = ["sasaki", "jimmy", "john"];
      expect(res).toEqual(expected);
    });

    it("myClass.members[1]の値", () => {
      const members = myClass.members;
      const res = members[1];
      expect(res).toEqual("jimmy");
    });

    it("myClass.classNameの型", () => {
      const res = getType(myClass.className);
      expect(res).toEqual("string");
    });

    it("myClass.classNameの値", () => {
      const res = myClass.className;
      expect(res).toEqual("Terakoya");
    });
  });
});

// 課題
// オブジェクトを作る
// そのオブジェクトのプロパティの少なくとも一つに「配列」をしまう
// テストを書いて、値や型をチェック！

describe("kadai", () => {
  const kadaiList = ["makeObj", "array", "terakoya"];

  const myKadai = {
    list: kadaiList,
    listCount: 3,
    maker: "shumpei"
  };

  it("kadaiの型", () => {
    const res = getType(myKadai);
    expect(res).toEqual("object");
  });

  describe("myKadaiのテスト", () => {
    it("myKadai.listの型", () => {
      const res = getType(myKadai.list);
      expect(res).toEqual("array");
    });

    it("myKadai.listCountの値", () => {
      const res = myKadai.listCount;
      expect(res).toEqual(3);
    });

    it("myKadai.makerの型", () => {
      const res = getType(myKadai.maker);
      expect(res).toEqual("string");
    });
  });
});
