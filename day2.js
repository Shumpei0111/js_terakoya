// 昔ながらの引数を受ける関数
const traditionalFunc = function (argument) {
    // 受け取った引数をそのまま返す
    return argument;
};

const resTraditional = traditionalFunc("引数1");
console.log(resTraditional); // 渡した引数がそのまま返る


// アロー関数で引数を渡す
const arrowFunc = (arg) => {
    // 受け取った引数をそのまま返す
    return arg;
};

const res = arrowFunc("引数2");
console.log(res);


// 今日の課題
// - 変数にアロー関数をバインドします(変数名はなんでも OK)
// - そのアロー関数は、引数を受けれるようにしてください(この際の変数名もなんでも OK)
// - そのアロー関数は、受け取った引数をそのまま返すようにしてください
// - (今日説明してきたアロー関数と全く同じですね。自分で書くだけです)

const kadaiFunc = (hikisu) => {
    return hikisu;
};

const resp = kadaiFunc("課題引数");
console.log(resp);