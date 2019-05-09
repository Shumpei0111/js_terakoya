const profile = (name, favorite, country) => {
    return (
        "名前は" +
        name +
        "です。" +
        "好きなものは" +
        favorite +
        "です。" +
        country +
        "出身です。"
    );
};

const res = profile("Shumpei", "JavaScript", "Tokyo");
console.log(res);


const betterProfile = ({
    namae,
    fav,
    kuni
}) => {
    return (
        "名前は" +
        namae +
        "です。" +
        "好きなものは" +
        fav +
        "です。" +
        kuni +
        "出身です。"
    );
};

const namae = "Shumpei";
const fav = "Michel Jakson";
const kuni = "Tokyo";

// 引数にわたす見かけ上の順番が異なっていても問題ない
const res2 = betterProfile({
    fav,
    kuni,
    namae
});
console.log(res2);


// 課題
// アロー関数を使う
// 引数を二つ以上受けとる
// 使う

(function () {
    const drumSet = ({
        cymbal,
        snare,
        pedal
    }) => {
        return (
            "私のドラムの構成は、シンバルが" +
            cymbal +
            "で、スネアは" +
            snare +
            "で、ペダルは" +
            pedal +
            "を使っています"
        );
    };

    const cymbal = "SABIAN";
    const snare = "CANOPUS";
    const pedal = "Iron Cobra";

    const res3 = drumSet({
        cymbal,
        pedal,
        snare
    });

    console.log(res3);
})();