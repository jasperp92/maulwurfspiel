input.onButtonPressed(Button.A, function () {
    if (Zufall == 0) {
        Spielstand += 1
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Spielstand)
})
input.onButtonPressed(Button.AB, function () {
    if (Zufall == 2) {
        Spielstand += 1
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Zufall == 1) {
        Spielstand += 1
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let Zufall = 0
let Spielstand = 0
Spielstand = 0
basic.forever(function () {
    Zufall = randint(0, 2)
    if (Zufall == 0) {
        basic.showLeds(`
            . . # . .
            # . # . .
            # . # . .
            . . # . .
            . . # . .
            `)
    } else if (Zufall == 1) {
        basic.showLeds(`
            . . # . .
            . . # . #
            . . # . #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            # . # . #
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
