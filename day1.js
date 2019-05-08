// 昔ながらの
const traditionalFunc = function () {
    return "traditional 昔のやつ";
};

const resTraditional = traditionalFunc();
console.log(resTraditional);

// アロー関数
const arrowFunc = () => {
    return "アロー関数です";
};

const res = arrowFunc();
console.log(res);


// 自分で書いてみる
// - uncle という名前の変数に、アロー関数で作成した関数を代入してください。
// - この関数は、"Uncle JavaScript" という文字列を return するものにします。
// - 最後に、uncle という変数に bind された関数を実行して、その返り値を console.log() で確認し、"Uncle JavaScript" になっているか確認しましょう。

const uncleFunc = () => {
    return "Uncle Javascript";
};

const uncle = uncleFunc();
console.log(uncle);