const isTrue = boolean => {
    if (boolean === true) {
        console.log("true");
        return "true：リターンを実行したらそこで終了"
    }
    // elseを使わない早期リターン
    console.log("not true");
    return "trueではない…"

};

isTrue(true);


// 課題
// 関数内で if 文 を使う。
// if 文 の条件判断は true かそれ以外かを判断する。
// if 文 の条件判断がどうなるにせよ、必ず return で何かを返す関数とする。
// else は使わずに「早期リターン」を使うバージョンで書く

const checkSome = check => {
    if (check === true) {
        console.log("good");
        return "good"
    }

    console.log("not good");
    return "not good"
};

checkSome(true);