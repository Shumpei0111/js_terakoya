// ５０００兆円ほしい
const hoshii = okane => {
    return okane;
};

const res = hoshii("5000兆円");
console.log(res);


// 人によって欲しい額が違ってくる
const okaneHoshii = okane => {
    return okane + "兆円";
};

const resp = okaneHoshii(3000);
console.log(resp);


// 宿題
// - アローファンクションを使う
// - 引数を受け取る
// - 引数となんらかの文字列を結合する
// - 笑いを取る

const Terminator = series => {
    return "ターミネーターは" + series + "が至高";
};

const resMovie = Terminator(2);
console.log(resMovie);