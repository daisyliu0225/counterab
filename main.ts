let butA = 0
let butB = 0
let index = 0
input.onButtonPressed(Button.A, function () {
    butA = 1
})
input.onButtonPressed(Button.B, function () {
    butB = 1
})
basic.forever(function () {
    if (butA == 1) {
        basic.showNumber(index)
        basic.pause(100)
        index += 1
        if (butB == 1) {
            butA = 0
            butB = 0
            index = 0
            basic.clearScreen()
        }
    }
})
