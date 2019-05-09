// returnされるとそこで処理は完全に終了する
const func1 = () => {
    return "this is returned";

    console.log("this is console");
};

const res1 = func1();
console.log(res1);

// returnだけすると、undefinedが返ってくる
const func2 = () => {
    return;

    console.log("this is console");
};

const res2 = func2();
console.log(res2);


// 宿題
// 関数内で return を使う。
// return より後ろに処理を書く。
// return より後ろの処理が実行されないことを確認する。

const hw = () => {
    console.log("display on");
    return "home work";

    console.log("not display");
};

const res3 = hw();
console.log(res3);