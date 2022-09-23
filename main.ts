basic.forever(function () {
    if (input.lightLevel() < 100) {
        music.ringTone(262)
        basic.showIcon(IconNames.Happy)
    }
    music.rest(music.beat(BeatFraction.Whole))
    basic.clearScreen()
})
