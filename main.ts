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
    while (butA == 1) {
        basic.showNumber(index)
        basic.pause(200)
        index += 1
        while (butB == 1) {
            butA = 0
            butB = 0
            index = 0
            basic.clearScreen()
        }
    }
})
