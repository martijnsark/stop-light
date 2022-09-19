for (let index = 0; index < 100; index++) {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
    basic.pause(5000)
}
