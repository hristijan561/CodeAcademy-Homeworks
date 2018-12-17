
function main() {

    var BearInTheForest = new Forest();

    for (let index = 1; index <= 30; index++) {
        var num1 = index;
        console.log("");
        var num2 = BearInTheForest.oneDay(num1);
        index = num2;
    }
}
main();