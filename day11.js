// day9-11はcodesandboxに記述のためこのコードだと普通に読み込めません
// 課題：https://codesandbox.io/s/3vw5x2kqxq

const add = (num1, num2) => {
    return num1 + num2;
};

test("足し算", () => {
    const res = add(2, 3);
    expect(res).toEqual(5);
});

test("足し算2", () => {
    const res2 = add(2, 3);
    expect(res2).not.toEqual(10000);
});


// 宿題
// なんでもいいので関数を書く
// それに対してテストをする
// .not を使ったテストも書いてみる



const kadai = string => {
    return console.log(string);
};

test("宿題", () => {
    const hw = kadai("log");
    console.log(hw);
});

const eql = (a, b) => {
    return a === b;
};

test("イコール", () => {
    const zero = eql(1, 2);
    expect(zero).not.toEqual();
    return console.log(zero);
});