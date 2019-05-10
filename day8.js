const check = strings => {
    if (strings === "月") {
        return "月です";
    }

    if (strings === "太陽") {
        return "太陽です";
    }

    return "月でも太陽でもない";
};

const res = check("太陽");
console.log(res);

const res2 = check("月");
console.log(res2);

const res3 = check("火星");
console.log(res3);


// 課題
// 関数内で条件分岐をする。
// なんらかの文字列を関数に与える。
// 与えられた文字列が、チェックした文字列と一致するかどうかを判定する if 文 を書く。
// 一致したら、一致したことを伝える文字列を返す。
// どれにも一致しなかったようの return も作る。

const fruit = str => {
    if (str === "戌年") {
        return "時雨";
    }

    if (str === "子年") {
        return "ゆき";
    }

    return "キョン";
};

const eto = fruit("戌年");
console.log(eto);

const eto2 = fruit("子年");
console.log(eto2);

const eto3 = fruit("仲間はずれ");
console.log(eto3);