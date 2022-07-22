input.onButtonPressed(Button.A, function () {
    butA = 1
})
let butA = 0
for (let index = 0; index <= 10; index++) {
    basic.showNumber(index)
    basic.pause(100)
    if (butA == 1) {
        break;
    }
}
